export class ElectionCandidatesService {
    constructor(electionCandidatesRepository, userRepository) {
        this.electionCandidatesRepository = electionCandidatesRepository;
        this.userRepository = userRepository;
    }

    async addCandidate(election_id, user_id) {
        const isCandidate = await this.userRepository.isCandidate(user_id);
        if (!isCandidate) {
            throw new Error(`User  with ID ${user_id} is not a candidate`);
        }
        const existingCandidates = await this.electionCandidatesRepository.getCandidatesByElection(election_id);
        const alreadyInElection = existingCandidates.some(c => c.candidate_id === user_id);

        if (alreadyInElection) {
            throw new Error(`Candidate with ID ${user_id} is already registered in election ${election_id}`);
        }
        await this.electionCandidatesRepository.addCandidates(election_id, user_id);

        return {message: `Candidate ${user_id} added successfully to election ${election_id}`};


    }

    async getCandidatesByElection(election_id) {
        const candidates = await this.electionCandidatesRepository.getCandidatesByElection(election_id);

        if (!candidates || candidates.length === 0) {
            throw new Error(`No candidates found for election ${election_id}`);
        }

        return candidates;
    }


}