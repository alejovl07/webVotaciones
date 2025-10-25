export class RoleService{
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }

    async createRole(roleModel){
        const roleExists = await  this.roleRepository.getRoleById(roleModel.id);
        if (roleExists) throw new Error(`Role ${roleModel.id} already exists`);

        const newRole = await this.roleRepository.createRole(roleModel);
        return newRole;
    }

    async deleteRole(id){
        const  roleExists = await  this.roleRepository.getRoleById(id);
        if (!roleExists) throw new Error(`Role with ${id} no exists`);

        const deleteRole = await  this.roleRepository.deleteRole(id);
        return deleteRole;
    }

    async getRoleById(id){
        const role = await  this.roleRepository.getRoleById(id);
        if (!role) throw  new Error(`Role no found`);
        return role;
    }
    async getAllRoles(){
        return await this.roleRepository.getAllRoles();
    }
}