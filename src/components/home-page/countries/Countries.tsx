import TableCell from "@mui/material/TableCell";
import { CountryInterface } from "../../../interfaces/countries.interface";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

interface CountiresProps {
  countries: CountryInterface[];
}

export const Countires = ({ countries }: CountiresProps) => {
  return (
    <>
      {countries.map((country) => (
        <TableRow key={country.countryCode}>
          <TableCell sx={{ color: "white", fontSize: 16 }}>
            {country.countryCode}
          </TableCell>
          <TableCell sx={{ color: "white", fontSize: 16 }}>
            <Link
              to={`/country/${country.countryCode}`}
              style={{ color: "#00bcd4", textDecoration: "none" }}
            >
              {country.name}
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
