export interface IStore{

  id: number;
  label: string;
  logo: string;
  localization: {
    lat: number,
    lng: number
  },
  address: {
    street: string,
    zipcode: string,
    city: string,
    state: string,
  }

}