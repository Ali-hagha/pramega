import { RiMailOpenFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <footer className="flex bg-nuetral-dark text-nuetral-light mx-auto py-10 px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="flex flex-col">
        <div>
          <h3 className="text-6xl font-bebas_neue align-bottom mb-12">
            Pramega
          </h3>
        </div>
        <div className="flex space-x-16 text-lg ">
          <div className="mb-6">
            <h4 className="font-semibold mb-1">Contact Us:</h4>
            <p className="text-nuetral-light/80">+26 921391031</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Send Us An Email:</h4>
            <p className="text-nuetral-light/80">info@pragema.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Address:</h4>
          <p className="text-nuetral-light/80">
            5732 Northcote Ave Hammond, Indiana(IN), 46320
          </p>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;
