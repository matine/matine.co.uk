import Typography from 'typography';

const typography = new Typography({
    title: 'Matine Chabrier',
    headerFontFamily: [
        'Noto Sans',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
    ],
    bodyFontFamily: [
        'Noto Sans',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
    ],
    googleFonts: [
        {
            name: 'Noto Sans',
            styles: ['400'],
        },
    ],
    overrideStyles: () => ({
        img: {
            marginBottom: 0,
        },
    }),
});

export default typography;
