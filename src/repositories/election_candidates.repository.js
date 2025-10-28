export class ElectionCandidatesRepository {
    constructor(database) {
        this.database = database;
    }

    async addCandidates(election_id, user_id) {
        try {
            await this.database.query(`INSERT INTO election_candidates (election_id, user_id)
                                       VALUES (?, ?)`, [election_id, user_id])
        } catch (e) {
            throw new Error(`Add candidate to election_candidates failed: ${e.message}`);
        }
    }

    async getCandidatesByElection(election_id) {
        try {
            const [rows] = await this.database.query(
                `SELECT u.id        AS candidate_id,
                        u.email,
                        COUNT(v.id) AS total_votes
                 FROM election_candidates ec
                          JOIN users u ON ec.user_id = u.id
                          LEFT JOIN vote v
                                    ON v.candidate_id = u.id
                                        AND v.election_id = ec.election_id
                 WHERE ec.election_id = ?
                 GROUP BY u.id, u.email;`,
                [election_id]
            );

            return rows;
        } catch (e) {
            throw new Error(`Fetching candidates from election_candidates failed: ${e.message}`);
        }
    }


}