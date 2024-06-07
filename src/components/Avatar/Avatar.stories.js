import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'TR',
};

export const Focus = Template.bind({});
Focus.args = {
  label: 'TR',
  variant: 'focus',
};
