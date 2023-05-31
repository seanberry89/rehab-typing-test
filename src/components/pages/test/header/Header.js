import React from 'react';
import { Box, Stack } from '@mui/material';
import { fixedTop } from '../../../../theme/CustomTheme';
import Title from './Title';
import Logo from './Logo';


const Header = ({ data }) => {

  return (
    <Box sx={{ ...fixedTop, height: "15vh", backgroundColor: "#fff" }}>
      <Stack sx={{ height: "100%", width: "100%", zIndex: 5, px: 2 }} direction="row" justifyContent={{ xs: "center", md: "space-between" }} alignItems="center">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Logo />
        </Box>
        <Title data={data} />
      </Stack>
    </Box>
  );
};

export default Header;
