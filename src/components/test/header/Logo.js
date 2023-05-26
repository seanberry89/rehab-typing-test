import { Fragment } from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';

import RehabLogo from '../../../images/rehab-therapy-logo.png';

const StyledLogo = styled(Box) `

  object-fit: cover;
  width: 65px;
  height: 65px;

`;

const Logo = () => {
  return (
    <Fragment>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <StyledLogo component="img" src={RehabLogo} />
        <Typography color="#3C4551" fontSize={25} fontWeight={700}>Rehab Typing Test</Typography>
      </Stack>
    </Fragment>
  );
};

export default Logo;
