// app/admin/cards/page.js
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
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;

    const checkAuthAndFetchCards = async () => {
      try {
        // Add delay before auth check to ensure cookie is set
        await new Promise(resolve => setTimeout(resolve, 100));

        const authResponse = await fetch('/api/check-auth', {
          credentials: 'include',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });

        if (!authResponse.ok) {
          console.log('Auth check failed:', await authResponse.json()); // For debugging
          if (isMounted) {
            router.push(`/admin/login?redirectTo=${encodeURIComponent('/admin/cards')}`);
          }
          return;
        }

        const cardsResponse = await fetch('/api/cards', {
          credentials: 'include'
        });

        if (!cardsResponse.ok) {
          throw new Error('Failed to fetch cards');
        }

        const data = await cardsResponse.json();
        if (isMounted) {
          setCards(data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error:', err); // For debugging
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
          router.push(`/admin/login?redirectTo=${encodeURIComponent('/admin/cards')}`);
        }
      }
    };

    checkAuthAndFetchCards();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const fetchCards = async () => {
    try {
      const response = await fetch('/api/cards', {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }

      const data = await response.json();
      setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Add a logout handler
  const handleLogout = async () => {
    const response = await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include'
    });

    if (response.ok) {
      router.push('/admin/login');
    }
  };

//   useEffect(() => {
//     fetchCards();
//   }, []);

//   const fetchCards = async () => {
//     const response = await fetch('/api/cards');
//     const data = await response.json();
//     setCards(data);
//   };
  

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          pageName,
        }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setPageName('');
        setFile(null);
        fetchCards();
      }
    } catch (error) {
      console.error('Error creating card:', error);
      alert('Failed to create card');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`/api/cards/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchCards();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
         {/* Add logout button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
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
        
        
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {uploading ? 'Creating...' : 'Create Card'}
        </button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="border rounded p-4">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="mb-4">{card.description}</p> 
            <a href={`/${card.pageName}`}>Click More</a><br></br>
            
            <button
              onClick={() => handleDelete(card.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}