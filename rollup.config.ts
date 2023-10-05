import path from 'path'
// import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json'

const paths = {
	input: path.join(__dirname, '/src/index.ts'),
	output: path.join(__dirname, '/dist'),
}

// rollup 配置项
const rollupConfig = {
	input: paths.input,
	output: [
		// 输出 commonjs 规范的代码
		{
			file: path.join(paths.output, 'index.js'),
			format: 'cjs',
			name: pkg.name,
		},
		// 输出 es 规范的代码
		{
			file: path.join(paths.output, 'index.esm.js'),
			format: 'es',
			name: pkg.name,
		},
	],
	// external: ['lodash'], // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
	// plugins 需要注意引用顺序
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
		// 配合commonjs解析第三方模块
		resolve(),
		// 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
		commonjs(),

		babel({
			babelHelpers: 'runtime',
			// 只转换源代码，不运行外部依赖
			exclude: 'node_modules/**',
			// babel 默认不支持 ts 需要手动添加
			extensions: [...DEFAULT_EXTENSIONS, '.ts'],
		}),
	],
}

export default rollupConfig
