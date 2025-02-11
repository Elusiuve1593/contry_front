interface BorderedCountries {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
  }
  
  export interface CountryBorders {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: BorderedCountries[];
  }