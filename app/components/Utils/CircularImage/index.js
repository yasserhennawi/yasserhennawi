import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';

const AvatarContainer = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  overflow: hidden;
  align-self: center;
  border-radius: 100%;
  padding: 5px;
  margin-bottom: 10px;
  background: url(${(props) => props.bgImage}) no-repeat center/cover;
`;

function CircularImage({ size, children, image }) {
  return (
    <AvatarContainer size={size} bgImage={image}>
      {children}
    </AvatarContainer>
  );
}

CircularImage.propTypes = {
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  image: PropTypes.string,
};

export default CircularImage;
