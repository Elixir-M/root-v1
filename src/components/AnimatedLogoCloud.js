"use client"
import './AnimatedLogoCloud.css'
import React from 'react';

const logos = [
  // Frontend & Frameworks
  {
    name: 'Next.js',
    url: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  },
  {
    name: 'React',
    url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  },
  
  {
    name: 'Angular',
    url: 'https://cdn.worldvectorlogo.com/logos/angular-3.svg',
  },
  {
    name: 'Svelte',
    url: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
  },
  // Backend & Languages
  {
    name: 'Node.js',
    url: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
  },
  {
    name: 'Python',
    url: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  },
  {
    name: 'Django',
    url: 'https://cdn.worldvectorlogo.com/logos/django.svg',
  },
  {
    name: 'Ruby',
    url: 'https://cdn.worldvectorlogo.com/logos/ruby.svg',
  },
  // Databases

  {
    name: 'PostgreSQL',
    url: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
  },
  {
    name: 'Redis',
    url: 'https://cdn.worldvectorlogo.com/logos/redis.svg',
  },
  // Cloud Services
  {
    name: 'AWS',
    url: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
  },
  {
    name: 'Google Cloud',
    url: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
  },
  {
    name: 'Azure',
    url: 'https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg',
  },
  // DevOps & Tools
  {
    name: 'Docker',
    url: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  },
  {
    name: 'Jenkins',
    url: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg',
  },
  // Development Tools
  {
    name: 'Git',
    url: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  },
  {
    name: 'GitHub',
    url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
  },
  {
    name: 'VSCode',
    url: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
  },
  // CSS & Styling
  {
    name: 'TailwindCSS',
    url: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
  },
  {
    name: 'Sass',
    url: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
  },
  // Additional Tools
  {
    name: 'Firebase',
    url: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
  },
 
  {
    name: 'TypeScript',
    url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  },
  {
    name: 'Prisma',
    url: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
  }
]

const AnimatedLogoCloud = () => {
  const [isImageError, setIsImageError] = React.useState({})

  const handleImageError = (logoName) => {
    setIsImageError(prev => ({...prev, [logoName]: true}))
  }

  return (
    <div className="w-full bg-black py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-20"
            >
              {logos.filter(logo => !isImageError[logo.name]).map((logo) => (
                <img
                  key={`${groupIndex}-${logo.name}`}
                  src={logo.url}
                  onError={() => handleImageError(logo.name)}
                  className="h-8 w-auto px-2 text-white dark:invert brightness-0"
                  alt={logo.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud