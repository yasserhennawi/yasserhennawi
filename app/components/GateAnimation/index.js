import React from 'react';
import styled from 'utils/styled-components';
import { StaggeredMotion, spring } from 'react-motion';
import { FormattedMessage } from 'react-intl';
import { routeIsReady } from '../../containers/App/actions';
import selector from './selectors';
import { connect } from 'react-redux';
import colors from 'theme/color';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: hidden;
`
const Box = styled.div`
  height: 100%;
  width: ${(props)=> props.width}%;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  z-index: 2;
  &:nth-child(2){
    align-self: flex-end;
  }
`
const ContentWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 100%;
  overflow-x: hidden;
`

class GateAnimation extends React.Component {

  render() {
    const {
      children,
      gateStatus,
      isRouteReady,
      routeToLoad,
    } = this.props;

    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 50 },
          { width: 50 },
          { width: 0  },
        ]}
        styles={ prevStyles => { return [
          { width: spring(gateStatus ? (prevStyles[0].width > 1 ? prevStyles[0].width * 0.5 : 0 )  : (prevStyles[0].width < 47 ? prevStyles[0].width + 2  * 5 : 50)) },
          { width: spring(gateStatus ? (prevStyles[1].width > 1 ? prevStyles[1].width * 0.5 : 0 )  : (prevStyles[1].width < 47 ? prevStyles[1].width + 2  * 5 : 50)) },
          { width: spring(100 - prevStyles[1].width) },
        ]}}
      >
        { styles => {
          if(! gateStatus && styles[0].width == 50 && !this.props.isRouteReady && this.props.routeToLoad) {
            setTimeout(() => {
              this.props.routeIsReady();
            }, 1);
          }
          return (
            <Wrapper>
              <Box bgColor={colors.black1} width={styles[0].width}/>
              <Box bgColor={colors.black1} width={styles[1].width}/>
              <ContentWrapper>
                {children}
              </ContentWrapper>
            </Wrapper>
          )}}
      </StaggeredMotion>
    );
  }
}

const mapStateToProps = selector();

const mapDispatchToProps = {
  routeIsReady,
};

export default connect(mapStateToProps, mapDispatchToProps)(GateAnimation);
