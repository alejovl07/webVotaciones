export class ElectionCandidatesController {
    constructor(electionCandidatesService) {
        this.electionCandidatesService = electionCandidatesService;
    }

    addCandidate = async (req, res) => {
        try {
            const {election_id, user_id} = req.body;
            const response = await this.electionCandidatesService.addCandidate(election_id, user_id);
            res.status(201).json(response);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

    getCandidatesByElection = async (req, res) => {
        try {
            const {election_id} = req.params;
            const candidates = await this.electionCandidatesService.getCandidatesByElection(election_id);
            res.status(200).json(candidates);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }
}
