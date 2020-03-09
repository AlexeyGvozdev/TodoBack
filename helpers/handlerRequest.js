const path = require('path');

module.exports = (req, res) => {
  const url = req.url.indexOf('?') !== -1
    ? req.url.replace(/\?[^\s]*$/g, '')
    : req.url;
  const nameImage = url.substring(url.indexOf('static')).replace('static/', '');
  const extention = url.substring(url.lastIndexOf('.') + 1);
  const pathImage = path.join(__dirname, '../', 'public', nameImage);
  console.log(nameImage + '\n' + extention + '\n' + pathImage);
  try {
    res.writeHead(200, {
      'Content-Type': 'image/' + extention
    });
    res.end(fs.readFileSync(pathImage));
  } catch (error) {
    // console.log(error)
    res.writeHead(500);
    res.end('Error loading index.html');
  }      
};