const fs = require("fs");
const path = require('path');


function readingSampleScript() {
    const promise = new Promise(((resolve, reject) => {
        fs.readFile("./testSampleScript", (err, files) => {
            if (err) reject (err);
            const target = String(files);
            resolve (target);
        });
    }));
    return promise;
}

function dirExtraction(dir) {
    dir = dir || "./NavgationsPages";
    const promise = new Promise(((resolve, reject) =>{
        fs.readdir(dir, (err, files) => {
            if (err) reject(err);
            const listOfFiles = [];
            files.forEach(file => {
                const filePath = path.resolve(dir, file);

                listOfFiles.push({fileName:file.replace(".js",""),filePath: path.relative('./test',filePath).replace(/\\/g,"/")});
                console.log(filePath);
            });
            resolve(listOfFiles);
        })
    }));
    return promise;
}


Promise.all([dirExtraction(process.argv[2]), readingSampleScript()]).then(function (resp) {
    const sampleScript =  resp[1];
    resp[0].forEach(file => {
        var target = sampleScript.replace(/SamplePath/g, file.filePath);
        target = target.replace(/Sample/g, file.fileName);
        console.log(target);
        fs.writeFile("./test/"+file.fileName+".test.js", target, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
});
