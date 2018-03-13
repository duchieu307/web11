const fs = require('fs');

let readFile = (path, onReadFileDone) => {
    return fs.readFile(path, "utf-8", (err, data)=> {
        if (err) {console.log(err)};
        onReadFileDone(data);
    });
};

let readFileSync = (path) => {
    return fs.readFileSync(path, 'utf-8');
};

let writeFile = (path, writedata, onWriteDataDone) => {
    fs.writeFile(path, writedata, (err) => {
        if (err) { console.log(err)};
        console.log("Success");
    }); 
};

module.exports = {
    readFile,
    writeFile,
    readFileSync
}   // xuat ham ra de dung