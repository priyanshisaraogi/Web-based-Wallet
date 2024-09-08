import { useState } from 'react';
import { Button, Grid2, Box, Typography } from '@mui/material';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import MnemonicDisplay from '../components/MnemonicDisplay';
import { SolanaWallet } from '../components/SolanaWallet';
import { EthWallet } from '../components/EthWallet';

function HomePage() {
  const [seed, setSeed] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  const handleGenerateMnemonic = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
    const seedBuffer = mnemonicToSeedSync(mn);
    setSeed(seedBuffer.toString());
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // Full height
        padding: '40px 20px', // Padding around the page
        
        marginTop:'200px'
      }}
    >
      <Grid2 container spacing={2} alignItems="center">
        <Grid2 >
          <Button variant="outlined" color="primary" onClick={handleGenerateMnemonic}>
            Generate Mnemonic
          </Button>
        </Grid2>
        <Grid2>
        <Box
            sx={{
              border: '1px solid white', // White border
              borderRadius: '8px', // Rounded corners
              width: '600px',               // You can adjust width (e.g., 400px or 100%)
              height: '250px',             // Fixed height (adjust as needed)
              padding: '16px',
            }}
          >
          <MnemonicDisplay mnemonic={mnemonic} />
          </Box>
        </Grid2>

        {seed && (
          <>
            <Grid2 >
              <SolanaWallet seed={seed} />
            </Grid2>
            <Grid2 >
              <EthWallet seed={seed} />
            </Grid2>
          </>
        )}
      </Grid2>
    </Box>
  );
}

export default HomePage;
