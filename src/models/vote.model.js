export class Vote{
  constructor({id, voter_id, candidate_id, election_id, date}) {
    this.id = id;
    this.voter_id = voter_id;
    this.candidate_id = candidate_id;
    this.election_id = election_id;
    this.date = date;
  }
  
}