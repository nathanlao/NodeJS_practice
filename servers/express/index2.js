/**
 * The index2.js is the demo to create a server to read/connect to another server, 
 * this is to simulate making an API call (It is the server sending an API call)
 */
const express = require('express')
const app = express()

// https module embedded in nodejs (no npm install required)
// https -> data stream
const https = require('https')

// Popular package for making HTTP request
const axios = require('axios')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 1. 1st way to make an API call (external API service) from a server
// Endpoint for /https_api_get
app.get('/https_api_get', (req, res) => {
    // call an API
    https.get('https://worldtimeapi.org/api/timezone/America/Vancouver', (response) => {
        // Gather stream of data into chunks
        let data = ``
        response.on('data', (chunk) => {
            data += chunk
        })

        // Send back the res(data) when data thats coming in has ended
        response.on('end', () => {
            console.log(JSON.parse(data))
            // process the data (send back the data)
            res.json(JSON.parse(data))
        })
    })
})

// 2. 2nd way to make an API call (using package: axios)
app.get('/axios_get', async (req, res) => {
    const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Vancouver')
    res.json(response.data)
})


app.listen(8080, () =>{
    console.log(`Listening to port ${8080}`)
})