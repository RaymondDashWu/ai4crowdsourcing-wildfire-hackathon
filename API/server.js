const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

// const mongo = require('mongodb').MongoClient
// const url = 'mongodb://localhost:8000'
// mongo.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, (err, client) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //...
// })

// const db = client.db('product')

const server = express();

server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(express.static('uploads'));

const Product = require('./model');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype ==='image/png'){
        cb(null, true);
    } else {
    cb(null, false);
    }
    
};

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


server.post('/', upload.single('productImage'), (req, res) => {
    console.log(req.file);

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        productImage: req.file.path,
        created_at: req.body.created_at
    })

    console.log('product', product)
    if (!req.file){
        console.log("No file received");
        return res.send({
            success: false
        })
    } else {
        console.log('file received');
        return res.send({
            success: true,
            product: product
        })
    }
});

server.get('/', (req, res) => {
    Product.find()
        .select("_id productImage created_at")
        .exec()
        .then(prods => {
            console.log(prods)
            prods.map(prod => {
                return {
                    _id: prod._id,
                    productImage: prod.productImage,
                    created_at: prod.created_at
                }
            })
        })
})


module.exports = server;