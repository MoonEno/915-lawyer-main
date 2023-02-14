import React from 'react';
import Box from 'components/common/Box';
import NextImage from 'components/common/NextImage';
import Heading from 'components/common/Heading';
import Container from 'components/common/UI/Container';
import Carousel from './carousel';
import TestimonialsArea from './testimonials.style';
import { TESTIMONIALS_DATA } from 'data/FoodDelivery';
const Testimonials = () => {
  const { blockImage, title, posts } = TESTIMONIALS_DATA;
  return (
    <TestimonialsArea id="testimonials">
      <Container>
        <Box className="mainImage">
          <NextImage src={blockImage} alt={title} />
        </Box>
        <Box className="mainContent">
          <Heading as="h2" content={title} />
          <Carousel data={posts} />
        </Box>
      </Container>
    </TestimonialsArea>
  );
};

export default Testimonials;
