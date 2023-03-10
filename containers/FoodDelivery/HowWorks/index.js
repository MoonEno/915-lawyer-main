import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'components/common/UI/Container';
import Text from 'components/common/Text';
import Heading from 'components/common/Heading';
import NextImage from 'components/common/NextImage';
import Box from 'components/common/Box';
import HowWorksWrapper from './howWorks.style';
import { HOW_WORKS_DATA } from 'data/FoodDelivery';
const HowWorks = () => {
  const { title, posts } = HOW_WORKS_DATA;
  return (
    <HowWorksWrapper>
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ icon, title, text, link }, index) => (
            <Box className="post" key={`how-works-post-key-${index}`}>
              <Fade bottom cascade>
                <Box className="imageBox">
                  <NextImage src={icon} alt={title} />
                </Box>
                <Heading as="h3" content={title} />
                <Text as="p" content={text} />
                <Link href={link.path}>
                  <a className="button">
                    {link.label} <Icon size={18} icon={arrowRight} />
                  </a>
                </Link>
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </HowWorksWrapper>
  );
};

export default HowWorks;
