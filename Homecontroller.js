const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//  JS file to read folder files


const imgView = function (req, res) {
    const directoryPath = path.join(__dirname, '../img');
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file

        });
        // baseModel.find({}, function (err, docs) {
        //     if (err) res.json(err);
        //     else res.render('images', { images: docs.status});
        //     console.log("docs" + docs.status);
        // });
        console.log(files);
        res.render('images', {
            images: files
        });
    });

}

module.exports = {
    imgView: imgView
}
