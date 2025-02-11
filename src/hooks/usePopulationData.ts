import { useState, useEffect } from "react";
import axios from "axios";
import {
  CountryPopulation,
  Population,
} from "../interfaces/poppulation.interface";

export const usePopulationData = (country: string) => {
  const [populationData, setPopulationData] = useState<Population[]>([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await axios.post<CountryPopulation>(
          import.meta.env.VITE_API_URL + "countries/single-country-population",
          {
            country: country,
          }
        );

        if (response.data) {
          const formattedData = response.data.data.populationCounts.map(
            (item: { year: number; value: number }) => ({
              year: item.year,
              value: item.value,
            })
          );
          setPopulationData(formattedData);
        }
      } catch (err) {
        console.error("Error fetching population data", err);
      }
    };

    if (country) {
      fetchPopulationData();
    }
  }, [country]);

  return { populationData };
};
