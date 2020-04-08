import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
addDecorator(withInfo);

const loaderFn = () => {
  const allExports = [
    // require('./welcome.stories.js')
  ]
  const req = require.context('../src', true, /\.stories\.tsx$/)

  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports;
}

configure(loaderFn, module)