import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import styleNavBar from "./styleNavBar";
import "./style.css";
import styleBox from "./styleBox";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={styleBox}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: "#f9f9f9" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        aria-labelledby="basic-button"
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={styleNavBar}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#about-me">Sobre mim</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#projects">Projetos</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#services">Serviços</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#my-skills">Minhas skills</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>Fechar menu</MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
