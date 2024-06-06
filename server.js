const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/track/:trackingNumber', async (req, res) => {
    const trackingNumber = req.params.trackingNumber;
    // Replace the following URL with the actual DHL API endpoint
    const dhlApiUrl = `https://api.dhl.com/track/shipments?trackingNumber=${trackingNumber}`;

    try {
        const response = await axios.get(dhlApiUrl, {
            headers: {
                'DHL-API-Key': 'App8fVdWU8QWuXWHQ3NXu1YjwXe6IMKA'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
