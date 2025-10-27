export class ElectionController {
    constructor(electionService) {
        this.electionService = electionService;
    }

    createElection = async (req, res) => {
        try {
            const election = await this.electionService.createElection(req.body);
            res.status(201).json(election);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    deleteElection = async (req, res) => {
        try {
            const {id} = req.params;
            const deletedElection = await this.electionService.deleteElection(id);
            res.status(200).json(deletedElection);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    updateElection = async (req, res) => {
        try {
            const {id} = req.params;
            const updatedElection = await this.electionService.updateElection(id, req.body);
            res.status(200).json(updatedElection);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    getAllElections = async (req, res) => {
        try {
            const elections = await this.electionService.getAllElections();
            res.status(200).json(elections);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    getElectionById = async (req, res) => {
        try {
            const {id} = req.params;
            const election = await this.electionService.getElectionById(id);
            res.status(200).json(election);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
}