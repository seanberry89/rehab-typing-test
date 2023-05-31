import { useEffect } from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import { flexCenter } from '../../theme/CustomTheme';
import { SyncLoader } from 'react-spinners';

import useRehabContext from '../../hooks/useRehabContext';


const BlueBackground = styled(Box) `
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: #2F7ABF;
  z-index: 1;
`;


const Loading = () => {

  const context = useRehabContext();
  const { setLoading } = context;
  

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

    }, 3000);

    // eslint-disable-next-line
  }, []);


  return (

    <Box sx={{ ...flexCenter, position: "relative", height: "100vh" }}>
      <BlueBackground></BlueBackground>
      <Stack sx={{ position: "absolute", width: "450px", height: "450px", pt: 8, zIndex: 2 }} direction="column" justifyContent="center" alignItems="center" spacing={10}>
        <SyncLoader loading color="#fff" />
        <Typography color="#fff" variant="h4">Syncing Typing Test</Typography>
      </Stack>
    </Box>

  );
};

export default Loading;
