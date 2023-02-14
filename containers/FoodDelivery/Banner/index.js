import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Container from 'components/common/UI/Container';
import Heading from 'components/common/Heading'
import Text from 'components/common/Text';
import NextImage from 'components/common/NextImage';
import Box from 'components/common/Box';
import mapPin from 'public/images/foodDelivery/banner-map-pin.svg';
import arrowIcon from 'public/images/foodDelivery/banner-arrow.svg';
import BannerWrapper from './banner.style';
import { BANNER_DATA } from 'data/FoodDelivery';
const Banner = () => {
  const { sectionImage, title, text, tagLine, buttons } = BANNER_DATA;
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" className="paragraph" content={text} />
          <form action="#" className="bannerForm">
            <label htmlFor="location" className="sr-only">
              Your Address
            </label>
            <img className="mapPin" src={mapPin?.src} alt={title} />
            <input type="text" placeholder="Enter your address.." />
            <button type="submit" className="bannerBtn">
              <img src={arrowIcon?.src} alt="banner button" />
            </button>
          </form>
          <Text as="p" className="tagLine" content={tagLine} />
          <Box className="buttonWrap">
            {buttons.map(({ icon, text, title, link }, index) => (
              <Link href={link} key={`banner-button-${index}`}>
                <a className="bannerAppBtn">
                  <img src={icon?.src} width="30" height="30" alt={title} />
                  <Box className="btnContent">
                    <Text as="span" content={text} />
                    <Text as="p" content={title} />
                  </Box>
                </a>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className="image">
          <Fade right>
            <NextImage src={sectionImage} alt={title} />
          </Fade>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
