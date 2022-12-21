import { Request, Response } from 'express';
import { Roles } from '../entities/Roles';

export const createRol = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'save') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'save') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });
     
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

        if (validatePermission(req.headers.auth, 'update') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'update') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'delete') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'delete') == 403) return res.status(403).json({ message: "User is not authorized" });

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

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

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

const validatePermission = (user: any, option: string) => {

    if (user === "" || user === undefined) {
        return 401;
    }else if(user  !== "1"){
        return 403;
    }else{
        if(option == "update" || option == "delete" || option == "list"){
            return 403;
        }
    }    

}