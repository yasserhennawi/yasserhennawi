import GoCrushDesktopMock from 'assets/gocrushDesktopMock.png';
import GoCrushMobileMock from 'assets/gocrushMobileMock.png';
import AlahmadyDesktopMock from 'assets/alahmadyDesktopMock.png';
import AlahmadyMobileMock from 'assets/alahmadyMobileMock.png';
import GoodsenseDesktopMock from 'assets/goodsenseDesktopMock.png';
import GoodsenseMobileMock from 'assets/goodsenseMobileMock.png';
import CytixDesktopMock from 'assets/cytixDesktopMock.png';
import CytixMobileMock from 'assets/cytixMobileMock.png';
import styledComponents from 'assets/tools/styled-components.png';
import redux from 'assets/tools/redux.png';
import reduxSaga from 'assets/tools/redux-saga.png';
import PrimeFaces from 'assets/tools/primefaces.png';
import Html from 'assets/tools/html.png';
import PostCSS from 'assets/tools/postcss.png';
import ReactIcon from 'components/icons/React';
import Electron from 'components/icons/Electron';
import Css from 'components/icons/Css';
import Photoshop from 'components/icons/Photoshop';
import Illustrator from 'components/icons/Illustrator';
import React from 'react';


export default {
  toolsWidth: '50px',
  toolsBgColor: 'rgba(255,255,255,0.5)',
  projects: [
    {
      title: 'Goodsense',
      roles: [
        'Redesigning the web application from scratch according to Google material design guidelines.',
        'Coding the photoshop mocks I made into re-usable React components with styled-components.',
        'Drawing SVG icons in a UX manner.'
      ],
      tools: [
        {
          name: 'React.js',
          logo: <ReactIcon/>
        },
        {
          name: 'Styled components',
          logoImage: styledComponents
        },
        {
          name: 'Photoshop',
          padding: '8px',
          logo: <Photoshop/>,
        },
        {
          name: 'Illustrator',
          padding: '8px',
          logo: <Illustrator/>,
        },
      ],
      desktopImage: GoodsenseDesktopMock,
      mobileImage: GoodsenseMobileMock,
    },
    {
      title: 'GoCrush',
      roles: [
        'Scaffolding the web application using React.js and styled-components.',
        'Managing data flow with Redux and Redux-saga',
        'Creating the desktop application using Electron framework',
      ],
      tools: [
        {
          name: 'React.js',
          logo: <ReactIcon/>
        },
        {
          name: 'Electron',
          padding: '8px',
          logo: <Electron/>
        },
        {
          name: 'Redux',
          logoImage: redux
        },
        {
          name: 'Redux saga',
          logoImage: reduxSaga
        },
        {
          name: 'Styled components',
          logoImage: styledComponents
        },
      ],
      desktopImage: GoCrushDesktopMock,
      mobileImage: GoCrushMobileMock,
    },
    {
      title: 'AlAhmady Motors',
      roles: [
        'Refactoring the web application to be responsive and mobile-devices compatible.',
        'Implementing new components using PrimeFaces framework and pure HTML/CSS.',
        'Fixing design bugs and inconsistencies.',
      ],
      tools: [
        {
          name: 'PrimeFaces',
          logoImage: PrimeFaces
        },
        {
          name: 'HTML',
          logoImage: Html
        },
        {
          name: 'CSS',
          padding: '5px',
          logo: <Css />
        },
      ],
      desktopImage: AlahmadyDesktopMock,
      mobileImage: AlahmadyMobileMock,
    },
    {
      title: 'CyTIX Inc.',
      roles: [
        'Coding the web application from scratch into re-usable React components styled with PostCSS',
        'Creating interactive animations using ReactMotion.'
      ],
      tools: [
        {
          name: 'React.js',
          logo: <ReactIcon/>
        },
        {
          name: 'PostCSS',
          logoImage: PostCSS
        },
      ],
      desktopImage: CytixDesktopMock,
      mobileImage: CytixMobileMock,
    },
  ]
}
