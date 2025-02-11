import { useState, useEffect } from "react";
import axios from "axios";
import { CountryBorders } from "../interfaces/country-borders.interface";
import { CountryFlag } from "../interfaces/country-flag.interface";

export const useCountryDetails = (countryCode: string | undefined) => {
  const [borders, setBorders] = useState<CountryBorders | null>(null);
  const [flag, setFlag] = useState<CountryFlag | null>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      if (!countryCode) return;
      setBorders(null);
      setFlag(null);

      try {
        const bordersResponse = await axios.get<CountryBorders>(
          import.meta.env.VITE_API_URL + "countries/borders/" + countryCode
        );
        setBorders(bordersResponse.data);

        const flagResponse = await axios.post<CountryFlag>(
          import.meta.env.VITE_API_URL + "countries/single-country-flag",
          { iso2: countryCode }
        );
        if (!flagResponse.data.error) {
          setFlag(flagResponse.data);
        } else {
          throw new Error("Error fetching country flag");
        }
      } catch (err: any) {
        console.error("Fetching error", err);
      } 
    };

    fetchCountryDetails();
  }, [countryCode]);

  return { borders, flag };
};
