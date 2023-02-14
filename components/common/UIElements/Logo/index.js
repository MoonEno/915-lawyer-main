import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/common/Text';
import Link from 'components/common/Link';
import Image from 'components/common/Image';

const Logo = ({ logoWrapperStyle, logoStyle, titleStyle, withAnchor, anchorProps, logoSrc, title, ...props }) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAnchor ? (
      <a {...anchorProps}>{logoSrc ? <Image src={logoSrc.src} alt={title} {...logoStyle} /> : <Text content={title} {...titleStyle} />}</a>
    ) : (
      <>{logoSrc ? <Image src={logoSrc.src} alt={title} {...logoStyle} /> : <Text content={title} {...titleStyle} />}</>
    )}
  </Link>
);

Logo.propTypes = {
  logoSrc: PropTypes.object,
  title: PropTypes.string.isRequired,
  logoWrapperStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  withAnchor: PropTypes.bool,
  anchorProps: PropTypes.object,
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none',
    },
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
  },
  title: '',
};
export default Logo;
