const mongoose = require("./database");
const schema = {
    // _id: mongoose.Schema.Types.ObjectId,
    // productImage: {type: String, required: true},
    // created_at: {type: Date, default: Date.now},
    productImage: { type: mongoose.SchemaTypes.String, required: true },
    created_at: { type: mongoose.SchemaTypes.Date, default: Date.now}
};
const collectionName = "product"; // Name of the collection of documents
const productSchema = mongoose.Schema(schema);
const Product = mongoose.model(collectionName, productSchema);
module.exports = Product;