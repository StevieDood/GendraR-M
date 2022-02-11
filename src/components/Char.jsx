import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Infomodal from "./Infomodal";

export default function Char({
  image,
  name,
  status,
  species,
  id,
  gender,
  origin,
  location,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345, margin: "3rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="Unknow Char"
        />
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ margin: "1rem", flexWrap: "wrap" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "1rem" }}
          >
            Status: {status} <br /> Species: {species}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Information
        </Button>
      </CardActions>

      {open && (
        <Infomodal
          handleClose={handleClose}
          open={open}
          id={id}
          name={name}
          gender={gender}
          origin={origin}
          location={location}
        />
      )}
    </Card>
  );
}
