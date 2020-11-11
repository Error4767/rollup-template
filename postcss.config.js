module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          warnings: false // 隐藏警告
        }
      }
    }
  }
}