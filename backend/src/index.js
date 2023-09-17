const express = require('express');
const cors = require('cors');
const axios = require('axios')

const connectDataBase = require('./config/db');
const { serverPort } = require('./secret');
const CryptoData = require('./models/cryptoModel')
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Fetch data from the API and store it in the MongoDB database
async function fetchDataAndStoreInDB() {
  try {
    // delete exiting data
    await CryptoData.deleteMany({});

    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const keys = Object.keys(data).slice(0, 10);
    
    for (const key of keys) {
      const { last, buy, sell, volume, base_unit } = data[key];

      await CryptoData.create({
        last,
        buy,
        sell,
        volume,
        base_unit,
      });
    }
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  }
}

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
  connectDataBase();
  fetchDataAndStoreInDB();
});
