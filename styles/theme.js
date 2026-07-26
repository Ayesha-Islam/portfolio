import colors from './variables';
import fonts from './fonts';
import mixins from './mixins';

const theme = {
  colors,
  fonts,
  mixins,

  navHeight: '100px',
  navScrollHeight: '70px',

  tabHeight: '42px',
  tabWidth: '120px',

  emailWidth: '40px',

  fontSizes: {
    xs: '12px',
    sm: '13px',
    md: '16px',
    lg: '18px',
    xl: '22px',
    xxl: '32px',
    heading: 'clamp(40px, 8vw, 80px)',
  },

  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '900px',
    lg: '1080px',
    xl: '1440px',
  },
};

export default theme;