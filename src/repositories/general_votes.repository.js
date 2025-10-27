import {GeneralVotes} from "../models/general_votes.model.js";

export class GeneralVotesRepository {
    constructor(database) {
        this.database = database
    }

    async addGeneralVote(election_id, candidate_id) {
        try {
            await this.database.query(`INSERT INTO general_votes (election_id, candidate_id, total_votes)
                                       VALUES (?, ?, 1) ON DUPLICATE KEY
            UPDATE total_votes = total_votes + 1;`, [election_id, candidate_id]);

            const [rows] = await this.database.query(`SELECT *
                                                         FROM general_votes
                                                         WHERE election_id = ?
                                                           AND candidate_id = ?`, [election_id, candidate_id]);
            return new GeneralVotes(rows[0]);
        } catch (e) {
            throw new Error('Add vote to general votes failed: ${e.message}');
        }
    }

    async getVotesByElection(election_id) {
        try {
            const [rows] = await this.database.query(
                `SELECT gv.candidate_id,
                        u.email AS candidate_email,
                        gv.total_votes
                 FROM general_votes gv
                          JOIN users u ON gv.candidate_id = u.id
                 WHERE gv.election_id = ?
                 ORDER BY gv.total_votes DESC;`,
                [election_id]
            );
            return rows;
        } catch (e) {
            throw new Error(`Error fetching votes by election: ${e.message}`);
        }
    }

    async getVotesByCandidate(election_id, candidate_id) {
        try {
            const [rows] = await this.database.query(
                `SELECT total_votes
                 FROM general_votes
                 WHERE election_id = ?
                   AND candidate_id = ?;`,
                [election_id, candidate_id]
            );
            return rows.length > 0 ? rows[0].total_votes : 0;
        } catch (e) {
            throw new Error(`Error fetching votes by candidate: ${e.message}`);
        }
    }
}