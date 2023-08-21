const express = require('express')
const { translate } = require('./service')
const { summary } = require('./service')
const { sentiment } = require('./service')

const app = express()

app.use(express.json())


app.get('/translated', async (req, res) => {
    try {
        const data2 = await translate(req, res)

        return res.json({
            json: data2
        });

    } catch (error) {
        res.send(error.message)
    }
})

app.get('/summariz', async (req, res) => {
    try {
        const data3 = await summary(req, res)

        return res.json({
            json: data3
        });

    } catch (error) {
        res.send(error.message)
    }
})

app.get('/sentimen', async (req, res) => {
    try {
        const data4 = await sentiment(req, res)

        return res.json({
            json: data4
        });

    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3000)