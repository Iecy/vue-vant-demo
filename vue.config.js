const merge = require('webpack-merge');
const tsImportPluginFactor = require('ts-import-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactor({
                libraryName: 'vant',
                libraryDirector: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      })
  },
  configureWebpack: {
    devServer: {
      before(app) {
        app.get('/api/login', function (req, res) {
          const { username, password } = req.query;
          console.log(req.query, 'this is query.');
          if (username === 'admin' && password === 'admin') {
            res.json({
              errCode: 1,
              errMessage: '登录成功',
              token: new Date().getTime(),
            });
          } else {
            res.status(401).json({
              code: 1,
              message: '用户名或者密码错误'
            });
          }
        });

        app.get('/api/loginOut', function(req, res) {
          res.json({
            errCode: 1,
            errMessage: '登出成功',
          });
        })
      }
    }
  }
};

