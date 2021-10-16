const path = require('path');
const glob = require('glob');

const testFiles = glob.sync("./test/*.spec.js")
.reduce(function(obj, el){
  obj[path.parse(el).name] = el;
  return obj
},{});

module.exports = {
  entry: testFiles,
  devtool: 'inline-source-map',
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   }
  // },
  output: {
    path: path.resolve(__dirname, "./dist/spec"),
    filename: "[name].js",
    clean: true,
    globalObject: 'this'
  },
  mode: "none"
};