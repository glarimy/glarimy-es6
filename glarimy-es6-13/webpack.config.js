config = {
   entry: './glarimy.js',
	
   output: {
      path:'/Users/glarimy/Professional/Workspace/Glarimy-ES6/glarimy-es6-13/target',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7070
   },
	
   module: {
      loaders: [
         {
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015']
            }
         }
      ]
   }
}

module.exports = config;
