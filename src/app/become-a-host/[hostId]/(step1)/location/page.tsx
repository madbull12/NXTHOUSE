"use client";
import Container from "@/components/Container";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import DeckGL, { GeoJsonLayer } from "deck.gl";
// import ReactMapGL, { GeolocateControl, Marker, Popup, ViewState } from "react-map-gl";
// import { Button } from "@/components/ui/button";
import getLocations from "@/helper/getLocations";
import { Feature } from "@/types/types";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

// import Geocoder from "react-map-gl-geocoder";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import GeoSearch from "@/components/GeoSearch";
import customIcon from "@/lib/customMarker";
import HostFooter from "@/components/HostFooter";
import { useHousingStore } from "@/lib/zustand";
import { Button } from "@/components/ui/button";

const LocationMarker = () => {
  const {
    housing: { location },
    setLocation,
  } = useHousingStore();
  const map = useMapEvents({
    click: (e) => {
      map.locate();
      setLocation(e.latlng.lat,e.latlng.lng)
 
    }
  });
  
  return null;
};

const LocationPage = () => {
  // const map = useMap();
  const {
    housing: { location },
    setLocation,
  } = useHousingStore();
  console.log(location)
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       setLocation(position?.coords.latitude, position?.coords.longitude);
  //     },
  //     null,
  //     {
  //       enableHighAccuracy: true,
  //     }
  //   );
  // }, []);

  // useEffect(()=>{
  //   setLocation(

  //   )
  // },[coords])

  const handleChooseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation(position?.coords.latitude, position?.coords.longitude);
      },
      null,
      {
        enableHighAccuracy: true,
      }
    );
  };

  return (
    <Container>
      <div className="flex min-h-screen py-16 mx-auto flex-col max-w-2xl  gap-y-4 justify-center ">
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
        {/* <div className="flex items-center gap-x-2">
          <Input
            type="search"
            placeholder="Search location..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="button" onClick={searchLocations}>
            Search
          </Button>
        </div> */}

        {/* {viewport.latitude && viewport.longitude && (
          <>
            <ReactMapGL
              {...viewport}
              style={{ width: "100%", height: "400px" }}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              onMove={(e: { viewState: ViewState }) => setViewport(e.viewState)}
            ></ReactMapGL>
          </>
        )} */}

        {location ? (
          <MapContainer
            center={[location?.lat as number, location?.long as number]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <LocationMarker />
            <GeoSearch />
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              draggable={true}
              position={[location?.lat as number, location?.long as number]}
              icon={customIcon}
            ></Marker>
          </MapContainer>
        ) : (
          <Button onClick={handleChooseCurrentLocation}>
            Use your current location
          </Button>
        )}
      </div>
      <HostFooter disableNext={location === null} />
    </Container>
  );
};

export default LocationPage;
