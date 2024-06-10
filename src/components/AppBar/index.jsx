import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";
function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
