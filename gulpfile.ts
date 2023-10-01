import fse from 'fs-extra'
import chalk from 'chalk'
import path from 'path'
import rollupConfig from './rollup.config'
import { rollup } from 'rollup'

interface TaskFunc {
	(cb: Function): void
}

const paths = {
	lib: path.join(__dirname, '/'),
	root: path.join(__dirname, '/lib'),
}

const log = {
	progress: (text: string) => {
		console.log(chalk.green(text))
	},
	error: (text: string) => {
		console.log(chalk.red(text))
	},
}

// 删除lib文件
const clearLibFile: TaskFunc = async (cb) => {
	fse.removeSync(paths.lib)
	log.progress('Deleted lib file')
	cb()
}

// rollup打包
const buildByRollup: TaskFunc = async (cb) => {
	const inputOptions = {
		input: rollupConfig.input,
		external: rollupConfig.external,
		plugins: rollupConfig.plugins,
	}
	const outOptions = rollupConfig.output
	const bundle = await rollup(inputOptions)
	// 写入需要遍历输入配置
	if (Array.isArray(outOptions)) {
		outOptions.forEach(async (outOption) => {
			await bundle.write(outOption)
		})
		cb()
		log.progress('Rollup built successfully')
	}
}
