import fs from 'fs';
let folders = fs.readdirSync('./posts');
folders = folders.map(folder => {
  const files = fs.readdirSync(`./posts/${folder}/`);
  return files.map(file => {
    return {
      path: `./posts/${folder}/${file}`,
      tag: folder,
      title: file,
    };
  })
})
folders = folders.flat();
console.log(folders);

folders.map(file => {
  let data = `
  ---
  title:${file.title}
  description: none
  date: 2021-05-03
  tags:
    - ${file.tag}
  ---
  `
  fs.writeFileSync(file.path, data);
})