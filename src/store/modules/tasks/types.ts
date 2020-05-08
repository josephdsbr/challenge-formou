export interface TaskModel {
  users: UserModel[] | null;
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

export enum ClientTypes {
  USERS_FETCH_REQUEST = '[USERS] FETCH REQUEST',
  USERS_FETCH_SUCCESS = '[USERS] FETCH SUCCESS',
  USERS_FETCH_FAILURE = '[USERS] FETCH FAILURE',
}
