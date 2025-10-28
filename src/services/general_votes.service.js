export class GeneralVotesService {
    constructor(generalVotesRepository) {
        this.generalVotesRepository = generalVotesRepository;
    }

    async getVotesByElection(election_id) {
        if (election_id === null) {
            throw new Error(`Missing field`)
        }

        const votes = await this.generalVotesRepository.getVotesByElection(election_id);
        if (!votes || votes.length === 0) {
            throw new Error(`There are no votes for this election`);
        }
        return votes;
    }

    async getVotesByCandidate(election_id, candidate_id) {
        if (election_id === null || candidate_id === null) {
            throw new Error(`Missing field`)
        }

        const votes = await this.generalVotesRepository.getVotesByCandidate(election_id, candidate_id);
        if (votes === 0 || votes === null) {
            throw new Error(`There are no votes for this candidate`);
        }
        return votes;
    }

}