import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        primary: "#ACCE57",
        secondary: "purple",
      },
      fonts: {
        body: 'Ocra, sans-serif',
      },
    },
  });
