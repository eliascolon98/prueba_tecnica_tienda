import { Request, Response } from 'express';
import { Roles } from '../entities/Roles';

export const createRol = async (req: Request, res: Response) => {
    try {
        const {  name} = req.body;
        const rol = new Roles()

        rol.name = name;
        await rol.save()

        return res.status(200).json({message: 'Rol successfully created'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getRoles = async (req: Request, res: Response) => {
    try {
     
        const rol = await Roles.find()
        return res.json(rol);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const updateRol = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const rol = await Roles.findOneBy({id: parseInt(id)});
        if (!rol) return res.status(404).json({message: 'Rol not found'});

        await Roles.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: 'Rol updated successfully'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteRol = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const rol = await Roles.findOneBy({id: parseInt(id)});
        if (!rol) return res.status(404).json({message: 'Rol not found'});
        await Roles.delete({id: parseInt(id)})
        return res.status(200).json({message: 'Rol deleted'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getRol = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const rol = await Roles.findOneBy({id: parseInt(id)});
        if (!rol) return res.status(404).json({message: 'Rol not found'});
        return res.json(rol);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}
