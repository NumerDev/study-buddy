import FormField from './FormField';

export default {
  title: 'Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField name="test" id="test" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Lorem ipsum dolor sit amet',
};
