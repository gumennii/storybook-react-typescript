import React from 'react'
import Button from './Button'

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

export default {
  component: Button,
  title: 'Button',
  decorators: [withA11y, withKnobs]
};

export const regular = () => (
  <Button onClick={action('clicked')}>
    {text("Label", "Regular Button")}
  </Button>
)

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

regular.story = {
  parameters: {
    notes: 'A regular button component',
  },
};