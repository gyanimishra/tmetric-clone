import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularUnderLoad() {
  return (
    <CircularProgress
      disableShrink
      style={{ margin: "30vh 30vw", width: "65px" }}
    />
  );
}
