import { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';


const Timer = ({ minutes, seconds }) => {

  return (

    <Fragment>
      <Stack sx={{ textAlign: "center", width: "100%" }} direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 3, md: 3 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Typography color="#fff" fontSize="16px" fontWeight={500}>minutes</Typography>
          <Typography color="#fff" fontSize="80px" fontWeight={700}>{ minutes < 10 ? "0" + minutes : minutes }</Typography>
        </Stack>
        <Typography sx={{ pb: 1 }} color="#fff" fontSize="50px" fontWeight={500}>|</Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Typography color="#fff" fontSize="80px" fontWeight={700}>{ seconds < 10 ? "0" + seconds : seconds }</Typography>
          <Typography color="#fff" fontSize="16px" fontWeight={500}>seconds</Typography>
        </Stack>
      </Stack>
    </Fragment>

  );

};

export default Timer;
