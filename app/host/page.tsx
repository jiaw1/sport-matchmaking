"use client";

import { useState } from "react"
import { Alert, Box, Button, IconButton, Snackbar, Stack } from "@mui/material"
import { Close } from "@mui/icons-material";
import AppHeader from "../components/typography/AppHeader"
import EventDetailsFields from "../components/EventsDetailFields"
import { IMatchCreate } from "../lib/definitions"
import dayjs, {Dayjs} from "dayjs";
import { clearInterval } from "timers";

const emptyMatchCreateObject = () : IMatchCreate => ({
  sport: "",
  minParticipants: undefined,
  maxParticipants: undefined,
  startsAt: new Date(),
  endsAt: new Date(Date.now() + 60*60*1000),
  location: "",
  description: "",
  participationFee: 0,
  requiredEquipment: [],
  level: "All",
  chatLink: ""
})

export default function HostPage() {
  const [match, setMatch] = useState<IMatchCreate>(emptyMatchCreateObject());

  const [openErrorSnackbar, setOpenErrorSnackbar] = useState<[boolean, string]>([false, ""]);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState<[boolean, string]>([false, ""]);


  const setSport = (sport: string) => {
    setMatch({...match, sport: sport});
  }

  const setMinParticipants = (minParticipants: number) => {
    setMatch({...match, minParticipants: minParticipants})
  }

  const setMaxParticipants = (maxParticipants: number) => {
    setMatch({...match, maxParticipants: maxParticipants})
  }

  const setStartsAt = (startsAt: Dayjs) => {
    setMatch({...match, startsAt: startsAt.toDate()})
  }

  const setEndsAt = (endsAt: Dayjs) => {
    setMatch({...match, endsAt: endsAt.toDate()})
  }

  const setDate = (date: Dayjs) => {
    setMatch({
      ...match,
      startsAt: date.hour(match.startsAt.getHours()).minute(match.startsAt.getMinutes()).toDate(),
      endsAt: date.hour(match.endsAt.getHours()).minute(match.endsAt.getMinutes()).toDate(),
    })
  }

  const setLocation = (location: string) => {
    setMatch({...match, location: location});
  }

  const setDescription = (description: string) => {
    setMatch({...match, description: description});
  }

  const setParticipationFee = (participationFee: number) => {
    setMatch({...match, participationFee: participationFee});
  }

  const addRequiredEquipment = (equipment : string) => {
    if(!match.requiredEquipment.includes(equipment)) setMatch({...match, requiredEquipment: match.requiredEquipment.concat(equipment)})
  }

  const removeRequiredEquipment = (equipment : string) => {
    if(match.requiredEquipment.includes(equipment)) setMatch({...match, requiredEquipment: match.requiredEquipment.filter(n => n !== equipment)})
  }

  const setLevel = (level : string) => {
    setMatch({...match, level: level})
  }

  const setChatLink = (chatLink : string) => {
    setMatch({...match, chatLink: chatLink})
  }

  const clear = () => {
    setMatch(emptyMatchCreateObject())
  }

  const validateMatch = () : [boolean, string] => {
    if (!match.sport) {
      return [false, "Please select a sport!"];
    } 
    if (Date.now() > match.startsAt.valueOf() || Date.now() > match.endsAt.valueOf()) {
      return [false, "Please select a time in the future!"];
    }
    if (match.startsAt.valueOf() > match.endsAt.valueOf()) {
      return [false, "Please select an end time later than the start time!"];
    }
    if (!match.location) {
      return [false, "Please provide the location!"];
    }
    return [true, ""];
  }

  const createMatch = () => {
    const [validated, errorMessage] = validateMatch();
    if (validated) {
      //Create match

      handleCloseErrorSnackbar();
      clear();

      //Put this in callback
      setOpenSuccessSnackbar([true, "Match created successfully!"]);
    } else {
      setOpenErrorSnackbar([!validated, errorMessage]);
    }
  }

  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar([false, ""]);
  }

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar([false, ""]);
  }

  console.log(match);


  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent:"space-between", mb: 6}}>
        <AppHeader>Host a match</AppHeader>
        <Button
        sx={{textTransform:"none", borderRadius: 100, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
        variant="contained" 
        disableElevation 
        size="large"
        color="secondaryContainer"
        onClick={clear}
        >
          <span className="text-on-surface-light">Clear</span>
        </Button>
      </Box>
      <Box>
        <EventDetailsFields 
          defaultValue={match}
          setSport={setSport}
          setDate={setDate}
          setStartsAt={setStartsAt}
          setEndsAt={setEndsAt}
          setLocation={setLocation}
          setDescription={setDescription}
          setParticipationFee={setParticipationFee}
          setMinParticipants={setMinParticipants}
          setMaxParticipants={setMaxParticipants}
          addRequiredEquipment={addRequiredEquipment}
          removeRequiredEquipment={removeRequiredEquipment}
          setLevel={setLevel}
          setChatLink={setChatLink}
          
        />
      </Box>
      <Stack direction="row" sx={{justifyContent:"space-between"}}>
      <Button
        sx={{textTransform:"none", borderRadius: 100, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
        variant="contained" 
        disableElevation 
        size="large"
        color="secondaryContainer"
        onClick={clear}
        >
          <span className="text-on-surface-light">Clear</span>
        </Button>
        <Button
        sx={{textTransform:"none", borderRadius: 100, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
        variant="contained" 
        disableElevation 
        size="large"
        color="primary"
        onClick={createMatch}
        >
          <span>Create match</span>
        </Button>
      </Stack>
      <Snackbar
       open={openErrorSnackbar[0]}
       autoHideDuration={6000}
       onClose={handleCloseErrorSnackbar}
       
       action={<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseErrorSnackbar}
      >
        <Close fontSize="small" />
      </IconButton>}
      >
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleCloseErrorSnackbar}>{openErrorSnackbar[1]}</Alert>
      </Snackbar>
      <Snackbar
       open={openSuccessSnackbar[0]}
       autoHideDuration={6000}
       onClose={handleCloseSuccessSnackbar}
       
       action={<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSuccessSnackbar}
      >
        <Close fontSize="small" />
      </IconButton>}
      >
        <Alert severity="success" sx={{ width: '100%' }} onClose={handleCloseSuccessSnackbar}>{openSuccessSnackbar[1]}</Alert>
      </Snackbar>
    </Box>
  )
}