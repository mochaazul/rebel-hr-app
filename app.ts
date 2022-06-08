import { readSchemaAndGenerator, transform } from 'src';
import chokidar from 'chokidar';
import data from 'rebel-gen.json';

const main = () => {
  // readSchemaAndGenerator()
  wrapWatcher(data.schema);
  const handsomePeople = {
    name: "Riswan",
    age: 21,
    isHandsome: true,
    cars: [{
      name: "BMW",
      total: 1,
    }, {
      name: "Alphard",
      total: 10
    }]
  };
};

const wrapWatcher = (schema: string) => {
  const watcher = chokidar.watch(schema, {
    ignored: [/(^|[\/\\])\../, 'node_modules'],
    persistent: true
  });

  const log = console.log.bind(console);
  // Add event listeners for file.
  watcher
    .on('add', path => log(`File ${ path } has been added`))
    .on('change', path => log(`File ${ path } has been changed`))
    .on('unlink', path => log(`File ${ path } has been removed`));

  // Add event listeners for directory.
  watcher
    .on('addDir', path => log(`Directory ${ path } has been added`))
    .on('unlinkDir', path => log(`Directory ${ path } has been removed`))
    .on('error', error => log(`Watcher error: ${ error }`))
    .on('ready', () => readSchemaAndGenerator())
    .on('raw', (event, path, details) => {
      console.log('wkwkwk');
      //   log('Raw event info:', event, path, details);
    });
};

main();