import { Fragment } from 'react';
import { Paper, Typography } from '@mui/material';
import { flexCenter } from '../theme/CustomTheme';

const Timer = ({minutes, seconds}) => {

  return (

    <Fragment>
      <Paper sx={{ ...flexCenter, width: "150px", height: "100px", borderRadius: 5 }} elevation={10}>
        <Typography variant="h4">{ minutes < 10 ? "0" + minutes : minutes }:{ seconds < 10 ? "0" + seconds : seconds}</Typography>
      </Paper>
    </Fragment>

  )
};

export default Timer;
