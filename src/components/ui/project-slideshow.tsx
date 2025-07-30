"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectSlideshowProps {
  images: string[];
  title: string;
  projectId?: string;
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images, title, projectId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0);

  // Auto-switch images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setZoomedImageIndex(currentIndex); // Remember which image was clicked
    setIsZoomed(true);
  };

  const handleBackdropClick = () => {
    setIsZoomed(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="h-48 md:h-56 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-xl mb-12 flex items-center justify-center">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <>
      {/* Main Slideshow */}
      <div className="mb-6">
        <div 
          className="relative h-48 md:h-56 rounded-xl overflow-hidden"
          style={{
            backdropFilter: 'blur(15px)',
            background: 'rgba(255, 255, 255, 0.4)',
            border: projectId && ['frm-platform', 'food-ordering', 'safe-elderly-care'].includes(projectId) 
              ? 'none' 
              : '3px solid rgba(210, 210, 210, 0.8)'
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 cursor-pointer"
                  onClick={handleImageClick}
                >
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot Pagination - Below Image */}
        <div className="flex justify-center mt-4 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-800 scale-125'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
            
            {/* Left Arrow */}
            {images.length > 1 && (
              <button
                className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
              >
                <span className="text-xl font-bold">‹</span>
              </button>
            )}

            {/* Right Arrow */}
            {images.length > 1 && (
              <button
                className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImageIndex((prev) => (prev + 1) % images.length);
                }}
              >
                <span className="text-xl font-bold">›</span>
              </button>
            )}
            
            {/* Zoomed Image */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[zoomedImageIndex]}
                alt={`${title} - Image ${zoomedImageIndex + 1}`}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Close hint */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectSlideshow;