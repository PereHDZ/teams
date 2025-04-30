import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import logic from './logic'

dotenv.config()

const { MONGODB_URL, PORT } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonBodyParser = express.json()

        api.use(cors())
        api.use(express.json())
        

        api.get('/pokemons/finalStages/:game', async (req, res) => {
            const { game } = req.params;
            console.log(`Received request for game: ${game}`);
        
            try {
                const finalStages = await logic.retrieveFinalStagesFromGame(game);
                console.log('Sending response:', finalStages);
                res.json(finalStages);
            } catch (error: any) {
                console.error('Error occurred:', error.message);
                res.status(500).json({ error: error.message });
            }
        })


        api.get('/pokemons/baseForms', async (req, res) => {
            const { game } = req.params;
            console.log(`Received request for game: ${game}`);
        
            try {
                const finalStages = await logic.retrieveBaseForms();
                console.log('Sending response:', finalStages);
                res.json(finalStages);
            } catch (error: any) {
                console.error('Error occurred:', error.message);
                res.status(500).json({ error: error.message });
            }
        })


        api.listen(PORT, () => {
            console.log(`API listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err.message)
    })
