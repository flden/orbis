const util = require('gulp-util');

const production = util.env.production || util.env.prod || false;
const distPath = 'dist';

const config = {
  paths: {
    src: './src',
    build: './build'
  }
  // env:        'development',
  // production: production,

  // setEnv: env => {
  //   if (typeof env != 'string') return;
  //   this.env = env;
  //   this.production = env === 'production';
  //   process.env.NODE_ENV = env;
  // },

  // logEnv: () => {
  //   util.log(
  //     'Environment:',
  //     util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
  //   );
  // }
};

// config,setEnv(production ? 'production' : 'development');

module.exports = config;