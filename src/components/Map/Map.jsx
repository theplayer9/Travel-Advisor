import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutLineIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./style";
//useStyles is a hook provided by makeStyle from material-ui

const Map = () => {
  const classes = useStyles(); //this means we are calling hook
  const isMobile = useMediaQuery("(min-width:600px)"); //means this isMobile variable will set to false if the screen size is larger than 600px
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDnYjbQkmTY8R7PMrL1IyGWEFJsvCI0AMM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
