import React from 'react';
import Link from 'next/link';
import Container from 'components/common/UI/Container';
import Text from 'components/common/Text';
import Image from 'components/common/Image';
import Box from 'components/common/Box';
import Logo from 'components/common/UIElements/Logo';
import FooterWrapper from './footer.style';

import LogoImage from 'public/images/foodDelivery/logo-dark.png';
import facebookIcon from 'public/images/foodDelivery/footer-fb.svg';
import twitterIcon from 'public/images/foodDelivery/footer-twitter.svg';
import dribbleIcon from 'public/images/foodDelivery/footer-dribbble.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box className="leftText">
          <Logo
            href="#"
            className="logo"
            logoSrc={LogoImage}
            title="FoodDelivery"
          />
          <Box className="footerText">
            <Text
              as="span"
              content={`Copyright © ${new Date().getFullYear()}`}
            />{' '}
            <Link href="#">
              <a>RedQ, Inc.</a>
            </Link>
          </Box>
        </Box>
        <Box className="footerMenu">
          <Link href="#">
            <a>Support</a>
          </Link>
          <Link href="#">
            <a>About Us</a>
          </Link>
          <Link href="#">
            <a>Privacy</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </Box>
        <Box className="socialLinks">
          <Text as="span" content="Social:" />
          <Link href="#">
            <a>
              <Image src={facebookIcon?.src} alt="facebook" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <Image src={twitterIcon?.src} alt="twitter" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <Image src={dribbleIcon?.src} alt="dribbble" />
            </a>
          </Link>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
