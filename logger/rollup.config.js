import nodeResolve from 'rollup-plugin-node-resolve';
import convertJS from 'rollup-plugin-commonjs'

export default {
  entry: 'index.js',
  format: 'umd',
  moduleName: 'logger',
  plugins: [ nodeResolve(), convertJS() ],
  dest: 'bundle.js'
}
