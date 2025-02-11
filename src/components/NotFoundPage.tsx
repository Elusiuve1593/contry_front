import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { color } from "../common/styles";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        color: color.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        <Typography
          variant="h2"
          sx={{ color: color.red, display: "inline-block" }}
        >
          404
        </Typography>{" "}
        - Page not found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist...
      </Typography>
    </Box>
  );
};
