// Initialize Web3 with the provider from the Compass Wallet browser extension
const web3 = new Web3(window.compassWallet);

// Get the user's account address
const accounts = await web3.eth.getAccounts();
const account = accounts[0];

// Perform actions like signing transactions, getting account information, etc.