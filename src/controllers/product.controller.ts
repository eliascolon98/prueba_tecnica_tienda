import { Request, Response } from 'express';
import { Products } from '../entities/Product';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const {  name, price, description } = req.body;
        const product = new Products()

        product.name = name;
        product.price = price;
        product.description = description;

        await product.save()

        return res.status(200).json({message: 'Product successfully created'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
     
        const Product = await Products.find()
        return res.json(Product);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const product = await Products.findOneBy({id: parseInt(id)});
        if (!product) return res.status(404).json({message: 'Product not found'});

        await Products.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: 'Product updated successfully'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = await Products.findOneBy({id: parseInt(id)});
        if (!product) return res.status(404).json({message: 'Product not found'});
        await Products.delete({id: parseInt(id)})
        return res.status(200).json({message: 'Product deleted'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = await Products.findOneBy({id: parseInt(id)});
        if (!product) return res.status(404).json({message: 'Product not found'});
        return res.json(product);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
