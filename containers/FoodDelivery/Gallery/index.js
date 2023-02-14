import React from 'react';
import Container from 'components/common/UI/Container';
import Text from 'components/common/Text';
import Heading from 'components/common/Heading';
import NextImage from 'components/common/NextImage';
import Box from 'components/common/Box';
import GalleryWrapper from './gallery.style';
import { GALLERY_DATA } from 'data/FoodDelivery';
const Gallery = () => {
  const { title, text, images } = GALLERY_DATA;
  return (
    <GalleryWrapper>
      <Container>
        <Box className="galleryBox">
          {images.map(({ path }, index) => (
            <Box className="galleryItem" key={index}>
              <NextImage src={path} alt="gallery image" />
            </Box>
          ))}
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
