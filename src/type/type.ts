export interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

interface host {
  name: string;
  picture: string;
}
