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
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

// import Geocoder from "react-map-gl-geocoder";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import GeoSearch from "@/components/GeoSearch";
import customIcon from "@/lib/customMarker";
const LocationPage = () => {
  const [locations, setLocations] = useState<Array<Feature>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const map = useMap();
  const [coords, setCoords] = useState<{ lat: number; long: number }>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        ...coords,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      console.log(position, coords);
    },null,{
      enableHighAccuracy:true
    });
  }, []);

  const searchLocations = async () => {
    const data = await getLocations(searchTerm);
    setLocations(data.features);
    console.log(locations);
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

        {coords ? (
          <MapContainer
            center={[coords?.lat as number, coords?.long as number]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <GeoSearch />
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker draggable={true} position={[coords?.lat as number, coords?.long as number]} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : null}
      </div>
    </Container>
  );
};

export default LocationPage;
