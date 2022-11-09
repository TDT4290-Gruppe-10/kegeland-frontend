import { GraphProfile } from '../settings.interface';

const graphProfileMocks: GraphProfile = {
  useTimedelta: true,
  labels: {
    s1: {
      plotType: 'bar',
      hidden: false,
    },
    s2: {
      plotType: 'bar',
      hidden: true,
    },
    s3: {
      plotType: 'bar',
      hidden: false,
    },
    s4: {
      plotType: 'bar',
      hidden: false,
    },
  },
};

export default graphProfileMocks;
