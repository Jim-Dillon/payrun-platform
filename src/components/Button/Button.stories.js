import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
      onClick: { action: 'clicked' },
    },
  };

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Hover Button',
  variant: 'hover',
};

export const Active = Template.bind({});
Active.args = {
  label: 'Active Button',
  variant: 'active',
};

export const Focus = Template.bind({});
Focus.args = {
  label: 'Focus Button',
  variant: 'focus',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Button',
  variant: 'primary',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  variant: 'primary',
  size: 'small',
};

