import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryBorders } from "../../interfaces/country-borders.interface";
import { CountryFlag } from "../../interfaces/country-flag.interface";
import { PopulationChart } from "../population/Population";
import { Country } from "./contry/Country";
import { BorderedCountries } from "./bordered-countries/BorderedCountries";

export const CountryInfoPage = () => {
  const { countryCode } = useParams();
  const [borders, setBorders] = useState<CountryBorders | null>(null);
  const [flag, setFlag] = useState<CountryFlag | null>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
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
          console.error("Error fetching country flag");
        }
      } catch (err) {
        console.error("Fetching error", err);
      }
    };
    if (countryCode) {
      setFlag(null);
      setBorders(null);
      fetchCountryDetails();
    }
  }, [countryCode]);

  if (!borders) {
    return <Typography>Country not found</Typography>;
  }
  return (
    <Box sx={{ backgroundColor: "#121212", padding: 2 }}>
      <Country commonName={borders.commonName} flag={flag?.data.flag} />

      <Typography sx={{ color: "white", marginBottom: 2 }}>
        Country Code: {borders.countryCode}
      </Typography>

      {countryCode && <PopulationChart country={borders.commonName} />}

      <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
        Border Countries:
      </Typography>

      {borders.borders && borders.borders.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "#1e1e1e", borderRadius: "8px" }}
        >
          <Table>
            <TableBody>
              <BorderedCountries borders={borders} />
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ color: "white" }}>
          No bordering countries found
        </Typography>
      )}
    </Box>
  );
};
