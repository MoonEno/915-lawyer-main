import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'components/common/UI/Container';
import Text from 'components/common/Text';
import Heading from 'components/common/Heading';
import Image from 'components/common/Image';
import Box from 'components/common/Box';
import QualityFeaturesWrapper from './qualityFeatures.style';
import { QUALITY_FEATURES_DATA } from 'data/FoodDelivery';
const QualityFeatures = () => {
  const { title, posts } = QUALITY_FEATURES_DATA;
  return (
    <QualityFeaturesWrapper id="features">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ icon, title, text }, index) => (
            <Box className="post" key={`quality-features-key-${index}`}>
              <Fade bottom cascade>
                <Image src={icon?.src} alt={title} />
                <Heading as="h3" content={title} />
                <Text as="p" content={text} />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </QualityFeaturesWrapper>
  );
};

export default QualityFeatures;
