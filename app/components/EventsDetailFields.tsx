import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Sports } from "../lib/definitions";
import Image from "next/image";
import SectionHeader from "../components/typography/SectionHeader";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ArrowDropDown } from "@mui/icons-material";
import DetailHeader from "../components/typography/DetailHeader";
import LevelHelpTooltip from "../components/LevelHelpTooltip";
import { IMatchCreate } from "../lib/definitions";
import dayjs, { Dayjs } from "dayjs";

interface EventDetailsFieldsProps {
  defaultValue: IMatchCreate;
  setSport: (sport: string) => void;
  setMinParticipants: (minParticipants: number) => void;
  setMaxParticipants: (maxParticipants: number) => void;
  setStartsAt: (startsAt: Dayjs) => void;
  setEndsAt: (endsAt: Dayjs) => void;
  setDate: (date: Dayjs) => void;
  setLocation: (location: string) => void;
  setDescription: (description: string) => void;
  setParticipationFee: (fee: number) => void;
  addRequiredEquipment: (equipment: string) => void;
  removeRequiredEquipment: (equipment: string) => void;
  setLevel: (level: string) => void;
  setChatLink: (link: string) => void;
}

export default function EventDetailsFields({
  defaultValue,
  setSport,
  setMinParticipants,
  setMaxParticipants,
  setStartsAt,
  setEndsAt,
  setDate,
  setLocation,
  setDescription,
  setParticipationFee,
  // addRequiredEquipment,
  // removeRequiredEquipment,
  setLevel,
}: // setChatLink
EventDetailsFieldsProps) {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ mb: 4 }}>
        <SectionHeader>Sport *</SectionHeader>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {Sports.map((sport, index) => {
            const selected = defaultValue.sport === sport;
            return (
              <Button
                sx={{ borderRadius: 3, textTransform: "none" }}
                size="large"
                key={index}
                disableElevation
                variant={selected ? "contained" : "outlined"}
                onClick={() => setSport(sport)}
                startIcon={
                  <Icon
                    sx={{
                      display: "flex",
                      alignItemes: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={`/icons/sports/${sport.toLowerCase()}.svg`}
                      alt={`${sport} icon`}
                      width={20}
                      height={20}
                    ></Image>
                  </Icon>
                }
                color={selected ? "secondaryContainer" : "primary"}
              >
                {sport}
              </Button>
            );
          })}
        </Box>
      </Box>
      <Stack direction="column" spacing={2} sx={{ mb: 4 }}>
        <SectionHeader>Time *</SectionHeader>
        <DatePicker
          label="Date"
          sx={{ width: "100%" }}
          value={dayjs(defaultValue.startsAt)}
          onAccept={(value) => {
            if (value != null) setDate(value);
          }}
          slotProps={{
            textField: {
              helperText: "DD/MM/YYYY",
            },
          }}
        ></DatePicker>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <TimePicker
            label="Start time"
            ampm={false}
            sx={{ width: "100%" }}
            value={dayjs(defaultValue.startsAt)}
            onAccept={(value) => {
              if (value != null) setStartsAt(value);
            }}
          ></TimePicker>
          <TimePicker
            label="End time"
            ampm={false}
            sx={{ width: "100%" }}
            value={dayjs(defaultValue.endsAt)}
            onAccept={(value) => {
              if (value != null) setEndsAt(value);
            }}
          ></TimePicker>
        </Stack>
      </Stack>
      <Stack sx={{ mb: 4 }}>
        <SectionHeader>Location *</SectionHeader>
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={defaultValue.location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </Stack>
      <Accordion sx={{ mb: 4 }} slotProps={{ heading: { component: "h2" } }}>
        <AccordionSummary
          expandIcon={<ArrowDropDown></ArrowDropDown>}
          aria-controls="Additional options"
          id="additional-options"
        >
          <SectionHeader>Additional options</SectionHeader>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            <Stack direction="column" spacing={2}>
              <DetailHeader>Number of players</DetailHeader>
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Minimum"
                  type="number"
                  value={defaultValue.minParticipants || ""}
                  onChange={(event) =>
                    setMinParticipants(Number(event.target.value))
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  label="Maximum"
                  type="number"
                  value={defaultValue.maxParticipants || ""}
                  onChange={(event) =>
                    setMaxParticipants(Number(event.target.value))
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <DetailHeader>Match level</DetailHeader>
                <LevelHelpTooltip />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  sx={{ borderRadius: 3, textTransform: "none" }}
                  size="large"
                  disableElevation
                  variant={
                    defaultValue.level === "Casual" ? "contained" : "outlined"
                  }
                  color={
                    defaultValue.level === "Casual"
                      ? "secondaryContainer"
                      : "primary"
                  }
                  onClick={() => setLevel("Casual")}
                >
                  Casual
                </Button>
                <Button
                  sx={{ borderRadius: 3, textTransform: "none" }}
                  size="large"
                  disableElevation
                  variant={
                    defaultValue.level === "Professional"
                      ? "contained"
                      : "outlined"
                  }
                  color={
                    defaultValue.level === "Professional"
                      ? "secondaryContainer"
                      : "primary"
                  }
                  onClick={() => setLevel("Professional")}
                >
                  Professional
                </Button>
                <Button
                  sx={{ borderRadius: 3, textTransform: "none" }}
                  size="large"
                  disableElevation
                  variant={
                    defaultValue.level === "Any" ? "contained" : "outlined"
                  }
                  color={
                    defaultValue.level === "Any"
                      ? "secondaryContainer"
                      : "primary"
                  }
                  onClick={() => setLevel("Any")}
                >
                  Any
                </Button>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={1}>
              <DetailHeader>Participation fee</DetailHeader>
              <Stack direction="row" spacing={2}>
                <TextField
                  hiddenLabel
                  type="number"
                  value={defaultValue.participationFee / 100}
                  onChange={(event) =>
                    setParticipationFee(Number(event.target.value) * 100)
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">€</InputAdornment>
                      ),
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Stack>
        <SectionHeader>Additional information</SectionHeader>
        <TextField
          hiddenLabel
          fullWidth
          multiline
          rows={4}
          variant="filled"
          value={defaultValue.description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Stack>
    </Box>
  );
}
