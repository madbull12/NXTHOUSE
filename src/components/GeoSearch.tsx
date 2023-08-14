import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react'
const GeoSearch = () => {
  const provider = new MapBoxProvider({
    params: {
      access_token: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!,
    },
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });


  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    // return () => map.removeControl(searchControl);
  }, []);

  return <>
  
  </>;
};

export default GeoSearch