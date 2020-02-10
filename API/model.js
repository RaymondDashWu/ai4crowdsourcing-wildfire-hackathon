const mongoose = require("./database");

mongoose.connect(`mongodb+srv://htran:ujH9BRibXmVxQeqS@cluster0-jtlmu.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // user: username,
    // pass: password
    dbName: 'Product'
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(Error, err.message);
    });

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productImage: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', ProductSchema);