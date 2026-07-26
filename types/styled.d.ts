import 'styled-components';
import theme from '@/styles/theme';

type AppTheme = typeof theme;

declare module 'styled-components' {
  // Module augmentation requires an interface.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme { }
}