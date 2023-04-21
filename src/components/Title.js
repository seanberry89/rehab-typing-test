import { Fragment } from 'react';
import { Divider, Paper, Stack, styled, Typography } from '@mui/material';


const StyledPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;

  border-radius: 25px;
  padding: 10px 20px;

`;

const Title = ({ data }) => {
  return (
    <Fragment>
      <StyledPaper elevation={10}>
        <Stack sx={{ textAlign: "center" }} divider={<Divider color="black" orientation="vertical" flexItem />} direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Typography>{data.title}:</Typography>
          <Typography>{data.chapter}</Typography>
        </Stack>
      </StyledPaper>
    </Fragment>
  )
}

export default Title;
