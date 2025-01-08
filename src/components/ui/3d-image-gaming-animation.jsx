"use client"
import React, { useState, useEffect, useRef } from 'react';

const CharacterAnimation = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFloating, setIsFloating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const dragRef = useRef({
    startX: 0,
    lastX: 0,
    lastRotation: 0
  });
  const imageRef = useRef(null);
  const animationRef = useRef(null);

  // Configuration
  const sensitivity = {
    rotation: 1,      // Rotation speed multiplier
    returnSpeed: 0.08, // Speed of return animation (0-1)
    drag: 0.8        // Drag sensitivity
  };

  useEffect(() => {
    // Return animation when not dragging
    const animateReturn = () => {
      if (!isDragging) {
        // Calculate distance to initial position
        const distance = 0 - rotation;
        
        // If we're close enough to initial position, snap to it
        if (Math.abs(distance) < 0.1) {
          setRotation(0);
          return;
        }

        // Spring-like return motion
        const newRotation = rotation + (distance * sensitivity.returnSpeed);
        setRotation(newRotation);
        animationRef.current = requestAnimationFrame(animateReturn);
      }
    };

    if (!isDragging) {
      animationRef.current = requestAnimationFrame(animateReturn);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, rotation]);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragRef.current.lastX;
    setRotation(prev => prev + deltaX * sensitivity.drag);
    dragRef.current.lastX = e.clientX;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsFloating(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      lastX: e.clientX,
      lastRotation: rotation
    };
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDragging]);

  return (
    <div 
      style={{
        perspective: '1000px',
        display: 'inline-block',
        background: 'transparent'
      }}
    >
      <div style={{ transformStyle: 'preserve-3d' }}>
        {React.cloneElement(children, {
          ref: imageRef,
          className: `${children.props.className} cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`,
          style: {
            ...children.props.style,
            animation: isFloating ? 'float 4s ease-in-out infinite' : 'none',
            transform: `
              rotateY(${rotation}deg)
              scale(${isHovered ? 1.05 : 1})
              ${isDragging ? 'scale(0.98)' : ''}
            `,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            filter: isHovered ? `
              brightness(1.1)
              drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))
              drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))
            ` : 'none',
            userSelect: 'none',
            transformStyle: 'preserve-3d',
            willChange: 'transform, filter'
          },
          onMouseMove: handleMouseMove,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onMouseDown: handleMouseDown,
        })}
      </div>
    </div>
  );
};

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotateY(0deg) scale(1); 
    }
    25% {
      transform: translateY(-15px) rotateY(5deg) scale(1.02);
    }
    50% {
      transform: translateY(-20px) rotateY(0deg) scale(1.03);
    }
    75% {
      transform: translateY(-15px) rotateY(-5deg) scale(1.02);
    }
  }
`;
document.head.appendChild(style);

export default CharacterAnimation;