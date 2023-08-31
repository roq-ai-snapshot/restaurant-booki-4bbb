import { RestaurantInterface } from 'interfaces/restaurant';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  billing_id?: string;

  restaurant?: RestaurantInterface;
  table?: TableInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  restaurant_id?: string;
  billing_id?: string;
}
