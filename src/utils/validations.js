const validations = {
  username: {
    required: true,
    pattern: '[a-zA-Z]{2,}',
    patternMessage: 'At least 2 characters',
  },
  email: {
    required: true,
    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    patternMessage: 'Invalid email address',
  },
  address: {
    required: true,
    pattern: '[a-zA-Z" "0-9]{10,}',
    patternMessage: 'At least 10 characters',
  },
  course: {
    required: true,
  },
  gender: {
    required: true,
  },
};

export default validations;
