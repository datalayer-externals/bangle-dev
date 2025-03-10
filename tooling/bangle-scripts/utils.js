const path = require('path');
const globby = require('globby');
const fs = require('fs/promises');

const rootPath = path.resolve(__dirname, '..', '..');

module.exports = { getPackages, mapPackages };

async function getPackages({ filter = 'all' } = {}) {
  const globResults = await globby([path.join(rootPath, '**/package.json')]);
  // console.log({ globResults });
  let results = await Promise.all(
    globResults.map(async (path) => [
      path,
      JSON.parse(await fs.readFile(path, 'utf-8')),
    ]),
  );

  results = results.filter(([filePath, packageObj]) => {
    if (filter === 'private') {
      return packageObj.private;
    }
    if (filter === 'public') {
      return !packageObj.private;
    }

    return true;
  });

  return results;
}

// cb - ([packagePath, packageObj]) => packageObj
async function mapPackages(cb, { filter } = {}) {
  const result = (await getPackages({ filter })).map(([path, obj]) => {
    return [path, cb([path, obj])];
  });

  await Promise.all(
    result.map(([packagePath, packageObj]) => {
      return fs.writeFile(
        packagePath,
        JSON.stringify(packageObj, null, 2) + '\n',
        'utf-8',
      );
    }),
  );
}

export function filesInPath(path) {
  const filePaths = globby
    .sync(`${path}/**`)
    .filter(
      (r) =>
        r.endsWith('.json') ||
        r.endsWith('.js') ||
        r.endsWith('.ts') ||
        r.endsWith('.tsx') ||
        r.endsWith('.jsx') ||
        r.endsWith('.snap') ||
        r.endsWith('.css'),
    );

  return filePaths;
}

// mapPackages(
//   ([packagePath, packageJson]) => {
//     let path = packagePath.split('/package.json').join('');

//     const files = filesInPath(path);

//     if (files.some((f) => f.endsWith('style.css'))) {
//       console.log(`${packagePath} has style.css`);
//       packageJson.style = 'style.css';
//       packageJson.exports = {
//         '.': {
//           import: './dist/index.js',
//           require: './dist/index.cjs',
//         },
//         './style.css': './style.css',
//       };
//     } else {
//       delete packageJson.style;
//       packageJson.exports = {
//         import: './dist/index.js',
//         require: './dist/index.cjs',
//       };
//     }
//     return packageJson;
//   },
//   {
//     filter: 'public',
//   },
// );
