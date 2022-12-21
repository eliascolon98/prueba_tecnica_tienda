import { Request, Response } from 'express';
import { Products } from '../entities/Product';

export const createProduct = async (req: Request, res: Response) => {
    try {
        
        if (validatePermission(req.headers.auth, 'save') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'save') == 403) return res.status(403).json({ message: "User is not authorized" });

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
     
        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'update') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'update') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'delete') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'delete') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

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


const validatePermission = (user: any, option: string) => {
    
    if (user === "" || user === undefined) {
        return 401;
    }

    if (option == "save") {
        if (user !== "1") {
            return 403;
        }
    } else if (option == "update") {
        return 403;
    } else if (option == "delete") {
        return 403;
    } else if (option == "list") {
        if (user !== "3") {
            return 403;
        }
    }
}