import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      mb="30px"
      display="flex"
      flexDirection="column"
      alignItems="center" // Center the content horizontally
    >
      <Typography
        variant="h2"
        color={theme.palette.secondary.main}
        fontWeight="bold"
        textAlign="center" // Center the text
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        textAlign="center" // Center the text
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
