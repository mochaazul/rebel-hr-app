import * as fs from 'fs';
import path from 'path';
import data from 'rebel-gen.json';
import { writeDirectory } from './write-directory';


const writeDirectories = async (schema: string[]) => {
    if (schema.length) {
        for (const item of schema) {
            const tempPath = item.replace('models', 'src/redux');
            await writeDirectory(tempPath, item);
        }
        console.log('doneee');
    }
};

const readDir = (startPath: string, filter: string, resultDir?: string[]) => {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            readDir(filename, filter, resultDir);
        } else if (filename.endsWith(filter)) {
            const directory = resultDir?.find((dir) => dir === startPath);
            if (!directory) {
                resultDir?.push(startPath);
            }
        };
    };
};

const flatDirectory = (lists: any[]) => {
    return lists.reduce((next: any, prev: any) => next.concat(prev), []);
};

const getDirectories = (srcPath: string): string[] => {
    try {
        const listPath = fs.readdirSync(srcPath);
        if (listPath) {
            return listPath
                .map(file => path.join(srcPath, file))
                .filter(path => fs.statSync(path).isDirectory());
        }
        return listPath;
    } catch (error) {
        throw error;
    }
};

const getAllDirectories = (srcPath: string): string[] => {
    try {
        const resultDirectories = [srcPath, ...flatDirectory(getDirectories(srcPath).map(getAllDirectories))];
        if (resultDirectories) {
            return resultDirectories;
        }
    } catch (error) {
        console.error(`no such file or directory (${ srcPath })`);
    }
};


const readSchemaAndGenerator = () => {
    const schema = getAllDirectories(data.schema);
    const generate = getAllDirectories(data.generate);
    if (!generate || schema.length > generate.length) {
        writeDirectories(schema);
    }
};

export { readSchemaAndGenerator, writeDirectory };