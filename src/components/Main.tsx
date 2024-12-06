interface MainProps {}
// import heroImage from '../assets/all_tribes_property.jpg';
import heroImage from '../assets/all_tribes_blanket.jpg';
import secondImage from '../assets/all_tribes_people_close.jpg';

const Main: React.FC<MainProps> = ({}) => {
  return (
    <div>
      <div className='mt-16 px-8 mb-8 relative w-full flex flex-col'>
        <h1 className='text-4xl font-bold text-center self-center font-parisienne'>
          All Tribes
        </h1>
        <h1 className='text-4xl font-bold text-center self-center font-parisienne'>
          Community Church
        </h1>
        <h2 className='italic text-right'>established 1994.</h2>
        <p>An American Baptist Churcsh USA denomination.</p>
      </div>
      <div>
        <img className='w-full h-[75vw] object-cover' src={heroImage.src}></img>
      </div>
      <div className='mt-16'>
        <i>
          "Where we are filling the spiritual needs of a diverse popilation,
          respecting the native and non-native cultures through Jesus Christ"
        </i>
        <img
          className='w-full h-[75vw] object-cover mt-8'
          src={secondImage.src}
        ></img>
      </div>
      <div className='mt-40'>
        <p>
          We meet Sunday afternoons at our sister church, Community Baptist
          Church located on Garnett just north of East 31st Street intersection
          in East Tulsa.
        </p>
      </div>
      <div className='mt-40'>
        <p>All are welcome.</p>
      </div>
    </div>
  );
};

export default Main;
