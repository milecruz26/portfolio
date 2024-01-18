const styleNavBar = {
  elevation: 0,
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiPaper-root": {
    backgroundColor: "#0f0f0fff",
    width: "100%",
    height: "100%",
  },

  "& .MuiButtonBase-root": {
    color: "#f9f9f9",
    // color: "#000000",
    fontFamily: "DM Sans",
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  "& .MuiMenuItem-root a": {
    textDecoration: "none",
    color: "#f9f9f9",
  },
};

export default styleNavBar;
