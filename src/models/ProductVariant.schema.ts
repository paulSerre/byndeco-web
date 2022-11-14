import mongoose from 'mongoose';

const { Schema } = mongoose;

const productVariantSchema = new Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    attributes: [{
      type: {
        field: { type: String, required: true },
        value: { type: String, required: true },
      },
      default: [],
    }],
    image: { type: [String], default: [], required: false },
    quantity: { type: Number, default: 0, required: true },
    created_at: { type: Date, required: true, default: new Date() },
    last_modified: { type: Date, required: true, default: new Date() },
  },
  { collection: 'products_variants' },
);

const ProductVariant = mongoose.models.ProductVariant || mongoose.model('ProductVariant', productVariantSchema);

export default ProductVariant;
