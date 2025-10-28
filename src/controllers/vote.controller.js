export class VoteController {
    constructor(voteService) {
        this.voteService = voteService;
    }

    createVote = async (req, res) => {
        try {
            const vote = await this.voteService.createVote(req.body);
            res.status(200).json(vote);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }
    deleteVote = async (req, res) => {
        try {
            const { voter_id, election_id } = req.body;
            const vote = await this.voteService.deleteVote(election_id, voter_id);
            res.status(200).json(vote);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }
    getVoteByVoter = async (req, res) => {
        try {
            const { voter_id, election_id } = req.query;
            const vote = await this.voteService.getVoteByVoter(voter_id, election_id);
            res.status(200).json(vote);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

    getAllVotes = async (req, res) => {
        try {
            const vote = await this.voteService.getAllVotes();
            res.status(200).json(vote);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }
}