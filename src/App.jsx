import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
    // if (selectRef.current) {
    //   selectRef.current.blur(); // Bỏ focus sau khi chọn
    // }
    // setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Age"
        // variant="outlined" // or "filled" or "standard"
        // disableUnderline // Thêm dòng này
        // InputProps={{ disableUnderline: true }} // Thêm dòng này
        onChange={handleChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
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
// import theme from "./theme";
function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: (theme) => theme.trelloCustom.appBarHeight,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ModeToggle />
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.dark",
            width: "100%",
            height: (theme) => theme.trelloCustom.boardBarHeight,
            display: "flex",
            alignItems: "center",
          }}
        >
          Board Bar
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: (theme) =>
              `calc(100vh - (${theme.trelloCustom.appBarHeight} + ${theme.trelloCustom.boardBarHeight}) )`,
            display: "flex",
            alignItems: "center",
          }}
        >
          Board Content
        </Box>
      </Container>
    </>
  );
}

export default App;
