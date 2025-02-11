import Typography from "@mui/material/Typography";

interface CountryProps {
  commonName: string;
  flag: string | undefined;
}

export const Country = ({ commonName, flag }: CountryProps) => {
  return (
    <>
      <Typography variant="h4" sx={{ color: "white", marginBottom: 2 }}>
        {commonName}
      </Typography>

      {flag ? (
        <img src={flag} alt={`${commonName} flag`} width={150} height={100} />
      ) : (
        <>
          <Typography sx={{ color: "white" }}>Flag not available</Typography>
        </>
      )}
    </>
  );
};
