import Link from 'next/link';
import { RiMailOpenFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';
import LinkListItem from './LinkListItem';
const Footer = () => {
  return (
    <footer className="flex justify-between bg-nuetral-dark  text-nuetral-light mx-auto py-10 px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="flex flex-col text-lg">
        <div>
          <h3 className="text-6xl font-bebas_neue align-bottom mb-12">
            Pramega
          </h3>
        </div>
        <div className="flex space-x-16 ">
          <div className="mb-6">
            <h4 className="font-semibold mb-1">Contact Us:</h4>
            <p className="text-nuetral-light/80">+26 921391031</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Send Us An Email:</h4>
            <Link
              href={'mailto:info@pramega.com'}
              className="text-nuetral-light/80  underline underline-offset-2 decoration-transparent hover:decoration-primary hover:text-primary hover:opacity-100  transition-all"
            >
              info@pramega.com
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Address:</h4>
          <p className="text-nuetral-light/80">
            5732 Northcote Ave Hammond, Indiana(IN), 46320
          </p>
        </div>
      </div>

      <div className="flex flex-grow justify-around px-16 pl-32">
        <div>
          <h3 className="font-semibold text-lg text-neutral-light mb-6">
            {"What's Popular"}
          </h3>
          <ul className="flex flex-col space-y-4">
            <LinkListItem href="#">L Shaped Couch</LinkListItem>
            <LinkListItem href="#">Dining Table</LinkListItem>
            <LinkListItem href="#">Queen Size Bed</LinkListItem>
            <LinkListItem href="#">King Size Bed</LinkListItem>
            <LinkListItem href="#">Lamps</LinkListItem>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-light mb-6">
            The Company
          </h3>
          <ul className="flex flex-col space-y-4">
            <LinkListItem href="#">Careers</LinkListItem>
            <LinkListItem href="#">About Us</LinkListItem>
            <LinkListItem href="#">Customer Reviews</LinkListItem>
            <LinkListItem href="#">Contact Us</LinkListItem>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-neutral-light mb-6">
            Shopping With Us
          </h3>
          <ul className="flex flex-col space-y-4">
            <LinkListItem href="#">Delivery</LinkListItem>
            <LinkListItem href="#">Product Warranty</LinkListItem>
            <LinkListItem href="#">Sales & Refunds</LinkListItem>
            <LinkListItem href="#">Help Center</LinkListItem>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
