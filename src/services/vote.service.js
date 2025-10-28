export class VoteService {
    constructor(voteRepository) {
        this.voteRepository = voteRepository;
    }

    async createVote(voteModel) {
        const voteExists = await this.voteRepository.getVoteByVoter(voteModel.voter_id, voteModel.election_id);
        if (voteExists) throw new Error(`User already voted in this election`);

        const newVote = await this.voteRepository.createVote(voteModel);
        return newVote;

    }

    async deleteVote(election_id, voter_id) {
        const voteExists = await this.voteRepository.getVoteByVoter(voter_id, election_id);
        if (!voteExists) throw new Error(`Vote not found`);

        const deleteVote = await this.voteRepository.deleteVote(voter_id, election_id);
        return deleteVote;
    }

    async getVoteByVoter(voter_id, election_id) {
        const vote = await this.voteRepository.getVoteByVoter(voter_id, election_id);
        if (!vote) throw new Error(`Vote not found`);
        return vote;
    }

    async getAllVotes() {
        const vote = await this.voteRepository.getAllVotes();
        if (vote === null) throw new Error(`There are no votes`);
        return vote;
    }


}