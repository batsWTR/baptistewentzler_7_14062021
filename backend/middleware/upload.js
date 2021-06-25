// multer
const multer = require('multer');


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg' : 'jpg',
    'image/png' : 'png',
    'image/webp' : 'webp'
}

const storage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        let name = req.body.userId;
        //let name = file.originalname.split('.');
        //name[0] = name[0].split(' ').join('_');
        const ext = MIME_TYPES[file.mimetype];

        cb(null, name);
    }
});

const upload = multer({
    storage: storage,
    limits: 1200000
});


module.exports = upload.single('image');