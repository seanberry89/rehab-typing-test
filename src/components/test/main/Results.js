import { Fragment, useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from '../../../data/Other';

import CloseIcon from '@mui/icons-material/Close';

import useRehabContext from '../../../hooks/useRehabContext';


const StyledLink = styled(Link) `

  border: 2px solid #2F7ABF;
  color: #2F7ABF;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  };

`;


const StyledButton = styled(Button) `

  font-size: 16px;
  font-weight: 700;
  background-color: #2F7ABF;
  color: #fff;
  padding: 8px 10px;
  transition: transform 0.5s ease-in-out;

  &:hover {

    background-color: #2F7ABF;
    color: #fff;
    transform: scale(1.1);

  };

`;


const WhitePaper = styled(Paper) `

  background-color: #FFF;
  border-radius: 5px;
  padding: 5px 18px;
  z-index: 1;

`;


const BluePaper = styled(Paper) `

  background-color: #2F7ABF;
  border-radius: 15px;
  padding: 5px 15px;

`;


const MissingIcon = styled(IconButton) `

  background-color: #fff;
  padding: 5px;
  z-index: 5;

  &:hover {
    background-color: #fff;
    cursor: default;
  };

`;

const Results = ({ data, incorrectChar, correctChar, setCurrent, setIncoming, setOutgoing, setIncorrectChar, setCorrectChar, setMinutes, setSeconds }) => {

  const { oneMin, threeMin, fiveMin, exitResults } = useRehabContext();

  const [ open, setOpen ] = useState(false);
  const [ accuracy, setAccuracy ] = useState(0);
  const [ wpm, setWpm ] = useState(0);
  const [ missedLetters, setMissedLetters ] = useState([]);


  useEffect(() => {

    setOpen(true);

    updateAccuracy();

    updateWpm();

    updateMissedLetters();

    // eslint-disable-next-line
  }, []);


  const updateAccuracy = () => {

    let correct = correctChar.length - 1;
    let incorrect = incorrectChar.length - 1;
    let total = correct + incorrect;

    setAccuracy(((correct / total) * 100).toFixed(0));

  };


  const updateWpm = () => {

    let correct = correctChar.length - 1;
    let incorrect = incorrectChar.length - 1;
    let total = correct + incorrect;

    if(oneMin){

      setWpm(((total / 5) / 1).toFixed(0));

    };

    if(threeMin){

      setWpm(((total / 5) / 3).toFixed(0));

    };

    if(fiveMin){

      setWpm(((total / 5) / 5).toFixed(0));

    };
  };


  const updateMissedLetters = () => {

    let key = "key";
    let empty = [];

    // maybe conditional to filter out special characters: "", ;, :, " ", and others
    // let space = item.key === " ";
    // let semi = item.key === ";";

    incorrectChar.forEach((item) => {

      if(empty.some((val) => { return val[key] === item[key] })){

        empty.forEach((itemTwo) => {

          if(itemTwo[key] === item[key]){

            itemTwo["count"]++;

          };

        });

      } else {

        let itemThree = {};

        itemThree[key] = item[key];

        itemThree["count"] = 1;

        empty.push(itemThree);

      };

    });

    empty.sort((a, b) => b - a);

    setMissedLetters(empty.slice(0, 5));

  };


  const closeClick = () => {

    setOpen(false);

    exitResults();

    setOutgoing([]);
    setCurrent(data.excerpt.slice(0, 1));
    setIncoming(data.excerpt.slice(1));
    setIncorrectChar([{ id: 0, key: "" }]);
    setCorrectChar([{ id: 0, key: "" }]);

    if(oneMin){

      setMinutes(1);
      setSeconds(0);

    };

    if(threeMin){

      setMinutes(3);
      setSeconds(0);

    };

    if(fiveMin){

      setMinutes(5);
      setSeconds(0);

    };

  };


  const resetClick = () => {

    setOpen(false);

    exitResults();

    setOutgoing([]);
    setCurrent(data.excerpt.slice(0, 1));
    setIncoming(data.excerpt.slice(1));
    setIncorrectChar([{ id: 0, key: "" }]);
    setCorrectChar([{ id: 0, key: "" }]);

    if(oneMin){

      setMinutes(1);
      setSeconds(0);

    };

    if(threeMin){

      setMinutes(3);
      setSeconds(0);

    };

    if(fiveMin){

      setMinutes(5);
      setSeconds(0);

    };

  };


  return (

    <Fragment>

      <Dialog sx={{ backgroundColor: "rgba(47, 122, 191, 0.7)", backdropFilter: "blur(2px)" }} aria-labelledby="customized-dialog-title" open={open}>
        <Stack direction="column" justifyContent="center" alignItems="center">

          <ResultsDialogTitle id="customized-dialog-title" onClose={closeClick} />

          <DialogContent sx={{ position: "relative", width: "400px", px: 0 }}>
            <Stack sx={{ backgroundColor: theme => theme.palette.primary.main, px: 2 }} direction="row" justifyContent="space-around" alignItems="center">
              <Stack sx={{ width: "50%", height: "125px" }} direction="column" justifyContent="center" alignItems="center" spacing={1}>
                <Typography sx={{ color: "#fff" }} fontSize="24px" fontWeight={900}>WPM</Typography>
                <WhitePaper><Typography fontSize={20} fontWeight={700}>{wpm}</Typography></WhitePaper>
              </Stack>
              <Stack sx={{ width: "50%", height: "125px", textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={1}>
                <Typography sx={{ color: "#fff" }} fontSize="24px" fontWeight={900}>Accuracy</Typography>
                <WhitePaper><Typography fontSize={20} fontWeight={700}>{accuracy}%</Typography></WhitePaper>
              </Stack>
            </Stack>

            <Stack sx={{ pt: 2 }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <Typography sx={{ borderBottom: "1.5px solid black", pb: -2 }} fontSize="24px" fontWeight={900}>Most Missed Letters</Typography>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>


                  { missedLetters.map((letter, index) => {

                    // insert this as the styling for the paper-background
                    // this works if inserted into styling
                    let randomColor = colors[Math.floor(Math.random() * colors.length)];

                    console.log(randomColor);

                    return (

                      <Fragment key={letter + index}>
                        <Stack sx={{ textAlign: "center" }} direction="column" justifyContent="center" alignItems="center" spacing={1}>
                          <Paper sx={{ backgroundColor: randomColor.color, borderRadius: 3, padding: "5px 15px" }} elevation={3}><Typography fontSize="20px" fontWeight={700} color="#fff">{letter.key}</Typography></Paper>
                          <Typography>65%</Typography>
                        </Stack>
                      </Fragment>

                    );

                  }) }

              </Stack>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ height: "65px", width: "100%" }}>
            <Stack sx={{ width: "100%" }} direction="row" justifyContent="center" alignItems="center" spacing={3}>
              <StyledButton onClick={resetClick}>
                Restart Test
              </StyledButton>
              <StyledLink to="/select">
                Select Time
              </StyledLink>
            </Stack>
          </DialogActions>

        </Stack>
      </Dialog>

    </Fragment>

  )
}

export default Results;


const CloseButton = styled(IconButton) `

  background-color: transparent;
  color: rgba(60, 69, 81, 0.8);

  &:hover {

    background-color: transparent;
    color: rgba(60, 69, 81, 0.8);

  };

`;


export const ResultsDialogTitle = ({ onClose }) => {

  return (

    <DialogTitle sx={{ height: "50px" }}>

      { onClose ? (

        <CloseButton aria-label="close" sx={{ position: "absolute", top: 8, right: 8 }} onClick={onClose}>

          <CloseIcon />

        </CloseButton>

      ) : null }

      <Box sx={{ position: "absolute", top: 28, left: 88, zIndex: 5 }} component="img" src="https://cdn-icons-png.flaticon.com/512/850/850960.png" height="40px" width="40px" />

      <Box sx={{ position: "absolute", top: 28, right: 88, zIndex: 5 }} component="img" src="https://cdn-icons-png.flaticon.com/128/8010/8010221.png" height="42px" width="42px" />

      <MissingIcon sx={{ position: "absolute", top: 140, right: 180 }}><Box component="img" src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" height="40px" width="40px" /></MissingIcon>

    </DialogTitle>
  );

};
