


//app/admin/cards/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminCards() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pageName, setPageName] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [charts, setCharts] = useState([{ title: '', percentage: '' }]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [selectedPageName, setSelectedPageName] = useState('');
  const [subheading, setSubheading] = useState('');  // NEW
  const [minuteRead, setMinuteRead] = useState('');  // NEW
  const [author, setAuthor] = useState('');          // NEW
  const [intro, setIntro] = useState('');            // NEW
  const [solution, setSolution] = useState('');       // NEW
  const [conclusion, setConclusion] = useState('');   // NEW
  // const [services, setServices] = useState('');
  const [services, setServices] = useState(['default']);
  
  const router = useRouter();

  const serviceOptions = [
    'default',
    'blockchain',
    'mobile dev',
    'app dev',
    'web dev',
    'ai and ml',
    'cms',
    'iot',
    'graphic design',
    'quality assurance and testing',
    'game dev',
    'supply chain',
    'cybersec',
    'digital marketting and branding',
    'cloud solutions',
    'system integration services'
  ]

  const fetchCards = async () => {
    try {
      console.log('Starting fetchCards...');
      
      // Auth check
      const authResponse = await fetch('/api/check-auth', {
        credentials: 'include',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
  
      if (!authResponse.ok) {
        const currentPath = window.location.pathname;
        router.push(`/admin/login?redirectTo=${encodeURIComponent(currentPath)}`);
        return;
      }
  
      // Fetch cards with explicit error handling
      console.log('Fetching cards...');
      const cardsResponse = await fetch('/api/cards', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
  
      // Log the raw response for debugging
      console.log('Response status:', cardsResponse.status);
      console.log('Response headers:', Object.fromEntries(cardsResponse.headers));
      
      // Try to get the response text first
      const responseText = await cardsResponse.text();
      console.log('Raw response:', responseText);
  
      // Only try to parse as JSON if we have content
      if (!responseText) {
        throw new Error('Empty response from server');
      }
  
      const data = JSON.parse(responseText);
      
      if (!cardsResponse.ok) {
        throw new Error(data.details || data.error || 'Failed to fetch cards');
      }
  
      setCards(data.data || []);
      setError(null);
      
    } catch (err) {
      console.error('Error in fetchCards:', err);
      setError(err.message);
      
      if (err.message.includes('unauthorized') || err.message.includes('unauthenticated')) {
        const currentPath = window.location.pathname;
        router.push(`/admin/login?redirectTo=${encodeURIComponent(currentPath)}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || errorData.error || 'Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleServiceToggle = (service) => {
    if (services.includes(service)) {
      // Remove service if already selected
      setServices(services.filter(s => s !== service));
    } else {
      // Add service if not selected
      setServices([...services, service]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (services.length === 0) {
      alert('Please select at least one service');
      return;
    }
    setUploading(true);

    try {
      let imageUrl = '';
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          pageName,
          services,
        }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setPageName('');
        setServices(['default']);
        setFile(null);
        await fetchCards();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Failed to create card');
      }
    } catch (error) {
      console.error('Error creating card:', error);
      alert('Failed to create card: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        await fetchCards();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Failed to delete card');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      alert('Failed to delete card: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        router.push('/admin/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed: ' + error.message);
    }
  };

  const deleteChart = (index) => {
    setCharts(charts.filter((_, i) => i !== index));
  };

  

  const addChart = () => {
    setCharts([...charts, { title: '', percentage: '' }]);
  };

  const updateChart = (index, field, value) => {
    console.log(`Updating chart ${index}, field: ${field}, value: ${value}`);
    const newCharts = [...charts];
    newCharts[index][field] = value;
    console.log('New charts state:', newCharts);
    setCharts(newCharts);
  };

  const insertMarkdown = (fieldId, markdownSyntax, setter) => {
    const textarea = document.getElementById(fieldId);
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    
    // If text is selected, wrap it with markdown syntax
    if (start !== end) {
      const newText = 
        text.substring(0, start) + 
        markdownSyntax + 
        text.substring(start, end) + 
        markdownSyntax + 
        text.substring(end);
      setter(newText);
    } else {
      // If no text is selected, just insert the markdown syntax
      const newText = 
        text.substring(0, start) + 
        markdownSyntax + markdownSyntax + 
        text.substring(end);
      setter(newText);
      
      // Move cursor between the markdown syntax
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + markdownSyntax.length, start + markdownSyntax.length);
      }, 0);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    console.log('form submission started')
    try {
      console.log('Current charts state:', charts);

    const formattedCharts = charts.map(chart => {
      console.log('Processing chart:', chart);
      return {
        title: chart.title || '',  // Ensure title exists
        percentage: parseFloat(chart.percentage) || 0  // Ensure percentage exists
      };
    });

    console.log('Formatted charts:', formattedCharts);

    const formData = {
      pageName: selectedPageName,
      subheading,
      minuteRead: parseInt(minuteRead),
      author,
      intro,
      solution,
      conclusion,
      charts: formattedCharts
    };

    console.log('Sending form data:', formData);
      
      console.log('Sending data:', formData);
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        credentials: 'include',
        body: JSON.stringify({
          pageName: selectedPageName,
          // New fields added to the request body
          subheading,
          minuteRead: parseInt(minuteRead),
          author,
          intro,
          solution,
          conclusion,
          charts: charts.map(chart => ({
            title: chart.title,
            percentage: parseFloat(chart.percentage)
          }))
        }),
      });

      if (response.ok) {
        setShowBlogForm(false);
        setCharts([{ title: '', percentage: '' }]);
        setSubheading('');
        setMinuteRead('');
        setAuthor('');
        setIntro('');
        setSolution('');
        setConclusion('');
        alert('Blog Page created successfully!')
      } else {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Failed to create blog page');
      }
    } catch (error) {
      console.error('Error creating blog page:', error);
      alert('Failed to create blog page: ' + error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Card Management</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Page Name</label>
          <input
            type="text"
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

         {/* Multiple Services Selection */}
        <div>
          <label className="block mb-2">Services (select multiple)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 border rounded p-3">
            {serviceOptions.map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={`service-${option}`}
                  checked={services.includes(option)}
                  onChange={() => handleServiceToggle(option)}
                  className="mr-2"
                />
                <label htmlFor={`service-${option}`} className="text-sm">
                  {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                </label>
              </div>
            ))}
          </div>
          {services.length === 0 && (
            <p className="text-red-500 text-sm mt-1">Please select at least one service</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={uploading || services.length === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {uploading ? 'Creating...' : 'Create Card'}
        </button>
      </form>

      
      {showBlogForm && (
  <div className="fixed  inset-0 bg-black bg-opacity-50 overflow-y-auto">
    <div className="min-h-screen flex items-center justify-center py-12">
    <div className="bg-white p-8 rounded-lg w-full max-w-4xl mx-4 relative">
      <h2 className="text-xl font-bold mb-4 text-black">Create Blog Page</h2>
      <form id="blogForm" onSubmit={handleBlogSubmit} className="space-y-6 max-h-[80vh] overflow-y-auto pr-4">
        {/* Subheading with markdown */}
        <div className="space-y-2">
          <label className="block mb-2 text-black">Subheading</label>
          <div className="border rounded">
            <div className="flex gap-2 p-2 border-b bg-gray-50">
              <button
                type="button"
                onClick={() => insertMarkdown('subheading', '**', setSubheading)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black font-bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('subheading', '*', setSubheading)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black italic"
              >
                I
              </button>
            </div>
            <textarea
              id="subheading"
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
              className="w-full p-2 text-black bg-white min-h-[100px] whitespace-pre-wrap"
              style={{ whiteSpace: 'pre-wrap' }}
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Formatting: Select text and use B for **bold**, I for *italic*. All spaces and line breaks are preserved.
          </p>
        </div>

        {/* Basic info grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-black">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded text-black bg-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-black">Minute Read</label>
            <input
              type="number"
              value={minuteRead}
              onChange={(e) => setMinuteRead(e.target.value)}
              className="w-full p-2 border rounded text-black bg-white"
              min="1"
              required
            />
          </div>
        </div>

        {/* Introduction Paragraph */}
        <div className="space-y-2">
          <label className="block mb-2 text-black">Introduction Paragraph</label>
          <div className="border rounded">
            <div className="flex gap-2 p-2 border-b bg-gray-50">
              <button
                type="button"
                onClick={() => insertMarkdown('intro', '**', setIntro)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black font-bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('intro', '*', setIntro)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black italic"
              >
                I
              </button>
            </div>
            <textarea
              id="intro"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              className="w-full p-2 text-black bg-white min-h-[200px] whitespace-pre-wrap"
              style={{ whiteSpace: 'pre-wrap' }}
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Formatting: Select text and use B for **bold**, I for *italic*. All spaces and line breaks are preserved.
          </p>
        </div>

        {/* Solution Paragraph */}
        <div className="space-y-2">
          <label className="block mb-2 text-black">Solution Paragraph</label>
          <div className="border rounded">
            <div className="flex gap-2 p-2 border-b bg-gray-50">
              <button
                type="button"
                onClick={() => insertMarkdown('solution', '**', setSolution)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black font-bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('solution', '*', setSolution)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black italic"
              >
                I
              </button>
            </div>
            <textarea
              id="solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="w-full p-2 text-black bg-white min-h-[200px] whitespace-pre-wrap"
              style={{ whiteSpace: 'pre-wrap' }}
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Formatting: Select text and use B for **bold**, I for *italic*. All spaces and line breaks are preserved.
          </p>
        </div>

       {/* Charts section */}
<div className="space-y-4">
  <label className="block mb-2 text-black font-medium">Charts</label>
  {charts.map((chart, index) => (
    <div key={index} className="space-y-4 relative text-black bg-gray-50 p-4 rounded">
      <div>
        <label className="block mb-2">Chart {index + 1} Title</label>
        <div className="border rounded bg-white">
          <div className="flex gap-2 p-2 border-b bg-gray-50">
            <button
              type="button"
              onClick={() => {
                const newValue = insertMarkdown(
                  `chart-title-${index}`,
                  '**',
                  (value) => updateChart(index, 'title', value)
                );
              }}
              className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black font-bold"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => {
                const newValue = insertMarkdown(
                  `chart-title-${index}`,
                  '*',
                  (value) => updateChart(index, 'title', value)
                );
              }}
              className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black italic"
            >
              I
            </button>
          </div>
          <textarea
            id={`chart-title-${index}`}
            value={chart.title || ''}
            onChange={(e) => updateChart(index, 'title', e.target.value)}
            className="w-full p-2 text-black bg-white whitespace-pre-wrap"
            style={{ whiteSpace: 'pre-wrap' }}
            placeholder="Enter chart title"
            required
          />
        </div>
      </div>
      <div>
        <label className="block mb-2">Percentage</label>
        <input
          type="number"
          value={chart.percentage || ''}
          onChange={(e) => {
            const value = e.target.value;
            if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
              updateChart(index, 'percentage', value);
            }
          }}
          onBlur={(e) => {
            const value = e.target.value;
            if (value === '') {
              updateChart(index, 'percentage', '0');
            }
          }}
          className="w-full p-2 border rounded text-black bg-white"
          min="0"
          max="100"
          step="0.1"
          required
          placeholder="Enter percentage (0-100)"
        />
      </div>
      <button
        type="button"
        onClick={() => {
          if (charts.length > 1) {
            deleteChart(index);
          } else {
            alert('You must have at least one chart');
          }
        }}
        className="absolute top-4 right-4 text-red-500 hover:text-red-700"
        title="Delete chart"
      >
        ✕
      </button>
    </div>
  ))}

  <button
    type="button"
    onClick={addChart}
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
  >
    Add Another Chart
  </button>
</div>

{/* Validation message */}
{charts.some(chart => !chart.title || !chart.percentage) && (
  <div className="text-red-500 text-sm mt-2">
    Please fill in all chart titles and percentages
  </div>
)}

        {/* Conclusion Paragraph */}
        <div className="space-y-2">
          <label className="block mb-2 text-black">Conclusion Paragraph</label>
          <div className="border rounded">
            <div className="flex gap-2 p-2 border-b bg-gray-50">
              <button
                type="button"
                onClick={() => insertMarkdown('conclusion', '**', setConclusion)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black font-bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => insertMarkdown('conclusion', '*', setConclusion)}
                className="px-3 py-1 rounded bg-white border hover:bg-gray-100 text-black italic"
              >
                I
              </button>
            </div>
            <textarea
              id="conclusion"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              className="w-full p-2 text-black bg-white min-h-[200px] whitespace-pre-wrap"
              style={{ whiteSpace: 'pre-wrap' }}
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Formatting: Select text and use B for **bold**, I for *italic*. All spaces and line breaks are preserved.
          </p>
        </div>
        

        <div className="flex justify-end space-x-4 pt-4 mt-6 sticky bottom-0 bg-white">
          <button
            type="button"
            onClick={() => setShowBlogForm(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={(e) => {console.log('submit button clicked'); }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Blog Page
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>
)}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.length === 0 ? (
          <div className="col-span-full text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No cards found. Create your first card above.</p>
          </div>
        ) : (
          cards.map((card) => (
            <div key={card.id} className="border rounded p-4">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="mb-4">{card.description}</p> 
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">Services:</p>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(card.services) 
                    ? card.services.map((service, idx) => (
                        service !== 'default' && (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {service.replace('-', ' ')}
                          </span>
                        )
                      ))
                    : card.services !== 'default' && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {card.services.replace('-', ' ')}
                        </span>
                      )
                  }
                </div>
              </div>
              <a href={`/blogs/${card.pageName}`} className="text-blue-500 hover:text-blue-700">
                Click More
              </a>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => {
                    console.log('Opening form for page:', card.pageName);
                    setSelectedPageName(card.pageName);
                    setShowBlogForm(true);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Create Blog Page
                </button>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}