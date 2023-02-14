import React from 'react';
import Link from 'next/link';
import Heading from 'components/common/Heading';
import Box from 'components/common/Box';
import Container from 'components/common/UI/Container';
import PopularCategoryWrapper from './popularCategory.style';
import { PRODUCT_CATEGORY } from 'data/FoodDelivery';

const PopularCategory = () => {
  const { title, list } = PRODUCT_CATEGORY;
  return (
    <PopularCategoryWrapper id="categories">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="categoryList">
          {list.map(({ label, link }, index) => (
            <Link href={link} key={`list-key-${index}`}>
              <a className="categoryItem">{label}</a>
            </Link>
          ))}
        </Box>
      </Container>
    </PopularCategoryWrapper>
  );
};

export default PopularCategory;
