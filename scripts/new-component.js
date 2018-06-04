#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const PATHS = {
  index: path.join(__dirname, '../src/index.js'),
  src: path.join(__dirname, '../src'),
};

const capFirst = str => {
  const [first, ...rest] = str.split('');
  return [first.toUpperCase(), ...rest].join('');
};

const exists = async name => {
  try {
    await access(path.join(PATHS.src, name), fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const createDirectory = async name => {
  const dirPath = path.join(PATHS.src, name);
  await mkdir(dirPath);

  return dirPath;
};

const addToIndex = async names => {
  const compRe = /\{ (\w+) \}/gm;
  const content = await readFile(PATHS.index);
  let ex;
  const comps = [];

  // eslint-disable-next-line
  while ((ex = compRe.exec(content)) !== null) {
    comps.push(ex[1]);
  }

  const newComponents = [...comps, ...names].sort();
  const newContent = newComponents
    .map(name => `export { ${name} } from './${name}';`)
    .join('\n');

  await writeFile(PATHS.index, `${newContent}\n`);
};

const templates = {
  index: name => `export ${name} from './${name}';`,

  Comp: name => `import styled from 'styled-components';
  
const ${name} = styled.div\`\`;
  
/** @component */
export default ${name};`,

  readme: name => `Description...
  
\`\`\`js static
import { ${name} } from 'wp-admin-ui-react';

const Comp = () => <${name} />;
\`\`\`

### Example

\`\`\`js
<${name} />
\`\`\``,
};

(async () => {
  const [, , ...components] = process.argv;

  const result = await Promise.all(
    components.map(capFirst).map(async name => {
      if (await exists(name)) {
        return [name, false];
      }

      const dir = await createDirectory(name);
      const files = {
        index: path.join(dir, 'index.js'),
        Comp: path.join(dir, `${name}.js`),
        readme: path.join(dir, `${name}.md`),
      };

      await Promise.all(
        Object.entries(files).map(async ([file, filePath]) => {
          const content = templates[file](name);
          await writeFile(filePath, content);
        }),
      );

      return [name, true];
    }),
  );

  const compsToAddToIndex = result
    .map(([name, created]) => created && name)
    .filter(Boolean);

  await addToIndex(compsToAddToIndex);

  result.forEach(([name, created]) => {
    if (created) {
      console.log(`${name}: Template files created`);
    } else {
      console.log(`${name}: Ignored, component already exists`);
    }
  });
})();
