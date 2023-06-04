import { Fragment } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

import { GiRing, GiGems, GiForest, GiMagicBroom, GiDervishSwords } from 'react-icons/gi';
import { FaSnowflake } from 'react-icons/fa';


const Title = ({ data }) => {

  let mountains = data.title === "The Hobbit";
  let snowFlake = data.title === "A Christmas Carol";
  let wizard = data.title === "Harry Potter and the Goblet of Fire";
  let drow = data.title === "Homeland";

  let seven = data.chapter === "The Seven Potters";
  let brothers = data.chapter === "The Tale of the Three Brothers";
  let shadow = data.chapter === "The Shadow of the Past";
  let party = data.chapter === "A Long-Expected Party";
  let bree = data.chapter === "At the Sign of the Prancing Pony";
  let glaurung = data.chapter === "Of the Return of the Noldor";
  let luthien = data.chapter === "Of Beren and Luthien";
  let fingolfin = data.chapter === "Of the Ruin of Beleriand and the Fall of Fingolfin";


  return (
    <Fragment>
      { bree && (
        <Paper sx={{ width: "375px", border: "2px solid #FBC841", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiRing color="#FBC841" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#FBC841", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px", lg: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #FBC841", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { shadow && (
        <Paper sx={{ width: "300px", border: "2px solid #FBC841", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiRing color="#FBC841" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#FBC841", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px", lg: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #FBC841", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { party && (
        <Paper sx={{ width: "300px", border: "2px solid #FBC841", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiRing color="#FBC841" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#FBC841", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #FBC841", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { glaurung && (
          <Paper sx={{ width: "325px", border: "2px solid #A8A9AD", borderRadius: 2 }}>
            <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
              <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiGems color="#A8A9AD" size={35} /></Box>
              <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
                <Box sx={{ backgroundColor: "#A8A9AD", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
                <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #A8A9AD", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
              </Stack>
            </Stack>
        </Paper>
      )}

      { luthien && (
        <Paper sx={{ width: "300px", border: "2px solid #A8A9AD", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiGems color="#A8A9AD" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#A8A9AD", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #A8A9AD", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px", lg: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { fingolfin && (
        <Paper sx={{ width: "500px", border: "2px solid #A8A9AD", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiGems color="#A8A9AD" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#A8A9AD", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #A8A9AD", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px", lg: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { mountains && (
          <Paper sx={{ width: "300px", border: "2px solid #136207", borderRadius: 2 }}>
            <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
              <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiForest color="#136207" size={35} /></Box>
              <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
                <Box sx={{ backgroundColor: "#136207", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
                <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #136207", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
              </Stack>
            </Stack>
          </Paper>
      )}

      { snowFlake && (
        <Paper sx={{ width: "300px", border: "2px solid #99C4CE", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><FaSnowflake color="#99C4CE" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#99C4CE", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #99C4CE", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { wizard && (
        <Paper sx={{ width: { xs: "425px", md: "460px" }, border: "2px solid #964E02", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiMagicBroom color="#964E02" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#964E02", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #964E02", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { brothers && (
        <Paper sx={{ width: { xs: "450px", md: "490px" }, border: "2px solid #964E02", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiMagicBroom color="#964E02" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#964E02", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "15px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #964E02", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { seven && (
        <Paper sx={{ width: { xs: "450px", md: "475px" }, border: "2px solid #964E02", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiMagicBroom color="#964E02" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#964E02", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #964E02", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

      { drow && (
        <Paper sx={{ width: "325px", border: "2px solid #967bb6", borderRadius: 2 }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center">
            <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}><GiDervishSwords color="#967bb6" size={35} /></Box>
            <Stack sx={{ textAlign: "center", width: "80%" }} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{ backgroundColor: "#967bb6", width: "100%" }}><Typography color="#FFF" fontWeight={700} fontSize={{ xs: "16px", md: "20px" }}>{data.title}</Typography></Box>
              <Box sx={{ backgroundColor: "fff", borderLeft: "2px solid #967bb6", width: "100%" }}><Typography fontWeight={500} fontSize={{ xs: "16px", md: "17px" }}>{data.chapter}</Typography></Box>
            </Stack>
          </Stack>
        </Paper>
      )}

    </Fragment>
  )
}

export default Title;
