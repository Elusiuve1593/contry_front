import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { PopulationChart } from "../population/Population";
import { Country } from "./contry/Country";
import { BorderedCountries } from "./bordered-countries/BorderedCountries";
import { color } from "../../common/styles";
import { useCountryDetails } from "../../hooks/useCountryDetails";
import { GoHome } from "../GoHome";

export const CountryInfoPage = () => {
  const { countryCode } = useParams();
  const { borders, flag } = useCountryDetails(countryCode);

  if (!countryCode) {
    return (
      <Typography sx={{ color: color.white }}>
        Country code not provided
      </Typography>
    );
  }

  if (!borders) {
    return (
      <Typography sx={{ color: color.white }}>
        Country not found or error fetching data
      </Typography>
    );
  }

  return (
    <Box sx={{ backgroundColor: color.almostBlack, padding: 2 }}>
      <GoHome />
      <Country commonName={borders.commonName} flag={flag?.data.flag} />

      <Typography sx={{ color: color.white, marginBottom: 2 }}>
        Country Code: {borders.countryCode}
      </Typography>

      {countryCode && <PopulationChart country={borders.commonName} />}

      <Typography variant="h6" sx={{ color: color.white, marginBottom: 2 }}>
        Border Countries:
      </Typography>

      {borders.borders && borders.borders.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: color.darkGray, borderRadius: "8px" }}
        >
          <Table>
            <TableBody>
              <BorderedCountries borders={borders} />
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ color: color.white }}>
          No bordering countries found
        </Typography>
      )}
    </Box>
  );
};
