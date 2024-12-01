interface GalleryProps {}
import image from '../assets/all_tribes_people_close.jpg';

const Gallery: React.FC<GalleryProps> = ({}) => {
  return (
    <>
      <div>
        <img src={image.src} alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
    </>
  );
};

export default Gallery;
