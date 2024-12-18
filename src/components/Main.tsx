interface MainProps {}
// import heroImage from '../assets/all_tribes_property.jpg';
import heroImage from '../assets/blanket_2.jpg';
import secondImage from '../assets/all_tribes_people_close.jpg';
import churchImage from '../assets/community_church_outside.webp';

const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className='mb-32 lg:text-xl'>
      <div className='mt-16 mb-8 px-8 relative w-full flex flex-col'>
        <h1 className='text-4xl font-bold lg:text-5xl text-center self-center font-parisienne'>
          All Tribes
        </h1>
        <h1 className='text-4xl lg:text-5xl font-bold text-center self-center font-parisienne'>
          Community Church
        </h1>
        <h2 className='italic text-right'>established 1994.</h2>
        {/* <p>An American Baptist Church USA denomination.</p> */}
      </div>
      <div>
        <img
          className='w-full h-[75vw] object-cover object-bottom lg:h-auto lg:aspect-[4/2]'
          src={heroImage.src}
        ></img>
      </div>
      <div className='mt-16'>
        <div className='px-8'>
          <i>
            "Where we are filling the spiritual needs of a diverse population,
            respecting the native and non-native cultures through Jesus Christ"
          </i>
        </div>
        <img
          className='w-full h-[75vw] object-cover lg:h-auto lg:aspect-[4/2] object-center'
          src={secondImage.src}
        ></img>
      </div>
      <div className='mt-16'>
        <div className='px-8'>
          <p>
            We meet Sunday afternoons at our sister church, Community Baptist
            Church located on Garnett just north of East 31st Street
            intersection in East Tulsa.
          </p>
        </div>
        <div>
          <img
            className='w-full h-[75vw] object-cover object-top lg:h-auto lg:aspect-[4/2]'
            src={churchImage.src}
          ></img>
          <p className='px-8'>
            <a
              href='https://maps.app.goo.gl/Henjm9jJNgn4a82i9'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 underline'
            >
              2805 S Garnett Road, Tulsa, OK 74129
            </a>
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <div className='px-8'>
          <p className='text-center'>All are welcome.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
