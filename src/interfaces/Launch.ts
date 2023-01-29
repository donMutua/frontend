// export interface Launch {
//   flight_number: number;
//   name: string;
//   date_local: string;
//   flickr_images: string[];
//   details: string;
// }

export interface Launch {
  links: Links;
  rocket: string;
  details: string;
  flight_number: number;
  name: string;
  date_local: string;
  id: string;
}

interface Links {
  flickr: Flickr;
}

interface Flickr {
  small: any[];
  original: any[];
}
