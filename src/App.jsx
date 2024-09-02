import { useState } from 'react';
import './App.css';
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { SolanaWallet } from './SolanaWallet';
import {EthWallet} from './EthWallet';


function App() {
  const [seed, setSeed] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  function MyButton() {
    return (
      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn);
        const seedBuffer= mnemonicToSeedSync(mn);
        setSeed(seedBuffer.toString());
      }}>
        Generate Mnemonic
        </button>
      
    );
  }

  return (
    <div>
      <h1>PriWallet</h1>
      <MyButton />
      <p>{mnemonic}</p>
      {seed && <SolanaWallet seed={seed} />}
      {seed && <EthWallet seed={seed} />}
    </div>
    
    
  );
}

export default App