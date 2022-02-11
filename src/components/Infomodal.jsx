import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  top: 25,
  left: 25,
  margin: "auto",
  transform: "translate(-25, -25)",
  bgcolor: "background.paper",
  border: "4px solid #15e9e9",
  boxShadow: 24,
  p: 4,
};

export default function Infomodal({
  open,
  id,
  name,
  gender,
  origin,
  location,
  handleClose,
}) {
  return (
    <div>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Subject: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Id: {id} <br />
            Gender: {gender} <br />
            Origin: {origin.name} <br />
            Location:{location.name}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
