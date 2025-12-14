export interface TShirtConfig {
  color: string;
  name: string;
  number: string;
  textColor: string;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Home' | 'Away' | 'Special' | 'Training';
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum TShirtColor {
  RED = '#C1272D',
  GREEN = '#006233',
  WHITE = '#FFFFFF',
  BLACK = '#1A1A1A',
}

export enum TextColor {
  WHITE = '#FFFFFF',
  GOLD = '#D4AF37',
  BLACK = '#000000',
  RED = '#C1272D',
  GREEN = '#006233',
}