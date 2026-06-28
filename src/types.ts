export interface Project {
  id: string;
  name: string;
  price: string;
  location: string;
  roi: string;
  possession: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
