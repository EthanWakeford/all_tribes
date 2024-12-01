interface MainProps {}
// import heroImage from '../assets/all_tribes_property.jpg';
import heroImage from '../assets/all_tribes_blanket.jpg';

const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className='px-8 pt-24'>
      <div className='relative w-full'>
        {/* <img
          className='absolute inset-0 z-[-10] brightness-[0.1]'
          src={heroImage.src}
        ></img> */}
        <h1 className='text-3xl font-bold font-parisienne'>
          All Tribes Community Church
        </h1>
        <h2 className='italic text-right'>established 1994.</h2>
        <p>An American Baptist Church USA denomination.</p>
      </div>
      <div className='mt-40'>
        <i>
          "Where we are filling the spiritual needs of a diverse popilation,
          respecting the native and non-native cultures through Jesus Christ"
        </i>
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
