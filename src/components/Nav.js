import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fixedTop } from '../theme/CustomTheme';

import RehabLogo from '../images/rehab-therapy-logo.png';

const Nav = () => {
  return (
    <Box sx={{ ...fixedTop, backgroundColor: "#fff", zIndex: 5 }}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Box component="img" src={RehabLogo} height="40px" width="50px" />
        <Typography variant="h3" fontSize={18} fontWeight={900} color={theme => theme.palette.secondary.main}>Rehab Typing Test</Typography>
      </Stack>
    </Box>
  )
}

export default Nav;
