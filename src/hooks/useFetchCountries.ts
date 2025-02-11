import { useState, useEffect } from "react";
import axios from "axios";
import { CountryInterface } from "../interfaces/countries.interface";
import toast from "react-hot-toast";
import { style } from "../common/styles";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<CountryInterface[]>(
          import.meta.env.VITE_API_URL + "countries"
        );
        setCountries(response.data);
        setIsLoading(false);
      } catch (err) {
        toast("Fetching error", { style });
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return { countries, isLoading };
};
