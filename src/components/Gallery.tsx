interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      <div>
        {images.map((image) => (
          <div>
            <img src={image.src} alt='' />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
