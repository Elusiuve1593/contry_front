import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { color, font } from "../../common/styles";
import { CountryInterface } from "../../interfaces/countries.interface";
import { Countires } from "./countries/Countries";

interface HomePageProps {
  countries: CountryInterface[];
}

export const HomePage = ({ countries }: HomePageProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color.almostBlack,
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ color: color.white, marginBottom: 2 }}>
        Country List
      </Typography>
      {countries.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: color.darkGray,
            borderRadius: "8px",
            boxShadow: `0 4px 8px ${color.semiTransparentBlack}`,
          }}
        >
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: color.lightGray, fontWeight: font.bold }}
                >
                  Country Code
                </TableCell>
                <TableCell
                  sx={{ color: color.lightGray, fontWeight: font.bold }}
                >
                  Country Name
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Countires countries={countries} />
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ color: color.white, marginTop: 2 }}>
          No countries available
        </Typography>
      )}
    </Box>
  );
};
