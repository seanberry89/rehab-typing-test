import { Fragment, useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, styled, Typography } from '@mui/material';
import { fixedBottom } from '../../../theme/CustomTheme';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineTimer } from 'react-icons/md';
import { FaRedo } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

import useRehabContext from '../../../hooks/useRehabContext';


const QuestionIcon = styled(IconButton)`

  background-color: #FFF;
  padding: 10px;

  &:hover {
    background-color: #FFF;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const TimerLink = styled(Link) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #FFF;
  height: 40px;
  width: 40px;
  border-radius: 20px;

  &:hover {
    background-color: #FFF;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const CloseButton = styled(IconButton) `

  background-color: transparent;
  color: rgba(60, 69, 81, 0.8);

  &:hover {

    background-color: transparent;
    color: rgba(60, 69, 81, 0.8);

  };

`;

const PauseButton = styled(IconButton) `

  cursor: default;
  background-color: #FF0000;
  padding: 8px;

  &:hover {
    background-color: #FF0000;
    cursor: default;
  }

`;


const PlayButton = styled(IconButton) `

  cursor: default;
  background-color: #FF0000;
  padding: 8px 7px 8px 8px;

  &:hover {
    background-color: #FF0000;
    cursor: default;
  }

`;

const ResetButton = styled(IconButton) `

  cursor: default;
  background-color: #32CD32;
  padding: 8px;

  &:hover {
    background-color: #32CD32;
    cursor: default;
  }

`;

const StoryButton = styled(IconButton) `

  cursor: default;
  background-color: #9c27b0;
  padding: 8px;

  &:hover {
    background-color: #9c27b0;
    cursor: default;
  }

`;

const ShortcutSpan = styled(Box) `

  display: inline;
  background-color: rgba(47, 122, 191, 0.75);
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  padding: 2px 5px;

`;

const Footer = () => {

  const context = useRehabContext();
  const { pauseTest } = context;

  // Note: maybe move this state to Test so I can prop drill to Input?
  const [ open, setOpen ] = useState(false);

  const onClick = () => {

    setOpen(true);

    pauseTest();

  };


  const onClose = () => {

    setOpen(false);

  };


  const instructions = (

    <Paper sx={{ position: "relative", height: "100%", width: "300px" }}>
      <CloseButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={onClose}><CloseIcon /></CloseButton>
      <Stack sx={{ pt: 6, px: 2 }} direction="column" justifyContent="center" alignItems="center">
        <Typography sx={{ pb: 0.5 }} color="#3C4551" fontWeight={700} fontSize={20}>Instructions</Typography>
        <Typography sx={{ textAlign: "center" }} fontSize={15}>Test your computer typing with the classic works of Tolkien, Rowling, and Dickens.  Below are the features and shortcuts to assist with your typing test.  Enjoy!</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PauseButton><FaPause color="#fff" size={15} /></PauseButton>
            </ListItemIcon>
            <ListItemText primary="Pause Test" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PlayButton><FaPlay color="#fff" size={15} /></PlayButton>
            </ListItemIcon>
            <ListItemText primary="Resume Test" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ResetButton><FaRedo color="#fff" size={15} /></ResetButton>
            </ListItemIcon>
            <ListItemText primary="Restart Test" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StoryButton><FaBook color="#fff" size={15} /></StoryButton>
            </ListItemIcon>
            <ListItemText primary="New Excerpt" />
          </ListItem>
        </List>
      </Stack>

      <Divider variant="middle" />

      <Stack sx={{ pt: 2, px: 2 }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Typography color="#3C4551" fontWeight={700} fontSize={20}>Common Shortcuts</Typography>
        <Stack sx={{ textAlign: "left" }} direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
          <Typography component="div" fontSize={14}><ShortcutSpan>Shift</ShortcutSpan> + <ShortcutSpan>/</ShortcutSpan> = Question Mark</Typography>
          <Typography component="div" fontSize={14}><ShortcutSpan>Shift</ShortcutSpan> + <ShortcutSpan>1</ShortcutSpan> = Exclamation Point</Typography>
          <Typography component="div" fontSize={14}><ShortcutSpan>Shift</ShortcutSpan> + <ShortcutSpan>Single Quote</ShortcutSpan> = Double Quote</Typography>
          <Typography component="div" fontSize={14}><ShortcutSpan>Shift</ShortcutSpan> + <ShortcutSpan>Option</ShortcutSpan> + <ShortcutSpan>Hyphen</ShortcutSpan> = Em Dash</Typography>
        </Stack>
      </Stack>

    </Paper>

  );

  return (
    <Fragment>
      <Box sx={fixedBottom}>
        <Stack sx={{ width: "100%", px: 2, pb: 2 }} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          {/* <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}> */}
            <QuestionIcon onClick={onClick}><FaQuestion title="Questions?" color="black" size={20} /></QuestionIcon>
            <TimerLink to="/select"><MdOutlineTimer title="Change Timer?" color="black" size={28} /></TimerLink>
          {/* </Stack> */}
        </Stack>
        <Drawer sx={{ backgroundColor: "rgba(47, 122, 191, 0.7)" }} anchor="left" open={open}>
          { instructions }
        </Drawer>
      </Box>
    </Fragment>
  );
};

export default Footer;
