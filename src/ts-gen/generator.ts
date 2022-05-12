const defaultConfig = {
  lengthOutput: 2,
  withRoot: true,
  defaultName: 'IGenerate',
}
  const getInterface = (name: string, isExport: boolean = false) => {
      return `${isExport ? 'export ' : ''}interface ${name}{\n`
  }
  
  const strCamelCase = (str:string = '') => {
    return str.replace(/(-|_)([a-z])/g,  (res) => {
      return res[1].toUpperCase()
    })
  }
  
  const upperFirstStr = (str:string = '') => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  const getSpacing = (num:number = 2) => {
    return ' '.repeat(num)
  }
  
  const getObjArr = (arr: any = []) => {
    if (arr.length === 0) {
      return {}
    } else {
      if (typeof arr[0] !== 'object') {
        return arr[0]
      } else {
        return arr.reduce((pre: any, next: any) => {
          return Object.assign(pre, next)
        }, {})
      }
    }
  }
const transformJSON = (obj: any, config: any) => {
    let result = ''
    let nextStr = ''
    const padData = getSpacing(config.lengthOutput)
    Object.keys(obj).forEach((key) => {
      const item = obj[key]
      if (typeof item !== 'object') {
        result += `${padData}${key}: ${typeof item};\n`
      } else if (Object.entries(item)) {
        if (item.length === 0) {
          result += `${padData}${key}: any[];\n`
        } else {
          const fullObject = getObjArr(item)
          if (typeof fullObject === 'object') {
            const resultName = `${upperFirstStr(strCamelCase(key))}Item`
            result += `${padData}${key}: ${resultName}[];\n`
            const sub = transform(fullObject, {
              ...config,
              defaultName: resultName,
            })
            nextStr += `${sub}`
          } else {
            result += `${padData}${key}: ${typeof fullObject}[];\n`
          }
        }
      } else {
        if (item === null) {
          result += `${padData}${key}: string;\n`
        } else {
          const resultName = upperFirstStr(strCamelCase(key))
          result += `${padData}${key}: ${resultName};\n`
          const sub = transform(item, {
            ...config,
            defaultName: resultName,
          })
          nextStr += `${sub}`
        }
      }
    })
    return [result, nextStr]
  }
  
  export const transform =  (obj = {}, config = {}): Promise<string> => new Promise((resolve, reject) => {
    if (!Object.entries(obj)) {
      reject('obj is empty')
    } else {
      const combineConfig = {
        ...defaultConfig,
        ...config,
      }
      const prefix = getInterface(
        upperFirstStr(combineConfig.defaultName),
        Boolean(combineConfig.withRoot)
      )
      const [content, subContent] = transformJSON(obj, combineConfig)
      const lastChar = '}'
      resolve(`${subContent}${prefix}${content}${lastChar}\n\n`)
    }
  })