import { globalCss } from '@stitches/react';
import './../src/fonts/fonts.css'; 
import '../src/components/Button/button.css'; 

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: '$body',
    backgroundColor: '#f0f0f0',
  },
});

globalStyles();
