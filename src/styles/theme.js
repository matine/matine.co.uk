export const breakpoints = [
    '24em', '40em', '50em', '68em', '100em',
];

export const colors = {
    white: '#fff',
    black: '#000',
    primary: '#f5e78e',
    text: '#333',
    textLight: '#333',
    gray: [
        '#333',
        '#666',
        '#999',
        '#ccc',
        '#eee',
        '#f6f6f6',
    ],
};

export const space = [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
];

export const fontSizes = [
    10, 12, 14, 16, 20, 24, 32, 48, 64, 96, 128,
];

export const lineHeights = [
    1, 1.125, 1.25, 1.5,
];
  
export const fontWeights = {
    regular: 500,
    bold: 700
};
  
export const letterSpacings = {
    normal: 'normal',
    caps: '0.25em'
};
  
export const radii = [
    0, 2, 4, 8
];
  
export const borders = [
    0, '1px solid', '2px solid',
];
  
export const shadows = [
    `0 1px 2px 0 ${colors.text}`,
    `0 1px 4px 0 ${colors.text}`,
];

export const fonts = {
    base: '"Noto Sans", sans-serif',
};

export const textStyles = {
    caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
    },
    headings: {
        lineHeight: 1.3,
        marginBottom: '1em',
    }
};

export const widths = [
    50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

export const containerWidths = [
    400, 540, 600, 640, 700, 800, 960, 1100, 1300, 1500,
];

export const themeDefault = {
    breakpoints,
    colors,
    space,
    fontSizes,
    lineHeights,
    fontWeights,
    letterSpacings,
    radii,
    borders,
    shadows,
    fonts,
    textStyles,
};

export default themeDefault;