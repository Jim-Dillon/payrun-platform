import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Unselected = Template.bind({});
Unselected.args = {
  label: 'Unselected',
  checked: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected',
  checked: true,
};
