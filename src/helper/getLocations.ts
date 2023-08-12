import axios from "axios"

const getLocations =  async(str:string) => {
    try {
        const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${str}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}&limit=10`);
        return res.data ;
    } catch(err) {
        console.log(err)
    }
}

export default getLocations