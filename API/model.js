const mongoose = require("./database");

const username = 'htran'
const password = 'p%40ssw0rd%279%27%21'

mongoose.connect(`mongodb+srv://htran:EWx9AXukq9a0FnPa@cluster0-jtlmu.mongodb.net/test?retryWrites=true&w=majority`, {
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