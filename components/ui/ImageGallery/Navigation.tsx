import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Navigation = () => {
  return (
    <div className="hidden md:block text-4xl text-gray-500 ">
      <ButtonBack className="absolute md:top-[40%] xl:top-1/2 -translate-y-1/2 left-4 xl:left-44 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowLeftSLine />
      </ButtonBack>
      <ButtonNext className="absolute md:top-[40%] xl:top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowRightSLine />
      </ButtonNext>
    </div>
  );
};

export default Navigation;
