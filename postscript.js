import fs from "fs"
import path from "path";

const dirPath=path.resolve(path.dirname(''),'out')

const fileList = getAllFiles(dirPath);

replaceScriptUrls(fileList);

function replaceScriptUrls(fileList) {
    fileList.forEach((filePath) => {
        const fileContents = fs.readFileSync(filePath, 'utf-8');

        const updatedContents = fileContents.replace(/"\/_next/g, "\"_next");


        fs.writeFileSync(path.resolve(filePath), updatedContents);
    });
}


function getAllFiles(dirPath, prevFiles = [], depth = -1) {
    const files = fs.readdirSync(dirPath);

    let fileList = prevFiles || [];

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            fileList = getAllFiles(filePath, fileList, depth + 1);
        } else if (stats.isFile() && filePath.endsWith(".html")) {
            fileList.push(filePath);
        }
    });

    return fileList;
}