const path = require('path');
const fs = require('fs');
const extentionFunc = require('../helpers/extention');

module.exports = (req, res) => {
  const url = req.url.indexOf('?') !== -1
    ? req.url.replace(/\?[^\s]*$/g, '')
    : req.url;
  try {
    console.log('handler');
    const nameImage = url.substring(url.indexOf('static')).replace('static/', '');
    const pathImage = path.join(__dirname, '../', 'public', nameImage);
    const extention = extentionFunc(url);
    res.writeHead(200, {
      'Content-Type': extention
    });
    res.end(fs.readFileSync(pathImage));
  } catch (error) {
    // console.log(error);
    res.writeHead(500);
    res.end('Error loading index.html');
  }      
};