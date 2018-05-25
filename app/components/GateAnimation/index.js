import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components';
import { StaggeredMotion } from 'react-motion';
import { connect } from 'react-redux';
import colors from 'theme/color';
import { routeIsReady as routeIsReadyAction } from '../../containers/App/actions';
import selector from './selectors';
import getStaggeredMotionStyle from './helpers';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: hidden;
`;
const Box = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  z-index: 2;
  &:nth-child(2) {
    align-self: flex-end;
  }
`;
const ContentWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  overflow-x: hidden;
`;

// eslint-disable-line react/prefer-stateless-function
const GateAnimation = ({
  children,
  gateStatus,
  isRouteReady,
  routeToLoad,
  routeIsReady,
}) => (
  <StaggeredMotion
    defaultStyles={[{ width: 50 }, { width: 50 }, { width: 0 }]}
    styles={getStaggeredMotionStyle(gateStatus)}
  >
    {(styles) => {
      if (
        !gateStatus &&
        styles[0].width === 50 &&
        !isRouteReady &&
        routeToLoad
      ) {
        setTimeout(() => {
          routeIsReady();
        }, 1);
      }
      return (
        <Wrapper>
          <Box bgColor={colors.black1} width={styles[0].width} />
          <Box bgColor={colors.black1} width={styles[1].width} />
          <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
      );
    }}
  </StaggeredMotion>
);

GateAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  gateStatus: PropTypes.bool,
  isRouteReady: PropTypes.bool,
  routeToLoad: PropTypes.string,
  routeIsReady: PropTypes.func,
};

const mapStateToProps = selector();

const mapDispatchToProps = {
  routeIsReady: routeIsReadyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(GateAnimation);
