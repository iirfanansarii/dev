const signupFields = [
  {
    error: 'error',
    id: 'name',
    label: 'Name',
    defaultValue: 'Alien',
    helperText: 'Enter your name',
    variant: 'filled',
  },
  {
    error: 'error',
    id: 'mail',
    label: 'Email',
    defaultValue: 'alien@gmail.com',
    helperText: 'Enter your mail',
    variant: 'filled',
  },
  {
    error: 'error',
    id: 'pass',
    label: 'Password',
    defaultValue: 'Alien@Exist',
    helperText: 'Enter your password',
    variant: 'filled',
  },
];

const signinFields = [
  {
    error: 'error',
    id: 'mail',
    label: 'Email',
    defaultValue: 'alien@gmail.com',
    helperText: 'Enter your mail',
    variant: 'filled',
  },
  {
    error: 'error',
    id: 'pass',
    label: 'Password',
    defaultValue: 'Alien@Exist',
    helperText: 'Enter your password',
    variant: 'filled',
  },
];
module.exports = {
  signupFields,
  signinFields,
};
