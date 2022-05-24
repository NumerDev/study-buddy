import UsersListItem from './UsersListItem';

export default {
  title: 'Molecules/UsersListItem',
  component: UsersListItem,
};

const Template = (args) => <UsersListItem {...args} />;

export const Good = Template.bind({});
Good.args = {
  userData: {
    name: 'John Doe',
    average: '5',
    attendance: '100%',
  },
};

export const Average = Template.bind({});
Average.args = {
  userData: {
    name: 'John Doe',
    average: '3.5',
    attendance: '100%',
  },
};

export const Bad = Template.bind({});
Bad.args = {
  userData: {
    name: 'John Doe',
    average: '2.3',
    attendance: '100%',
  },
};

export const Unknown = Template.bind({});
Unknown.args = {
  userData: {
    name: 'John Doe',
    average: '',
    attendance: '100%',
  },
};
