interface Data {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }
  
  export interface CountryFlag {
    error: boolean;
    msg: string;
    data: Data;
  }