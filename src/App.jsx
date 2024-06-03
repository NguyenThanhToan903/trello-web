import { Button, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import red from "@mui/material/colors/red";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  console.log("prefers-color-scheme", prefersDarkMode);
  console.log("prefers-color-scheme", prefersLightMode);
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />

      <hr />
      <div>Nguyen Thanh Toan</div>
      <Typography variant="h1" component="h1" color="text.secondary">
        Hello World
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon sx={{ color: red[100] }} />
    </>
  );
}

export default App;
