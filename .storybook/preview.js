import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    // inline: true,
    header: false,
    styles: {
      header: {
        h1: {
          fontSize: '1rem'
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          fontSize: '0.875rem',
          color: '#999',
        },
      },
      infoBody: {
        padding: '1rem'
      },
    },
  })
);

const loaderFn = () => {
  const allExports = [
    // require('./welcome.stories.js')
  ]
  const req = require.context('../src', true, /\.stories\.tsx$/)

  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports;
}

configure(loaderFn, module)