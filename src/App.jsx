import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh" }}>
      <Header />


      {/* PAGE CONTENT */}
      <Box
        component="main"
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: 2,
          py: 4,
        }}
      >

        
        {/* Your homepage content goes here */}
      </Box>
    </Box>
  );
}

export default App;
