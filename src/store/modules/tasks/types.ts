export interface TaskModel {
  users: UserModel[];
  items: TasksItemModel[];
  loading?: boolean;
  error?: Error;
}

export interface UserModel {
  id: number;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}

export interface AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocalizationModel;
}

export interface GeoLocalizationModel {
  lat: string;
  lng: string;
}

export interface CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface TasksItemModel {
  id: number;
  user: UserModel;
  title: string;
  completed: boolean;
}

export interface TasksResponseModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum ClientTypes {
  USERS_FETCH_REQUEST = '[USERS] FETCH REQUEST',
  USERS_FETCH_SUCCESS = '[USERS] FETCH SUCCESS',
  USERS_FETCH_FAILURE = '[USERS] FETCH FAILURE',
  TASKS_FETCH_REQUEST = '[TASKS] FETCH REQUEST',
  TASKS_FETCH_SUCCESS = '[TASKS] FETCH SUCCESS',
  TASKS_FETCH_FAILURE = '[TASKS] FETCH FAILURE'
}
