import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProductsHandler = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.send(products);
};

export const createProductHandler = async (req: Request, res: Response) => {
  const { name, price, description, stock } = req.body;
  const product = new Product({
    name,
    price,
    description,
    stock,
  });
  const produtSaved = await product.save();
  res.send(produtSaved);
};

export const updateProductHandler = (req: Request, res: Response) => {
  res.send("get");
};

export const deleteProductHandler = (req: Request, res: Response) => {
  res.send("get");
};

export const getProductHandler = (req: Request, res: Response) => {
  res.send("get");
};
