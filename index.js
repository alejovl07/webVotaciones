  import express from 'express';
  import dotenv from 'dotenv';
  import cors from 'cors';    

  import election_candidatesRoute from './src/routes/election_candidates.route.js';
  import election_status_historyRoute from './src/routes/election_status_history.route.js';
  import electionRoute from './src/routes/election.route.js';
  import general_votesRoute from './src/routes/users.route.js';
  import roleRoute from './src/routes/role.route.js';
  import usersRoute from './src/routes/users.route.js';
  import voteRoute from './src/routes/vote.route.js';
  
  
  import path from 'path';
  import { fileURLToPath } from 'url';
  import pool from './src/config/db.js';

  dotenv.config();


  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  //app.use('/candidate', candidateRoutes);
  app.use('/election_candidates', election_candidatesRoute)
  app.use('/election_status', election_status_historyRoute)
  app.use('/election', electionRoute);
  app.use('/general_votes', general_votesRoute);
  app.use('/role', roleRoute);
  app.use('/users', usersRoute);
  app.use('/vote', voteRoute);


 
  
  app.get('/', (req, res) => {
    res.send('Servidor corriendo ✅');
  });




  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });