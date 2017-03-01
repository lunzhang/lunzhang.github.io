var path = require('path');

module.exports={
  entry:{
    'app':'./app.js'
  },
  output:{
      filename : 'bundle.js',
      path: path.resolve(__dirname,'build'),
      publicPath: '/build/'
  },
  module:{
    loaders:[
      {
         test: /\.css$/,
         loader: "style-loader!css-loader"
      },
      {
         test: /\.scss$/,
         loaders: [ 'style-loader', 'css-loader', 'sass-loader']
      }
      ,{
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader'
      }
    ]
  }
};
