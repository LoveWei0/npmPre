import fse from 'fs-extra'
import chalk from 'chalk'
import path from 'path'

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
