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
import { CountryInterface } from "../../interfaces/countries.interface";
import { Countires } from "./countries/Countries";

interface HomePageProps {
  countries: CountryInterface[];
}

export const HomePage = ({ countries }: HomePageProps) => {
  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", padding: 2 }}>
      <Typography variant="h4" sx={{ color: "white", marginBottom: 2 }}>
        Country List
      </Typography>
      {countries.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
                  Country Code
                </TableCell>
                <TableCell sx={{ color: "#f5f5f5", fontWeight: "bold" }}>
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
        <Typography sx={{ color: "white", marginTop: 2 }}>
          No countries available
        </Typography>
      )}
    </Box>
  );
};
