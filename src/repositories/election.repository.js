import {Election} from "../models/election.model.js";

export class ElectionRepository{
    constructor(dataabse) {
        this.database = dataabse;
    }
    async createElection({name, start_date, end_date, status}){
        try{
            const [newElection] = await this.database.query('INSERT INTO election (name, start_date, end_date, status) VALUES (?,?,?,?)', [name, start_date, end_date, status]);
            return new Election({id: newElection.insertId, name, start_date, end_date, status});
        }catch (e){
            throw new Error(`Election could not be created: ${e.message}`);
        }
    }
    async deleteElection(id){
        try {
            const [deleteElection] = await this.database.query('DELETE FROM election WHERE id = ?', [id]);
            if (deleteElection.affectedRows === 0) {
                return {message: 'Election could not be deleted'}
            }
            return {message: 'Election deleted successfully'}
        }catch (e) {
            throw new Error(`Error deleting election: ${e.message}`);

        }
    }

    async updateElection({id, name, start_date, end_date, status}){
        try{
            const [updateElection] = await this.database.query('UPDATE election SET name = ?, start_date = ?, end_date = ?, status = ? WHERE id = ?', [name, start_date, end_date, status, id]);
            if (updateElection.affectedRows === 0) {
                return {message: 'Election could not be update'}
            }
            return new Election({name, start_date, end_date, status});
        }catch (e){
            throw new Error(`Error updating election: ${e.message}`);
        }
    }
    async getElectionById(id){
        try {
            const [rows] = await this.database.query('SELECT * FROM election WHERE id = ?', [id]);
            if (rows.length === 0) return null;
            return new Election(rows[0]);
        } catch (e) {
            throw new Error(`Error fetching election by id: ${e.message}`);
        }

    }
    async getAllElections(){
        try {
            const [rows] = await this.database.query('SELECT * FROM election');
            if (rows.length === 0) return [];
            return rows.map(row => new Election(row));
        } catch (e) {
            throw new Error(`Error fetching all elections: ${e.message}`);
        }

    }

}

