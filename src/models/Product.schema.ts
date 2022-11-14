import mongoose, { Date } from 'mongoose';

const { Schema } = mongoose;

export interface IProduct {
  name: string;
  description: string;
  variants: Array<mongoose.Types.ObjectId>;
  price: number;
  image: Array<string>
  created_at: Date;
  updated_at: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    variants: [{ type: Schema.Types.ObjectId, ref: 'ProductVariant' }],
    price: { type: Number, default: 0, required: true },
    image: { type: [String], default: [], required: true },
  },
  { 
    collection: 'products', 
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
const Product = (mongoose.models.Product as mongoose.Model<IProduct>) || mongoose.model('Product', productSchema);

export default Product;
