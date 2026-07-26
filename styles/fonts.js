const calibrePath = '/fonts/Calibre';
const sfMonoPath = '/fonts/SFMono';

export const sansFont = 'Calibre, Inter, system-ui, sans-serif';
export const monoFont =
  'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace';

export const fontFaces = `
  @font-face {
    font-family: 'Calibre';
    src: url('${calibrePath}/Calibre-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('${calibrePath}/Calibre-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('${calibrePath}/Calibre-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('${sfMonoPath}/SFMono-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('${sfMonoPath}/SFMono-RegularItalic.woff2') format('woff2');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('${sfMonoPath}/SFMono-SemiboldItalic.woff2') format('woff2');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
`;

const fonts = {
  sans: sansFont,
  mono: monoFont,
  fontFaces,
};

export default fonts;