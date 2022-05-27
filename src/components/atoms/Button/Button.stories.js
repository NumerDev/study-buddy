import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Sample text</Button>;

export const Default = Template.bind({});
Default.args = {
  isBig: false,
};

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
