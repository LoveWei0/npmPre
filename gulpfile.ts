import fse from 'fs-extra'
import chalk from 'chalk'
import path from 'path'
import rollupConfig from './rollup.config'
import { rollup } from 'rollup'
import {
	Extractor,
	ExtractorConfig,
	ExtractorResult,
} from '@microsoft/api-extractor'

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

// api-extractor 合并.d.ts文件
const apiExtractorGenerate: TaskFunc = async (cb) => {
	const apiExtractorJsonPath: string = path.join(
		__dirname,
		'./api-extractor.json'
	)
	// 解析api-extractor.json 文件
	const extractorConfig: ExtractorConfig =
		await ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath)
	// .d.ts文件是否存在
	const isExist: boolean = await fse.pathExists(
		extractorConfig.mainEntryPointFilePath
	)
	// 不存在
	if (!isExist) {
		log.error('API Extractor not find index.d.ts')
		return
	}
	const extractorResult: ExtractorResult = await Extractor.invoke(
		extractorConfig,
		{
			localBuild: true,
			showVerboseMessages: true, //输出中显示信息
		}
	)
	if (extractorResult.succeeded) {
		// 去除多余.d.ts
		const libFiles: string[] = await fse.readdir(paths.lib)
		libFiles.forEach(async (file) => {
			if (file.endsWith('.d.ts') && !file.includes('index')) {
				await fse.remove(path.join(paths.lib, file))
			}
		})
		log.progress('API Extractor completed successfully')
		cb()
	} else {
		log.error(
			`API Extractor completed with ${extractorResult.errorCount} errors` +
				`and ${extractorResult.warningCount} warnings`
		)
	}
}
