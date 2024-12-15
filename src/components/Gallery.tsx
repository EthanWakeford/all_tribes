import { useEffect, useState } from 'react';

interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, 5000]);

  const getImageClasses = (index: number) => {
    let baseClasses =
      'w-full bg-cover aspect-square bg-center transition-all duration-slow ease-in-out';
    if (index === currentImageIndex) {
      return `${baseClasses} transform opacity-100 h-auto`;
    } else {
      return `${baseClasses} transform opacity-0 h-0`;
    }
  };

  return (
    <div>
      <h1 className='text-center font-serif text-2xl'>Some Pictures of Us</h1>
      <div className='relative aspect-square w-full shadow-inner p-8'>
        {images.map((image, index) => (
          <div
            key={index}
            className={getImageClasses(index)}
            aria-label={image.alt}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
        {/* <div className='absolute inset-0 h-full w-full bg-black opacity-30'></div> */}
      </div>
    </div>
  );
};

export default Gallery;
