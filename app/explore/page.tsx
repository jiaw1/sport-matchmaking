"use client";

import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { Box, Tabs, Tab, TabProps, Container, styled } from "@mui/material"
import { List, MapOutlined, TodayOutlined } from "@mui/icons-material";
import SearchBar from "../components/SearchBar";
import FilterEvents from "../components/filter/FilterEvents";
import { DaysOfWeek, IEventFilters , dayOfWeek} from "../lib/definitions";
import EventCardsList from "../components/EventCardsList";
import dayjs from "dayjs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabs = styled(Tabs)({
  padding: "6px 8px",
  borderRadius: "12px",
  backgroundColor: "#F3EDF7",
  '& .MuiTabs-indicator': {
    backgroundColor: '#E6E0E9',
    height: "100%",
    width: "108px !important",
    zIndex: 1,
    borderRadius: "12px",
  },
});

const CustomTab = styled((props : TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    zIndex:2,
    padding: 4,
    textTransform: 'none',
    minHeight: 0,
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      minHeight: 0,
    },
    width: "100px",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    color: 'secondary',
    '&:hover': {
      color: '#625B71',
      opacity: 0.8,
    },
    '&.Mui-selected': {
      color: '#625B71',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`view-tabpanel-${index}`}
      aria-labelledby={`view-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}


export default function ExplorePage() {

  
  const [filters, setFilters] = useState<IEventFilters>(
    {
      sports: new Set([]),
      days: new Set<dayOfWeek>([]),
      time: {
        startTime: null,
        endTime: null
      }}
    )

  const events = useContext(EventContext);

  const filteredEvents = events.filter((event) => {
    return (
      (filters.sports.size != 0 ? filters.sports.has(event.sport) : true) && 
      (filters.days.size != 0 ? filters.days.has(dayjs(event.startsAt).format("dddd") as dayOfWeek) : true) &&
      (filters.time.startTime ?  dayjs(event.startsAt).isAfter(filters.time.startTime) : true) &&
      (filters.time.startTime ?  dayjs(event.endsAt).isBefore(filters.time.endTime) : true)
    )
  })

  const [view, setView] = useState(0);

  const handleViewChange = (event: React.SyntheticEvent, newValue: number) => {
    setView(newValue);
  };

  console.log(filters);

  return (
    <Box>
      <Box>
        <SearchBar></SearchBar>
      </Box>
      <Box sx={{mb:2}}>
        <FilterEvents filters={filters} setFilters={setFilters}></FilterEvents>
      </Box>
      <Container disableGutters sx={{mb: 2, maxWidth:"720px"}}>
          <CustomTabs value={view} onChange={handleViewChange} aria-label="explore events view tabs" centered>
            <CustomTab icon={<List/>} iconPosition="start" label="List" id="list-view-tab" aria-controls="view-tabpanel-0"></CustomTab>
            <CustomTab icon={<MapOutlined/>} iconPosition="start" label="Map" id="list-view-tab" aria-controls="view-tabpanel-0"></CustomTab>
            <CustomTab icon={<TodayOutlined/>} iconPosition="start" label="Calendar" id="list-view-tab" aria-controls="view-tabpanel-0"></CustomTab>
          </CustomTabs>
      </Container>
      <CustomTabPanel value={view} index={0}>
        <EventCardsList events={filteredEvents}/>
      </CustomTabPanel>
      <CustomTabPanel value={view} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={view} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  )
}