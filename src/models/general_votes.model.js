export class GeneralVotes{
  constructor({id, election_id, candidate_id, total_votes}) {
    this.id = id;
    this.election_id = election_id;
    this.candidate_id = candidate_id;
    this.total_votes = total_votes;
  }

}