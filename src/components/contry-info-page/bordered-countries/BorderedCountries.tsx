import TableRow from "@mui/material/TableRow";
import { CountryBorders } from "../../../interfaces/country-borders.interface";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { color } from "../../../common/styles/styles";

interface BorderedCountriesProps {
  borders: CountryBorders | null;
}

export const BorderedCountries = (borders: BorderedCountriesProps) => {
  return (
    <>
      {borders &&
        borders.borders?.borders.map((border) => (
          <TableRow key={border.countryCode}>
            <TableCell sx={{ color: color.white, fontSize: 16 }}>
              <Link
                to={`/country/${border.countryCode}`}
                style={{ color: color.cyan, textDecoration: "none" }}
              >
                {border.commonName}
              </Link>
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};
