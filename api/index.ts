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
            try {
                const finalStages = await logic.retrieveBaseForms();
                res.json(finalStages);
            } catch (error: any) {
                console.error('Error occurred:', error.message);
                res.status(500).json({ error: error.message });
            }
        })
        

        api.get('/pokemons/:id', async (req, res) => {
            const { id } = req.params
            
            try {
                const pokemon = await logic.retrievePokemonById(id)
                res.json(pokemon)
            } catch (error : any) {
                console.error('Error ocurred: ', error.message)
                res.status(500).json({ error: error.message})
            }
        })




        api.get('/teams', async (req, res) => {
            try {
                const teams = await logic.retrieveTeams()
                res.json(teams)
            } catch (error : any) {
                console.error('Error ocurred', error.message)
                res.status(500).json({ error: error.message })
            }
        })

        api.get('/teams/:game', async (req, res) => {
            const game = req.params

            try {
                const team = await logic.retrieveTeamByGame(game)
                res.json(team)
            } catch (error: any) {
                console.error('Error ocurred', error.message)
                res.status(500).json({ error: error.message})
            }
        })

        api.patch('/teams/:game', async (req, res) => {
            const { game } = req.params
            const { type, pokemonId } = req.body
        
            try {
                await logic.updateTeam(game, type, pokemonId)
                res.sendStatus(200)
            } catch (error: any) {
                res.status(500).send(error.message)
            }
        })


        api.listen(PORT, () => {
            console.log(`API listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err.message)
    })
