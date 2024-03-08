import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box mb="30px" display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h2"
        color={theme.palette.secondary.main}
        fontWeight="bold"
        textAlign="center"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary.main}
        textAlign="center"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
