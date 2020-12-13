const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51HxiMyCy9jNP5hmgIBq490m3PXOLeUXv30hsEeklYGVaXnwbRmHMYdVpJRT8Fdho7yrRgAdrrR6Uq2JfGdosOZy000kANNURBg')

// API

// App config
const app = express()

// Middleware
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/e-clone-d162b/us-central1/api