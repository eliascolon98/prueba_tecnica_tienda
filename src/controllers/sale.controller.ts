import { Request, Response } from 'express';
import { Like } from "typeorm";
import { Sales } from '../entities/Sales';
import { Users } from '../entities/Users';

export const createSale = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'save') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'save') == 403) return res.status(403).json({ message: "User is not authorized" });

        const { qty, product_id, user_id } = req.body;
        const sale = new Sales()

        sale.qty = qty;
        sale.products = product_id;
        sale.users = user_id;

        await sale.save()

        return res.status(200).json({ message: 'Sale successfully created' });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getSales = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

        const sale = await Sales.find();
        return res.json(sale);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const updateSale = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'update') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'update') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;

        const sale = await Sales.findOneBy({ id: parseInt(id) });
        if (!sale) return res.status(404).json({ message: 'Sale not found' });

        await Sales.update({ id: parseInt(id) }, req.body)
        return res.status(200).json({ message: 'Sale updated successfully' });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const deleteSale = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'delete') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'delete') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;
        const sale = await Sales.findOneBy({ id: parseInt(id) });
        if (!sale) return res.status(404).json({ message: 'Sale not found' });

        await Sales.delete({ id: parseInt(id) })
        return res.status(200).json({ message: 'Sale deleted' });

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getSale = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;
        const sale = await Sales.findOneBy({ id: parseInt(id) });
        if (!sale) return res.status(404).json({ message: 'Sale not found' });
        return res.json(sale);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getSalesDay = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'sales') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'sales') == 403) return res.status(403).json({ message: "User is not authorized" });

        let {day} = req.body;
        day = Date.parse(day);
        const sales = await Sales.find(
           { where: [
               {sale_at: Like(day)}
           ]
        });
   
        console.log(sales, day);
        
        // return res.json(sale);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

const validatePermission = (user: any, option: string) => {

    if (user === "" || user === undefined) {
        return 401;
    }

    if (option == "save") {
        if (user !== "3") {
            return 403;
        }
    } else if (option == "update") {
        if (user !== "1") {
            return 403;
        }
    } else if (option == "delete") {
        if (user !== "1") {
            return 403;
        }
    } else if (option == "list") {
        if (user !== "3") {
            return 403;
        }
    }else if (option == "sales") {
        if (user !== "1") {
            return 403;
        }
    }
}
