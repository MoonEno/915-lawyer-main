import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'components/common/UI/Container';
import Text from 'components/common/Text';
import Heading from 'components/common/Heading';
import NextImage from 'components/common/NextImage';
import Box from 'components/common/Box';
import ProductDeliveryWrapper from './productDelivery.style';
import { DELIVERY_PRODUCT_DATA } from 'data/FoodDelivery';
const ProductDelivery = () => {
  const { sectionContent, posts } = DELIVERY_PRODUCT_DATA;
  const { title, text, image } = sectionContent;
  return (
    <ProductDeliveryWrapper>
      <Container>
        <Box className="image">
          <Fade left>
            <NextImage src={image} alt={title} />
          </Fade>
        </Box>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="postWrap">
            {posts.map(({ title, text }, index) => (
              <Box className="post" key={`product-delivery-post-key-${index}`}>
                <Box>
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ProductDeliveryWrapper>
  );
};

export default ProductDelivery;
