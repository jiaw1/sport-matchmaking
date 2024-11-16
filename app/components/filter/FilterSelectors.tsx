"use client";

import {Box, Typography, Chip, Divider, Icon} from "@mui/material";
import Image from "next/image";
import { Check } from "@mui/icons-material";
import { TimePicker } from "@mui/x-date-pickers";
import { Dispatch, Fragment, SetStateAction } from "react";
import type {filterType} from "./FilterEvents"
import { Sports, DaysOfWeek, dayOfWeek, IEventFilters } from "@/app/lib/definitions";
import { PickerValidDate } from "@mui/x-date-pickers";
import dayjs from "dayjs";

type FilterSelectorsProps = {
  filters: IEventFilters;
  setFilters: Dispatch<SetStateAction<IEventFilters>>;
  filterType: filterType;
}


export default function FilterSelectors({filters , setFilters, filterType } : FilterSelectorsProps) {

  const filteredSports = filters.sports;
  const filteredDays = filters.days;
  
  const handleSportsChipClick = (sport : string, selected : boolean) => {
    if (selected) {
      filteredSports.delete(sport)
    } else {
      filteredSports.add(sport)
    }
    setFilters({...filters, sports: filteredSports})
  }

  const handleDaysChipClick = (day : dayOfWeek, selected : boolean) => {
    if (selected) {
      filteredDays.delete(day)
    } else {
      filteredDays.add(day)
    }
    setFilters({...filters, days: filteredDays})
  }

  const setStartTime = (newValue : PickerValidDate | null) => {
    if(newValue) {
      setFilters({...filters, time: {
        endTime: filters.time.endTime ?  filters.time.endTime : dayjs().hour(23).minute(59),
        startTime: newValue,
      }})
    }
  }

  const setEndTime = (newValue : PickerValidDate | null) => {
    if(newValue) {
      setFilters({...filters, time: {
        startTime: filters.time.startTime ?  filters.time.startTime : dayjs().hour(0).minute(0),
        endTime: newValue,
      }})
    }
  }


  return (
    <Fragment>
      {
        (filterType == "all" || filterType == "sport") &&
        <Fragment>
          <Box>
            <Typography variant="subtitle1" sx={{ mb:1}}>Sports</Typography>
            <Box sx={{display: "flex", gap: 1, flexWrap:"wrap"}}>
              {
                Sports.map((sport, index) => {
                  const selected = filteredSports.has(sport);
                  return (
                    <Chip 
                      key={index} 
                      label={`${sport}`}                   
                      variant={selected ? "filled" : "outlined"}
                      onClick={() => handleSportsChipClick(sport, selected)}
                      icon={
                        <Icon sx={{display:"flex", alignItemes:"center", justifyContent:"center"}}>
                          <Image src={`/icons/sports/${sport.toLowerCase()}.svg`} alt={`${sport} icon`} width={20} height={20}></Image>
                        </Icon>} color={selected ? "secondaryContainer" : "default"}>
                    </Chip>
                  )
                })
              }
            </Box>
          </Box>
          <Divider/>
        </Fragment>
      }
      {
        (filterType == "all" || filterType == "day") &&
        <Fragment>
          <Box>
            <Typography variant="subtitle1" sx={{ mb:1}}>Day of the week</Typography>
            <Box sx={{display: "flex", gap: 1, flexWrap:"wrap"}}>
              {
                DaysOfWeek.map((day, index) => {
                  const selected = filteredDays.has(day);
                  return (
                    <Chip key={index} label={`${day}`}
                      onClick={() => handleDaysChipClick(day, selected)}
                      variant={selected ? "filled" : "outlined"}
                      color={selected ? "secondaryContainer" : "default"}
                      icon={selected ? <Check fontSize="small"></Check> : <></>}
                      >
                    </Chip>
                  )
                })
              }
            </Box>
          </Box>
          <Divider/>
        </Fragment>
        }
      {
        (filterType == "all" || filterType == "time") &&
        <Fragment>
          <Box>
            <Typography variant="subtitle1" sx={{ mb:1}}>Time</Typography>
            <Box sx={{display: "flex", gap: 1, flexWrap:"wrap", alignItems:"center"}}>
              <TimePicker label="Start time" ampm={false} value={filters.time.startTime} onChange={(value) => setStartTime(value)}></TimePicker>
              -
              <TimePicker label="End time" ampm={false} value={filters.time.endTime} onChange={(value) => setEndTime(value)}></TimePicker>
            </Box>
          </Box>
          <Divider/>
        </Fragment>
      }
    </Fragment>
  )
}