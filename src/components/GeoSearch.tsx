import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react'
import L from 'leaflet'
import customIcon from '@/lib/customMarker';
const GeoSearch = () => {
  const provider = new MapBoxProvider({
    params: {
      access_token: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!,
    },
  });


  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    draggable:true,
    marker: new L.Icon.Default(),
    autoClose:true,
  });


  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => {
      map.removeControl(searchControl);
    }
  }, []);

  return <>
  
  </>;
};

export default GeoSearch