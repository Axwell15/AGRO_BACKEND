import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    measureUnit: {
        type: Schema.Types.ObjectId,
        ref: 'MeasureUnit'
    },
    measurement: {
        type: Schema.Types.ObjectId,
        ref: 'Measurement'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    grainVariety: {
        type: String,
        required: false
    },
    quality: {
        type: String,
        enum: ['organico', 'convencional'],
        required: false
    },
    harvestYear: {
        type: Number,
        required: false
    },
    productionMethods: {
        type: String,
        required: false
    },
    ratings: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, required: true }
        }
    ],
    averageRating: { type: Number, default: 0 }
});

export const Product = model("Product", productSchema);