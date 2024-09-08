import { Container, Grid2, Box, Typography } from '@mui/material'; // Changed Grid2 to Grid for compatibility

function MnemonicDisplay({ mnemonic }) {
  if (!mnemonic) {
    return null; // Render nothing if the mnemonic is empty
  }

  // Split the mnemonic into an array of words
  const words = mnemonic.split(' ');

  return (
    <div mt='40'>
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid2 container spacing={2}>
        {words.map((word, index) => (
          <Grid2 size={3} key={index}> {/* Changed size to item xs for correct grid usage */}
            <Box
              sx={{
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '16px',
                backgroundColor: '#333333', // Add some background color for clarity
                color: 'white', // Set text color to white for visibility
              }}
            >
              <Typography>{word}</Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
    </div>
  );
}

export default MnemonicDisplay;
