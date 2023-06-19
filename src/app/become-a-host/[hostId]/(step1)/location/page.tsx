"use client";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMapGL, { ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const LocationPage = () => {
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 3.5951956,
    longitude: 98.6722227,
    zoom: 10,
    bearing: 0,
    pitch: 0,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(viewport);
    });
  }, []);
  return (
    <Container>
      <div className="flex min-h-[90vh]   mx-auto flex-col max-w-2xl  gap-y-4 justify-center ">
        <motion.h1
          animate={{
            y: 0, // bring it back to nrmal
            opacity: 1,
            transition: {
              duration: 0.5,
              easings: ["easeInOut"],
            },
          }}
          initial={{
            y: 50, //move out of the site
            opacity: 0,
          }}
          className="text-4xl font-[500] "
        >
          Where's your place located?
        </motion.h1>
        <p className="text-gray-500">
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
        <ReactMapGL
          {...viewport}
          style={{width:"100%",height:"50%"}}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!}
          mapStyle="https://api.mapbox.com/styles/v1/andrian12/clj2n6gos00fg01pbatm51nky.html?title=view&access_token=pk.eyJ1IjoiYW5kcmlhbjEyIiwiYSI6ImNsNHUzZ3NiNzFyaW0zZHBhdGFwMmRtNzIifQ.7RHThfGZAaGz1Gdkr7HOUg&zoomwheel=true&fresh=true#13.57/3.57523/98.6707"
        />
      </div>
    </Container>
  );
};

export default LocationPage;
