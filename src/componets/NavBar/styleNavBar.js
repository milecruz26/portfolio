const styleNavBar = {
  elevation: 0,
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 1.5,
  "& .MuiPaper-root": {
    backgroundColor: "transparent",
    width: "32rem",
    height: "27rem",
    // backdropFilter: "blur(8px)",
  },

  // "& .MuiList-root": {
  //   // backgroundColor: "transparent",
  //   width: "32rem",
  //   height: "27rem",
  //   // backdropFilter: "blur(8px)",
  // },

  "& .MuiButtonBase-root": {
    color: "#f9f9f9",
    // color: "#000000",
    fontFamily: "DM Sans",
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  // "&::before": {
  //   content: '""',
  //   display: "block",
  //   position: "absolute",
  //   top: 0,
  //   right: 14,
  //   width: 10,
  //   height: 10,
  //   bgcolor: "background.paper",
  //   transform: "translateY(-50%) rotate(45deg)",
  //   zIndex: 0,
  // },
};

export default styleNavBar;
