CryptoSync
============================================

This project implements a background job that fetches cryptocurrency data for Bitcoin, Matic, and Ethereum from the CoinGecko API and stores it in a database every two hours. Additionally, it exposes two APIs:

*   /stats to retrieve the latest data for a specified cryptocurrency.
    
*   /deviation to return the standard deviation of the cryptocurrency prices based on the stored records.
    

Features
--------

*   Fetches cryptocurrency data (price in USD, market cap in USD, 24-hour change) for Bitcoin, Matic, and Ethereum every two hours using CoinGecko API.
    
*   Stores the fetched data in a database.
    
*   Provides an API /stats to retrieve the latest data for a specific cryptocurrency.
    
*   Provides an API /deviation to calculate and return the standard deviation of the price for the last 100 records of the requested cryptocurrency.
