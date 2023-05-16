import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      electric: string;
      background: string;
      pure: {
        black: string;
        white: string;
      };
    };
    font: {
      colors: {
        text: string;
        "text-gray": string;
      };
    };
    breakpoints: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
