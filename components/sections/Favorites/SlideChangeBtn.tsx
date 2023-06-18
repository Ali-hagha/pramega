import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const FavPageChangeBtn = () => {
  return (
    <div className="hidden lg:block text-4xl text-gray-500 ">
      <ButtonBack className="absolute top-1/2 -translate-y-1/2 -left-4 shadow-md p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowLeftSLine />
      </ButtonBack>
      <ButtonNext className="absolute top-1/2 -translate-y-1/2 -right-4 shadow-md p-2 rounded-full bg-white hover:text-gray-700 transition-colors">
        <RiArrowRightSLine />
      </ButtonNext>
    </div>
  );
};

export default FavPageChangeBtn;
