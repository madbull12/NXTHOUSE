interface HouseProps {
    id:string;
    images:string[];
    country:string;
    city:string;
    price:number;
    rating:number;
}
export interface FloorPlan {
    guests:number;
    bedrooms:number;
    beds:number;
    bathrooms:number;
  }

export interface Feature {
    bbox:       number[];
    center:     number[];
    context:    Properties[];
    geometry:   Geometry;
    id:         string;
    place_name: string;
    place_type: string[];
    properties: Properties;
    relevance:  number;
    text:       string;
    type:       string;
}

export interface Properties {
    id?:        string;
    mapbox_id:  string;
    wikidata:   string;
    short_code: string;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}
