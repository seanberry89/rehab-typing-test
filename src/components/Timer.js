import { Fragment } from 'react';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import { flexCenter } from '../theme/CustomTheme';

const Timer = ({minutes, seconds}) => {

  return (

    <Fragment>
      <Paper sx={{ ...flexCenter, width: "150px", height: "100px", border: "3px solid black", borderRadius: 5 }} elevation={10}>
        <Stack divider={<Divider color="black" orientation="horizontal" flexItem />} direction="column" justifyContent="center" alignItems="center">
          <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
            <Typography color="black" fontSize="27px" fontWeight={700}>{ minutes < 10 ? "0" + minutes : minutes }</Typography>
            <Typography color="black" fontSize="14px" fontWeight={500}>minutes</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
          <Typography color="black" fontSize="27px" fontWeight={700}>{ seconds < 10 ? "0" + seconds : seconds}</Typography>
          <Typography color="black" fontSize="14px" fontWeight={500}>seconds</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Fragment>

  )
};

export default Timer;
