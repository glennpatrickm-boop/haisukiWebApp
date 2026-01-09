import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment,
  Chip,
  Drawer,
  Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    { label: "Pokemon", icon: <CatchingPokemonIcon /> },
    { label: "One Piece", icon: <AutoAwesomeIcon /> },
    { label: "NBA", icon: <SportsEsportsIcon /> },
    
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1400px",
            width: "100%",
            mx: "auto",
            gap: 2,
          }}
        >
          {/* MOBILE MENU */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Box display="flex" alignItems="center" minWidth={140}>
            {/* Replace src with real logo */}
            <Box
              component="img"
              src="/logo.png"
              alt="Haius Cards"
              sx={{ height: 36, mr: 1 }}
            />
            <Typography fontWeight={800}>KYO CARDS</Typography>
          </Box>

          {/* SEARCH */}
          <Box flexGrow={1} maxWidth={720} display={{ xs: "none", md: "block" }}>
            <TextField
              fullWidth
              size="small"
              placeholder='Try "Pikachu SVPEN85"'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TextField
                      select
                      defaultValue="All"
                      variant="standard"
                      sx={{
                        minWidth: 60,
                        "& .MuiInput-root:before": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      {categories.map((cat) => (
                        <MenuItem key={cat.label} value={cat.label}>
                          {cat.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* ACTION BUTTONS */}
          <Box display="flex" alignItems="center" gap={1}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 3,
                textTransform: "none",
                display: { xs: "none", md: "flex" },
              }}
            > 
              Sell Now
            </Button>

            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>

            <Button
              variant="outlined"
              sx={{ textTransform: "none", display: { xs: "none", md: "flex" } }}
            >
              Sign Up
            </Button>

            <Button
              variant="outlined"
              sx={{ textTransform: "none", display: { xs: "none", md: "flex" } }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* CATEGORY BAR */}
      <Box
        sx={{
          background: "linear-gradient(90deg,#a6b7f7,#9ad0f5)",
          py: 1,
        }}
      >
        <Box
          maxWidth="1400px"
          mx="auto"
          display="flex"
          justifyContent="center"
          gap={1}
          flexWrap="wrap"
        >
          {categories.map((cat) => (
            <Chip
              key={cat.label}
              icon={cat.icon}
              label={cat.label}
              clickable
              sx={{
                bgcolor: "#fff",
                px: 1,
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box width={260} p={2}>
          <Typography fontWeight={700} mb={2}>
            Menu
          </Typography>

          <Stack spacing={1}>
            {categories.map((cat) => (
              <Button
                key={cat.label}
                startIcon={cat.icon}
                sx={{ justifyContent: "flex-start" }}
              >
                {cat.label}
              </Button>
            ))}

            <Button variant="outlined">Sell Now</Button>
            <Button variant="outlined">Sign Up</Button>
            <Button variant="outlined">Login</Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
