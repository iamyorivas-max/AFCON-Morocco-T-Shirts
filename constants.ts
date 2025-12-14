import { NavItem, Product, TShirtColor, TextColor } from './types';

export const APP_NAME = "AFCON MOROCCO FAN STORE";
export const WHATSAPP_NUMBER = "212600000000"; // Placeholder Morocco number

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Customize', path: '/customize' },
  { label: 'About CAN', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Lions of Atlas - Home Kit",
    price: 250,
    image: "https://picsum.photos/400/500?random=1",
    category: "Home",
    isNew: true
  },
  {
    id: 2,
    name: "Sahara Spirit - Away Kit",
    price: 250,
    image: "https://picsum.photos/400/500?random=2",
    category: "Away"
  },
  {
    id: 3,
    name: "Golden Victory Edition",
    price: 300,
    image: "https://picsum.photos/400/500?random=3",
    category: "Special",
    isNew: true
  },
  {
    id: 4,
    name: "Training Top - Elite",
    price: 200,
    image: "https://picsum.photos/400/500?random=4",
    category: "Training"
  }
];

export const AVAILABLE_COLORS = [
  { name: 'Morocco Red', value: TShirtColor.RED },
  { name: 'Atlas Green', value: TShirtColor.GREEN },
  { name: 'Pure White', value: TShirtColor.WHITE },
  { name: 'Night Black', value: TShirtColor.BLACK },
];

export const AVAILABLE_TEXT_COLORS = [
  { name: 'White', value: TextColor.WHITE },
  { name: 'Gold', value: TextColor.GOLD },
  { name: 'Black', value: TextColor.BLACK },
  { name: 'Red', value: TextColor.RED },
  { name: 'Green', value: TextColor.GREEN },
];