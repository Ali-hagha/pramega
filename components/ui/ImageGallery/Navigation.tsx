import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Navigation = () => {
  return (
    <div className="hidden md:block text-4xl text-gray-500 ">
      {' '}
      <ButtonBack className="absolute top-1/2 left-3 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowLeftSLine />
      </ButtonBack>
      <ButtonNext className="absolute top-1/2 right-3 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowRightSLine />
      </ButtonNext>
    </div>
  );
};

export default Navigation;
