import { Fragment } from 'react';
import { Box } from '@mui/material';

import { GiRing, GiGems, GiMountainRoad } from 'react-icons/gi';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaSnowflake } from 'react-icons/fa';

const Icons = ({ data }) => {

  let ring = data.title === "The Lord of the Rings";
  let silmarils = data.title === "The Silmarillion";
  let mountains = data.title === "The Hobbit";
  let snowFlake = data.title === "A Christmas Carol";
  let lightning = data.title === "Harry Potter and the Goblet of Fire" || data.title === "Harry Potter and the Deathly Hollows";

  return (

    <Fragment>
      <Box sx={{ px: 1, pt: 1 }}>

        { ring && ( <GiRing color="#FBC841" size={40} /> ) }

        { silmarils && ( <GiGems color="#A8A9AD" size={40} /> ) }

        { mountains && ( <GiMountainRoad color="#136207" size={40} /> ) }

        { snowFlake && ( <FaSnowflake color="#99c4ce" size={40} /> ) }

        { lightning && ( <BsFillLightningFill color="#FDD023" size={40} /> ) }

      </Box>
    </Fragment>

  );

};

export default Icons;
