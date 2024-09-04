import { useState } from "react";
import trelloIcon from "@iconify-icons/mdi/trello";
import { Icon } from "@iconify/react";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ModeSelect from "~/components/ModeSelect";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Templates from "./Menus/Templates";
import Workspaces from "./Menus/Workspaces";
import Profiles from "./Menus/Profiles";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
function AppBar() {
  // const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      px={2}
      pt={0.5}
      sx={{
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Icon
            icon={trelloIcon}
            style={{
              fontSize: "24px",
              color: "white",
            }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
        </Box>
        <Button
          sx={{
            color: "white",
            border: "none ",
            "&:hover": {
              border: "none",
            },
          }}
          variant="outlined"
          endIcon={<LibraryAddIcon />}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  display: searchValue ? "inherit" : "none",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            "& label": { color: "white" },
            "& input": { color: "while" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
