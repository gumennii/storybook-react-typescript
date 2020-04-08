import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // UI
  appBg: '#fafafa',
  appContentBg: '#fff',
  appBorderColor: '#eee',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: '#333',
  inputTextColor: 'black',
  inputBorderRadius: 4
});