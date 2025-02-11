import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CountryPopulation,
  Population,
} from "../../interfaces/poppulation.interface";
import { PopulationTable } from "./table/Population";

export const PopulationChart = ({ country }: { country: string }) => {
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
    fetchPopulationData();
  }, [country]);

  return (
    <Box sx={{ backgroundColor: "#121212", padding: 2, minWidth: 600 }}>
      <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
        Population Over Time
      </Typography>

      {populationData.length > 0 ? (
        <PopulationTable populationData={populationData} />
      ) : (
        <Typography sx={{ color: "white" }}>
          No population data available
        </Typography>
      )}
    </Box>
  );
};
