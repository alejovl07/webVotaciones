export class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }

    createRole = async (req, res) => {
        try {
            const role = await this.roleService.createRole(req.body);
            res.status(200).json(role);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }
    deleteRole = async (req, res) => {
        try {
            const {id} = req.params;
            const role = await this.roleService.deleteRole(id);
            res.status(200).json(role);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

    getRoleById = async (req, res) => {
        try {
            const {id} = req.params;
            const role = await this.roleService.getRoleById(id);
            res.status(200).json(role);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

    getAllRoles = async (req, res) => {
        try {
            const roles = await this.roleService.getAllRoles();
            res.status(200).json(roles);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

}
