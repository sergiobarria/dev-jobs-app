import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    title: string;
    text: string;
    accent: string;
    accentLight: string;
    elements: string;
  }
}
