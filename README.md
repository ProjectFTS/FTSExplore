# Mangocoin Blockchain Explorer
Block explorer for FTSCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon FTSCoind. It should be accessible from the Internet. Run FTSCoind with open port as follows:
```bash
./FTSCoind --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.

### Development
Donate: [FTS] fts1eXwCpKb7hu5rG48PFEDCEVtVmME4jLvb78bWsLj8FSEcxPuwVcGLJMXmojWceUik5fxuqeeCyVEj6LBbsH891tMQgkpfCr

### Note
A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
