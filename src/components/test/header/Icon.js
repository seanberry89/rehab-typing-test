import { Fragment } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { flexCenter } from '../../../theme/CustomTheme';

import { GiRing, GiGems, GiForest, GiMagicBroom } from 'react-icons/gi';
import { FaSnowflake } from 'react-icons/fa';


const RingButton = styled(IconButton) `

  background-color: #fff;
  border: 1.5px solid #FBC841;
  cursor: default;
  padding: 7px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #FBC841;
    cursor: default;
  }

`;

const SilmarilsButton = styled(IconButton) `

  background-color: #fff;
  border: 1.5px solid #A8A9AD;
  cursor: default;
  padding: 7px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #A8A9AD;
    cursor: default;
  }

`;

const MountainButton = styled(IconButton) `

  background-color: #fff;
  border: 1.5px solid #136207;
  cursor: default;
  padding: 7px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #136207;
    cursor: default;
  }

`;

const SnowButton = styled(IconButton) `

  background-color: #fff;
  border: 1.5px solid #99C4CE;
  cursor: default;
  padding: 7px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #99C4CE;
    cursor: default;
  }

`;

const WizardButton = styled(IconButton) `

  background-color: #fff;
  border: 1.5px solid #964E02;
  cursor: default;
  padding: 7px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    border: 1.5px solid #964E02;
    cursor: default;
  }

`;

const Icons = ({ data }) => {

  let ring = data.title === "The Lord of the Rings";
  let silmarils = data.title === "The Silmarillion";
  let mountains = data.title === "The Hobbit";
  let snowFlake = data.title === "A Christmas Carol";
  let wizard = data.title === "Harry Potter and the Goblet of Fire" || data.title === "Harry Potter and the Deathly Hollows";

  return (

    <Fragment>
      <Box sx={flexCenter}>

        { ring && ( <RingButton><GiRing sx={{ zIndex: 1 }} color="#FBC841" size={40} /></RingButton> ) }

        { silmarils && ( <SilmarilsButton><GiGems sx={{ zIndex: 1 }} color="#A8A9AD" size={40} /></SilmarilsButton> ) }

        { mountains && ( <MountainButton><GiForest sx={{ zIndex: 1 }} color="#136207" size={40} /></MountainButton> ) }

        { snowFlake && ( <SnowButton><FaSnowflake sx={{ zIndex: 1 }} color="#99C4CE" size={40} /></SnowButton> ) }

        { wizard && ( <WizardButton><GiMagicBroom sx={{ zIndex: 1 }} color="#964E02" size={40} /></WizardButton> ) }

      </Box>
    </Fragment>

  );

};

export default Icons;
