import { Box, Typography } from "@mui/material";
import { color } from "../../common/styles";
import { usePopulationData } from "../../hooks/usePopulationData";
import { PopulationTable } from "./table/PopulationTable";

export const PopulationChart = ({ country }: { country: string }) => {
  const { populationData } = usePopulationData(country);

  return (
    <Box sx={{ backgroundColor: color.almostBlack, padding: 2, minWidth: 600 }}>
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
