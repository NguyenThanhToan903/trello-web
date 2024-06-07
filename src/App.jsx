import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import theme from "./theme";
function App() {
  return (
    <>
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
          hello
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
