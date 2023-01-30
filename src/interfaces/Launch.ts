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

export interface LaunchesListState {
  launches: Launch[] | null;
  loading: boolean;
  error: string | null;
}

export interface LaunchState {
  launch: Launch | null;
  loading: boolean;
  error: string | null;
}

export interface NotificationState {
  message: string;
  isVisible: boolean;
}

export interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean;
  isAuthenticated: boolean;
}
