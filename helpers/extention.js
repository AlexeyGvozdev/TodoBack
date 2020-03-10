module.exports = (url) => {
  // const nameImage = url.substring(url.indexOf('static')).replace('static/', '');
  // console.log(nameImage + '\n' + extention + '\n' + pathImage);  
  const extention = url.substring(url.lastIndexOf('.') + 1);
  switch (extention) {
  case 'png':
  case 'jpg':
  case 'jpeg': 
    return 'image/' + extention;
  case 'json':
    return 'file/json';
  default:
    return '';
  }
};

