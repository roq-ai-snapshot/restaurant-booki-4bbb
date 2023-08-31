import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  date: any;
  time: any;
  guest_count: number;
  status: string;
  user_id: string;
  table_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  table_id?: string;
}
