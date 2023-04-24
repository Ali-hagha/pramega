import Link from 'next/link';
import { RiMailOpenFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';
import LinkListItem from './LinkListItem';
import LinkListGroup from './LinkListGroup';
import {
  RiFacebookBoxFill,
  RiFacebookBoxLine,
  RiInstagramFill,
  RiInstagramLine,
  RiPinterestFill,
  RiPinterestLine,
} from 'react-icons/ri';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className=" bg-neutral-dark rounded-3xl mb-24 md:mb-8  text-neutral-light mx-auto py-12 px-6 sm:px-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:text-lg mb-16 lg:mb-0">
          <div>
            <h3 className="text-5xl lg:text-6xl font-bebas_neue align-bottom mb-12">
              Pramega
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-16">
            <div className="mb-6">
              <h4 className="font-semibold mb-1">Contact Us:</h4>
              <p className="text-neutral-light/80">+26 921391031</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-1">Send Us An Email:</h4>
              <Link
                href={'mailto:info@pramega.com'}
                className="text-neutral-light/80  underline underline-offset-2 decoration-transparent hover:decoration-primary hover:text-primary hover:opacity-100  transition-all"
              >
                info@pramega.com
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Address:</h4>
            <p className="text-neutral-light/80">
              5732 Northcote Ave Hammond, Indiana(IN), 46320
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row flex-grow  lg:justify-around  pl:24 xl:pl-32">
          <LinkListGroup title="What's Popular">
            <LinkListItem href="#">L Shaped Couch</LinkListItem>
            <LinkListItem href="#">Dining Table</LinkListItem>
            <LinkListItem href="#">Queen Size Bed</LinkListItem>
            <LinkListItem href="#">King Size Bed</LinkListItem>
            <LinkListItem href="#">Lamps</LinkListItem>
          </LinkListGroup>
          <LinkListGroup title="The Company">
            <LinkListItem href="#">Careers</LinkListItem>
            <LinkListItem href="#">About Us</LinkListItem>
            <LinkListItem href="#">Customer Reviews</LinkListItem>
            <LinkListItem href="#">Contact Us</LinkListItem>
          </LinkListGroup>
          <LinkListGroup title="Shopping Wtih Us" classes="hidden xl:block">
            <LinkListItem href="#">Delivery</LinkListItem>
            <LinkListItem href="#">Product Warranty</LinkListItem>
            <LinkListItem href="#">Sales & Refunds</LinkListItem>
            <LinkListItem href="#">Help Center</LinkListItem>
          </LinkListGroup>
        </div>
      </div>
      <hr className="bg-neutral-light/40 border-0 h-px my-10" />
      <div className="flex justify-between items-center">
        <div className="text-xs text-neutral-light/80">
          {'© Pramega. All Rights Reserved.'}
        </div>
        <div className="flex space-x-6">
          <SocialLink
            DefaultIcon={RiFacebookBoxLine}
            HoverIcon={RiFacebookBoxFill}
          />
          <SocialLink
            DefaultIcon={RiInstagramLine}
            HoverIcon={RiInstagramFill}
          />
          <SocialLink
            DefaultIcon={RiPinterestLine}
            HoverIcon={RiPinterestFill}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
