import { FaHome } from "react-icons/fa"; // Іконка будиночка з react-icons
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { color } from "../common/styles";

export const GoHome = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <Box
      onClick={handleRedirect}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "35px",
        height: "35px",
        backgroundColor: color.cyan,
        borderRadius: "50%",
        cursor: "pointer",
        margin: 2,
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: color.darkCyan,
        },
      }}
    >
      <FaHome size={23} color="white" />
    </Box>
  );
};
