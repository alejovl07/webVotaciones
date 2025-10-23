  import express from 'express';
  import dotenv from 'dotenv';
  import cors from 'cors';    
  import userRoutes from './src/routes/user.route.js';
  import votesRoutes from './src/routes/votes.routes.js';
  import electionsRoutes from './src/routes/elections.routes.js';
  import candidateRoutes from './src/routes/candidate.routes.js';
  import path from 'path';
  import { fileURLToPath } from 'url';
  import pool from './src/config/db.js';

  dotenv.config();


  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.use('/users', userRoutes);
  app.use('/votes', votesRoutes);
  app.use('/elections', electionsRoutes);
  app.use('/candidate', candidateRoutes);
 
  
  app.get('/', (req, res) => {
    res.send('Servidor corriendo ✅');
  });




  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });