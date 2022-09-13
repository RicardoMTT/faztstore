import { prop, ModelOptions, getModelForClass } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Product {
  @prop()
  name: string;

  @prop()
  price: number;

  @prop()
  description: string;

  @prop()
  image: string;

  @prop()
  stock: number;
}

export default getModelForClass(Product);
