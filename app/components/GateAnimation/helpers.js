import { spring } from 'react-motion';

export default (gateStatus) => (prevStyles) => [
  {
    width: spring(
      gateStatus
        ? prevStyles[0].width > 1
          ? prevStyles[0].width * 0.5
          : 0
        : prevStyles[0].width < 47
          ? prevStyles[0].width + 10
          : 50
    ),
  },
  {
    width: spring(
      gateStatus
        ? prevStyles[1].width > 1
          ? prevStyles[1].width * 0.5
          : 0
        : prevStyles[1].width < 47
          ? prevStyles[1].width + 10
          : 50
    ),
  },
  { width: spring(100 - prevStyles[1].width) },
];
