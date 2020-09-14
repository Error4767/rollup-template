module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          // 隐藏警告
          warnings: false
        }
      }
    }
  }
}