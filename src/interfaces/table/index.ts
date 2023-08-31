import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  status: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  billing_id?: string;
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    menu?: number;
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  restaurant_id?: string;
  billing_id?: string;
}
