export const CONTRACT_ADDRESS = '0xec8a14c5ddc18c63c4da7d46893fa7d39aefd459'; // TODO: Replace with deployed address
export const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_videoHash", "type": "string" },
      { "internalType": "string", "name": "_thumbnailHash", "type": "string" },
      { "internalType": "uint256", "name": "_price", "type": "uint256" },
      { "internalType": "uint256", "name": "_displayTime", "type": "uint256" }
    ],
    "name": "uploadVideo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "videoId", "type": "uint256" }
    ],
    "name": "payToView",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "videoId", "type": "uint256" },
      { "internalType": "address", "name": "user", "type": "address" }
    ],
    "name": "canView",
    "outputs": [
      { "internalType": "bool", "name": "", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getVideos",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" },
      { "internalType": "string[]", "name": "", "type": "string[]" },
      { "internalType": "string[]", "name": "", "type": "string[]" },
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; 