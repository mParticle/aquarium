const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    // require('postcss-modules'),
    require('postcss-preset-env'),
    // require('stylelint'),
    require('cssnano'),
  ]
}

module.exports = config