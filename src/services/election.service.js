import {Election} from "../models/election.model.js";

export class ElectionService{
    constructor(electionRepository) {
        this.electionRepository = electionRepository;
    }
    async getAllElections() {
        const elections = await this.electionRepository.getAllElections();
        if (!elections || elections.length === 0) {
            throw new Error("There are no elections available");
        }
        return elections;
    }

    async getElectionById(id) {
        const election = await this.electionRepository.getElectionById(id);
        if (!election) throw new Error(`Election with ID ${id} not found`);
        return election;
    }

    async createElection(electionModel) {

        if (!electionModel.name || !electionModel.start_date || !electionModel.end_date || !electionModel.status) {
            throw new Error("Missing required election fields");
        }

        const newElection = new Election({
            name: electionModel.name,
            start_date: electionModel.start_date,
            end_date: electionModel.end_date,
            status: electionModel.status
        });

        return this.electionRepository.createElection(newElection);
    }

    async updateElection(id, electionModel) {
        const electionExists = await this.electionRepository.getElectionById(id);
        if (!electionExists) throw new Error(`Election with ID ${id} not found`);

        const updatedElection = new Election({
            id,
            name: electionModel.name ?? electionExists.name,
            start_date: electionModel.start_date ?? electionExists.start_date,
            end_date: electionModel.end_date ?? electionExists.end_date,
            status: electionModel.status ?? electionExists.status
        });

        return this.electionRepository.updateElection(updatedElection);
    }

    async deleteElection(id) {
        const electionExists = await this.electionRepository.getElectionById(id);
        if (!electionExists) throw new Error(`Election with ID ${id} not found`);

        return this.electionRepository.deleteElection(id);
    }


}