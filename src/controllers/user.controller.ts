import { Request, Response } from 'express';
import { Users } from '../entities/Users';

export const createUser = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'save') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'save') == 403) return res.status(403).json({ message: "User is not authorized" });

        const { document, name, lastname, roles_id } = req.body;
        const user = new Users()

        user.document = document;
        user.name = name;
        user.lastname = lastname;
        user.roles = roles_id;

        await user.save()

        return res.status(200).json({message: 'User was created successfully'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
     
        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

        const users = await Users.find()
        return res.json(users);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
      
        if (validatePermission(req.headers.auth, 'update') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'update') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;

        const user = await Users.findOneBy({id: parseInt(id)});
        if (!user) return res.status(404).json({message: 'Users not found'});

        await Users.update({id: parseInt(id)}, req.body)
        return res.status(200).json({message: 'User updated successfully'})

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'delete') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'delete') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;
        const user = await Users.findOneBy({id: parseInt(id)});
        if (!user) return res.status(404).json({message: 'Users not found'});
        await Users.delete({id: parseInt(id)})
        return res.status(200).json({message: 'User deleted'});

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
       
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {

        if (validatePermission(req.headers.auth, 'list') == 401) return res.status(401).json({ message: "Please add an authentication" });
        if (validatePermission(req.headers.auth, 'list') == 403) return res.status(403).json({ message: "User is not authorized" });

        const id = req.params.id;
        const user = await Users.findOneBy({id: parseInt(id)});
        if (!user) return res.status(404).json({message: 'Users not found'});
        return res.json(user);

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
    }

}