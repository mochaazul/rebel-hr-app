import * as fs from 'fs'
import path from 'path'
import data from 'rebel-gen.json'
import {writeDirectory} from './write-directory'


const writeDirectories = (schema:string[]) => {
    if(schema.length) {
        schema.forEach(item => {
            const tempPath = item.replace('models', 'src/redux')
            writeDirectory(tempPath, item)
        })
    }
}

const flatDirectory = (lists: any[]) => {
    return lists.reduce((next: any, prev: any) => next.concat(prev), []);
}
  
const getDirectories = (srcPath: string): string[] => {
    try {
        const listPath = fs.readdirSync(srcPath)
        if(listPath) {
            return listPath
            .map(file => path.join(srcPath, file))
            .filter(path => fs.statSync(path).isDirectory());
        }
        return listPath
    } catch (error) {
        throw error
    }
}
  
const getAllDirectories = (srcPath: string): string[] => {
    try {
        const resultDirectories = [srcPath, ...flatDirectory(getDirectories(srcPath).map(getAllDirectories))]
        if(resultDirectories) {
            return resultDirectories
        }
    } catch (error) {
        console.error(`no such file or directory (${srcPath})`)
    }
}


const readSchemaAndGenerator = () => {
    const schema = getAllDirectories(data.schema)
    const generate = getAllDirectories(data.generate)
    if(!generate || schema.length > generate.length) {
        writeDirectories(schema)
    }
}

export {readSchemaAndGenerator, writeDirectory}