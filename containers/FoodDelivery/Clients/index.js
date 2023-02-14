import React from 'react';
import Container from 'components/common/UI/Container';
import Heading from 'components/common/Heading';
import NextImage from 'components/common/NextImage';
import Box from 'components/common/Box';
import ClientsWrapper from './clients.style';
import { CLIENTS_DATA } from 'data/FoodDelivery';
const Clients = () => {
  const { title, images } = CLIENTS_DATA;
  return (
    <ClientsWrapper>
      <Container>
        <Heading as="h2" content={title} />
        <Box className="clientImages">
          {images.map(({ path }, index) => (
            <NextImage
              src={path}
              key={`clients-image-key-${index}`}
              alt="client image"
            />
          ))}
        </Box>
      </Container>
    </ClientsWrapper>
  );
};

export default Clients;
