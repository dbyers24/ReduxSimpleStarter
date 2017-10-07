const production = process.env.NODE_ENV === 'production';

let plugins = [
	new EnvironmentPlugin(['NODE_ENV']),
	new ExtractPlugin('bundle.[hash].css'),
	new HTMLPlugin({ template: `${__dirname}/src/index.html` }),
	new DefinePlugin({
		__DEBUG__: JSON.stringify(!production),
		__API__URL: JSON.stringify(process.env.API_URL),
	}),
];

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: production ? undefined : `cheap-module-eval-source-map`,
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
