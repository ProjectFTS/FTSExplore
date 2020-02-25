var api = 'http://69.10.35.254:11898';
var donationAddress = "fts1eXwCpKb7hu5rG48PFEDCEVtVmME4jLvb78bWsLj8FSEcxPuwVcGLJMXmojWceUik5fxuqeeCyVEj6LBbsH891tMQgkpfCr";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 100000000;  // enter in the amount of atomic units in 1 coin, eg. 100000000 slices = 1 FTS
var totalSupply =  2500000000000000; // enter the total supply in atomic units
var symbol = 'fts'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "fts": [
	["pool.ftscoin.xyz", "http://pool.ftscoin.xyz:3107"]
 ]
};

var networkStat2 = {
    "fts": [
	[""]
 ]
};
