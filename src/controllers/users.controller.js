export class UsersController {

    constructor(userService) {
        this.userService = userService;
    }

    createUser = async (req, res) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    deleteUser = async (req, res) => {
        try {
            const {id} = req.params;
            const user = await this.userService.deleteUser(id);
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    updateUser = async (req, res) => {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    getAllUsers = async (req, res) => {
        try {
            const user = await this.userService.getAllUser();
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    getUserById = async (req, res) => {
        try {
            const {id} = req.params;
            const user = await this.userService.getUserById(id);
            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    getUserByEmail = async (req, res) => {
        try{
            const {email} = req.params;
            const user = await this.userService.getUserByEmail(email);
            res.status(200).json(user);
        } catch (e){
            res.status(500).json({message: e.message});
        }
    }

}