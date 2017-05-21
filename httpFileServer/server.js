var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var app = express();

// accept file uploads
app.use(fileUpload());

// send files from the files folder
app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/', function(req, res) {
    res.send('File Server Says Hi');
});

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates')+ '/upload.html');
});

app.post('/upload', function(req, res) {
    var sampleFile;

    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    sampleFile = req.files.sampleFile;
    sampleFileName = req.files.sampleFile.name;
    sampleFile.mv('./files/'+ sampleFileName, function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded! Download Link: <a href="http://localhost:3000/files/'+ sampleFileName +'">'+ sampleFileName +'</a>');
        }
    });
});

app.listen(3000, function () {
    console.log('File Server listening on port 3000!');
});