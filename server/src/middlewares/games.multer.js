const multer = require('multer');

//Storage
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null,'uploads');
    },
    filename: ((req,file,cb)=>{

        cb(null, Date.now() + '-'+ file.originalname);
    })

});

//validation
const fileFilterImage = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Cannot accept this file type. Please upload either a JPEG or PNG image.'), false);
    }
  };


  const uploadImage = multer({ storage:imageStorage, fileFilter:fileFilterImage}).single('file');

  module.exports = {uploadImage}