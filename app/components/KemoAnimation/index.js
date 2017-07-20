import React from 'react';
import styled from 'styled-components';
import { StaggeredMotion, spring } from 'react-motion';
import { FormattedMessage } from 'react-intl';
import { routeIsReady } from '../../containers/App/actions';
import selector from './selectors';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  ${'' /* min-height: 100vh; */}
  background-color: #EEE;
`
const Box = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgColor};
`
const HorizontalBox = styled(Box)`
  z-index: 1;
  height: 100vh;
  width: ${(props)=> props.width}%;
  &:nth-child(2){
    align-self: flex-end;
  }
`
const VerticalBox = styled(Box)`
  z-index: 2;
  height: ${(props)=> props.height}vh;
  width: 100%;
  position: relative;
  top: ${(props)=> props.top}vh;
`
const ContentWrapper = styled(Box)`
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-size: 40px;
  width: 100%;
  overflow-x: hidden;
  background-color: ${(props) => props.bgColor};
  & * {
    z-index: 999;
    opacity: ${(props)=> props.opacity};
  }
`
const colors = [
  '#212121',
  '#212121',
  '#212121',
  '#212121',
  '#fff',
]

class GateAnimation extends React.Component {

  render() {
    const {

      children,
    } = this.props;

    return (
      <StaggeredMotion
        onRest={this.onRest}
        defaultStyles={[
          { width: 50 },
          { width: 50 },
          { height: 50 , top: 0},
          { height: 50 , top: 50},
          { width: 0 , opacity: 0 },
        ]}
        styles={ prevStyles => { return [
          { width: spring( this.props.gateStatus ? (prevStyles[0].width > 1 ? prevStyles[0].width * 0.5 : 0 )  : (prevStyles[0].width < 47 ? prevStyles[0].width + 2  * 5 : 50)) },
          { width: spring( this.props.gateStatus ? (prevStyles[1].width > 1 ? prevStyles[1].width * 0.5 : 0 )  : (prevStyles[1].width < 47 ? prevStyles[1].width + 2  * 5 : 50)) },
          { height: spring( this.props.gateStatus ? (prevStyles[2].height > 1 ? prevStyles[2].height * 0.5 : 0 )  : (prevStyles[2].height < 47 ? prevStyles[2].height + 2  * 5 : 50)) },
          { height: spring( this.props.gateStatus ? (prevStyles[3].height > 1 ? prevStyles[3].height * 0.5 : 0 )  : (prevStyles[3].height < 47 ? prevStyles[3].height + 2  * 5 : 50)) },
          { width: spring( 100 - prevStyles[1].width), opacity:  prevStyles[1].width < 1 ? spring(1) : spring(0) },
          ]
        }}
      >
        { styles => {
          if(! this.props.gateStatus && styles[0].width == 50 && ! this.props.routeReady) {
            setTimeout(() => {
              this.props.routeIsReady();
            }, 0);
          }
          return (
            <Wrapper>
              <HorizontalBox bgColor={colors[0]} width={styles[0].width}/>
              <HorizontalBox bgColor={colors[1]} width={styles[1].width}/>
              <VerticalBox bgColor={colors[2]} height={styles[0].width}/>
              <VerticalBox bgColor={colors[3]} top={100 - styles[1].width * 2} height={styles[1].width}/>
              <ContentWrapper bgColor={colors[4]} opacity={styles[4].opacity}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(GateAnimation);
