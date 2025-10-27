export class GeneralVotesController{
  constructor(generalVotesService) {
    this.generalVotesService = generalVotesService;
  }
  getVotesByElection =  async (req, res) => {
    try {
      const { election_id } = req.params;
      const votes = await this.generalVotesService.getVotesByElection(election_id);
      res.status(200).json(votes);
    }catch (e) {
      res.status(400).json({message: e.message});
    }
  }

  getVotesByCandidate =  async (req, res) => {
    try {
      const { election_id, candidate_id } = req.query;
      const votes = await this.generalVotesService.getVotesByCandidate(election_id, candidate_id);
      res.status(200).json(votes);
    }catch (e) {
      res.status(400).json({message: e.message});
    }
  }



}

