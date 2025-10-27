import {Vote} from "../models/vote.model.js";

export class VoteRepository {
    constructor(database, generalVotesRepository) {
        this.database = database;
        this.generalVotesRepository = generalVotesRepository;
    }

    async createVote({voter_id, candidate_id, election_id, date}) {
        try {
            const [newVote] = await this.database.query('INSERT INTO vote (voter_id, candidate_id, election_id, date) VALUES (?,?,?,?)', [voter_id, candidate_id, election_id, date]);
            await this.generalVotesRepository.addGeneralVote(election_id, candidate_id);
            return new Vote({id: newVote.insertId, voter_id, candidate_id, election_id, date});
        } catch (e) {
            throw new Error(`Vote could not be created: ${e.message}`);
        }
    }


    async deleteVote(election_id, voter_id) {
        try {
            const [deleteVote] = await this.database.query('DELETE FROM vote WHERE voter_id = ? AND election_id = ?', [voter_id, election_id]);
            if (deleteVote.affectedRows === 0) {
                return {message: 'Vote not found'}
            }
            return {message: 'Vote deleted successfully'}
        } catch (e) {
            throw new Error(`Error deleting Vote: ${e.message}`);
        }
    }

    async getVoteByVoter(voter_id, election_id) {
        try {
            const [vote] = await this.database.query('SELECT * FROM vote WHERE voter_id = ? AND election_id = ?', [voter_id, election_id])
            if (vote.length === 0) return null;
            return new Vote(vote[0]);
        } catch (e) {
            throw new Error(`Error fetching vote: ${e.message}`)
        }
    }
    async getAllVotes() {
        try {
            const [vote] = await this.database.query('SELECT * FROM vote ')
            if (vote.length === 0) return null;
            return new Vote(vote[0]);
        } catch (e) {
            throw new Error(`Error fetching vote: ${e.message}`)
        }
    }

}
