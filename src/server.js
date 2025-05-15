const express = require('express'); // Use CommonJS syntax consistently
const bodyParser = require('body-parser');
require('dotenv').config();
const { generateContent } = require('./apiIntegration');

const app = express();
app.use(bodyParser.json());

app.post('/api/generate', async (req, res) => {
    const { type, data } = req.body;
    try {
        const result = await generateContent(type, data);
        res.json(result);
    } catch (error) {
        res.status(500).send('Error generating content');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));