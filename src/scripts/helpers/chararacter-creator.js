export function characterCreator() {
  const classFolder = "systems/lhtrpg/assets/json/classes";
  const classesArray = _importJsonFolder(classFolder);
  console.log(classesArray);
}

// function _importJsonFolder(folder) {
//   const fs = require("fs");
//   const path = require("path");

//   const jsonsInDir = fs
//     .readdirSync(folder)
//     .filter((file) => path.extname(file) === ".json");

//   jsonsInDir.forEach((file) => {
//     const fileData = fs.readFileSync(path.join(folder, file));
//     const json = JSON.parse(fileData.toString());
//   });

//   return jsonsInDir;
// }
