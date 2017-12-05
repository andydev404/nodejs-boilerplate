const defaultConfig = {
  PORT: process.env.PORT || 3000,
  DB_URL: 'mongodb://localhost/project-db',
};

export default {
  ...defaultConfig,
};
