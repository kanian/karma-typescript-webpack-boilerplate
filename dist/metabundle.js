var context = require.context('.', true, /(src|tests)\/.+\.jsx?$/);
context.keys().forEach(context);
module.exports = context;