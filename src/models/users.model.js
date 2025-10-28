export class User {
    constructor({id, email, password, id_card, role_id}) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.id_card = id_card;
        this.role_id = role_id;
    }
}
