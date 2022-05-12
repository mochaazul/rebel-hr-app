import * as fs from 'fs'
import path from 'path'
import {transform} from '../ts-gen'
import {generateStore,generateAction, generateIndex, generateReducer} from '../template'
import data from 'rebel-gen.json'

const filename = ['index', 'action', 'model', 'reducer']
export const writeDirectory = (tempPath: string, item?:string) => {
    const pathname = item.split("/")
    const getName = pathname[pathname.length - 1]
    fs.mkdir(tempPath,
        { recursive: true }, (err) => {
            if (err) {
            return console.error(err);
            }
            if(item !== data.schema) {
                const jsonFile = path.join(item, 'index.json')
                const statsIsExist = fs.existsSync(jsonFile)
                if(statsIsExist) {
                    const getContent = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
                    const splitName = item.split('/')
                    const getName = splitName[splitName.length - 1]
                    transform(getContent, {defaultName: getName})
                    .then(ts => {
                        console.log(ts)
                        filename.map((element) => {
                            const isModel = element === 'model'
                            const isAction = element === 'action'
                            const isReducer = element === 'reducer'
                            const result = isModel ? ts : isAction ? generateAction(getName) : isReducer ? 
                            generateReducer(getName) : generateIndex()
                            const name = `${tempPath}/${element}.ts`
                            writeFile(name, result)
                        })
                    })
                }
            } 
    });
}

export const writeFile = (filename:string, content:string) => {
    fs.writeFile(filename, content, (err) => {
        if (err) throw err;
        console.log(`success create ${filename}` )
    })
}