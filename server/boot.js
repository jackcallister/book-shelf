require.extensions['.css'] = function() { return null };
require.extensions['.less'] = function() { return null };

require('babel/register');
require('./app');