import { useState } from 'react';
import './App.css';
import { generateMnemonic, mnemonicToSeedSync } from "bip39";



function App() {
  const [seed, setSeed] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  function MyButton() {
    return (
      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn);
        const seedBuffer= mnemonicToSeedSync(mn);
        setSeed(seedBuffer.toString('hex'));
      }}>
        Create Seed Phrase
        </button>
      
    );
  }

  return (
    <div>
      <h1>PriWallet</h1>
      <MyButton />
      <p>{mnemonic}</p>
    </div>
  );
}

export default App