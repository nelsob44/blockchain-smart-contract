require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/H1LYA3rLDRTzAk8NCF7vzA3zlMfInq7U",
      accounts: [
        "8fadc138d6e95ff3d1a361d2beda537a5eb156c621f3f397a33d08633bb8555b",
      ],
    },
  },
};
