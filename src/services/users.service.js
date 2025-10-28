import {User} from "../models/users.model.js";
import bcrypt from "bcrypt";

export class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUser() {
        return this.userRepository.getAllUsers();
    }

    async getUserById(id) {
        const user = await this.userRepository.getUserById(id);
        if (!user) throw new Error(`User no found`);
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) throw new Error(`User no found`);
        return user;
    }

    async createUser(userModel) {
        const userExists = await this.userRepository.getUserByEmail(userModel.email);
        if (userExists) throw new Error(`User ${userExists.name} already exists`);

        const hashPassword = await bcrypt.hash(userModel.password, 10)

        const user = new User({
            ...userModel,
            password: hashPassword,
            role_id: parseInt(process.env.DEFAULT_ROLE_ID)
        });

        const newUser = await this.userRepository.createUser(user);
        return newUser;
    }

    async updateUser(id, userModel){
        const userExists = await this.userRepository.getUserById(id);
        if (!userExists) throw new Error(`User ${id} not found`);

        let hashedPassword = userExists.password;
        if (userModel.password) {
            hashedPassword = await bcrypt.hash(userModel.password, 10);
        }

        const updatedUser = new User({
            id,
            email: userModel.email ?? userExists.email,
            password: hashedPassword,
            id_card: userModel.id_card ?? userExists.id_card,
            role_id: userExists.role_id
        });

        return this.userRepository.updateUser(updatedUser);
    }


    async deleteUser(id) {
        const userExists = await this.userRepository.getUserById(id);
        if (!userExists) throw new Error(`User ${id} not found`);

        const deleteUser = await this.userRepository.deleteUser(id);
        return deleteUser;

    }


}