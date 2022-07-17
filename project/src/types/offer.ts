export type Offer = {
  id: string;
  images: string[];
  title: string;
  description: string;
  premium: boolean;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  raiting: number;
  bedrooms: number;
  max: number;
  price: number;
  items: string[];
  host: {
    avatar: string;
    name: string;
    pro: boolean;
  },
};
