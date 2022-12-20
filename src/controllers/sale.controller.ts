import { Request, Response } from 'express';
import { Sales } from '../entities/Sales';

export const createSale = async (req: Request, res: Response) => {
    try {
        const {qty, product_id, user_id} = req.body;
        const sale = new Sales()

        sale.qty = qty;
        sale.products = product_id;
        sale.users = user_id;

        await sale.save()

        return res.status(200).json({message: 'Sale successfully created'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getSales = async (req: Request, res: Response) => {
    try {
     
        const sale = await Sales.find()
        return res.json(sale);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const updateSale = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const sale = await Sales.findOneBy({id: parseInt(id)});
        if (!sale) return res.status(404).json({message: 'Sale not found'});

        await Sales.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: 'Sale updated successfully'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteSale = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const sale = await Sales.findOneBy({id: parseInt(id)});
        if (!sale) return res.status(404).json({message: 'Sale not found'});
        await Sales.delete({id: parseInt(id)})
        return res.status(200).json({message: 'Sale deleted'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getSale = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const sale = await Sales.findOneBy({id: parseInt(id)});
        if (!sale) return res.status(404).json({message: 'Sale not found'});
        return res.json(sale);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
