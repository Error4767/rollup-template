import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// 处理css module
import postcss from 'rollup-plugin-postcss';

import babel from '@rollup/plugin-babel';

// 处理图片
import image from '@rollup/plugin-image';
// 路径别名
import alias from '@rollup/plugin-alias';

// 压缩代码
import terser from '@rollup/plugin-terser';

// 虚拟的process对象，用于解决react报错
const virtualProcess = `const process = {
  env: {
    NODE_ENV: 'production'
  }
};`

export default {
  input: './src/main.js',
  output: {
    file: './dist/index.js',
    format: 'es',
    banner: virtualProcess,// 添加虚拟的process对象
  },
  plugins: [
    alias({
      entries: {
        '@': './src'
      }
    }),
    babel(),
    postcss({
      extract: false,
      modules: true,// 支持css module
      extensions: ['.css'],
    }),
    image(),
    resolve(),
    commonjs(),
    terser()
  ]
}
