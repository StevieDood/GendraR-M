import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { searchChars, getChars } from "../redux/actions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#bfde42",
  transition: "0.5s",
  "&:hover": {
    backgroundColor: "#bfde42ac",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const RETURN_KEY_CODE = 13;

export default function Searchbar({ handlePageClick }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    dispatch(getChars());
    handleClose();
  };

  const onKeyDown = ({ keyCode }) => {
    if (keyCode !== RETURN_KEY_CODE) {
      return;
    }
    dispatch(searchChars(input));
    setInput("");
    document.getElementById("searchInput").value = "";
    handlePageClick(1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            onClick={handleClick}
          >
            <RotateLeftIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleReset}>Reset Search</MenuItem>
          </Menu>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Link href="https://www.linkedin.com/in/steve-lemus/">
              {" "}
              <LinkedInIcon />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Gendra's Rick & Morty API
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="searchInput"
              sx={{ color: "#000000" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={onKeyDown}
              onChange={(e) => setInput(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
