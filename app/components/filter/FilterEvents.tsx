"use client";

import { SetStateAction, Dispatch, useState } from "react";
import { Box, Button, Popover, Typography} from "@mui/material"
import {  ArrowDropDown, Check, FilterListOutlined} from "@mui/icons-material";
import { IEventFilters } from "@/app/lib/definitions";
import FilterSelectors from "./FilterSelectors";

type FilterEventsProps = {
  filters: IEventFilters;
  setFilters: Dispatch<SetStateAction<IEventFilters>>;
}

export type filterType = "all" | "sport" | "day" | "time";

export type {FilterEventsProps as FilterEventsPropsType};

export default function FilterEvents({filters , setFilters } : FilterEventsProps) {
  const [currentFilter, setCurrentFilter] = useState<filterType>("all");

  const [tempFilters, setTempFilters] = useState<IEventFilters>({
    ...filters,
    sports: new Set(filters.sports),
    days: new Set(filters.days)
  })

  const saveFilters = () => {
    setFilters({
      sports: new Set(tempFilters.sports),
      days: new Set(tempFilters.days),
      time: {
        startTime: tempFilters.time.startTime? tempFilters.time.startTime.clone() : null,
        endTime: tempFilters.time.endTime? tempFilters.time.endTime.clone() : null,
      }
    });
  }

  const clearFilters = (filter : filterType) => {
    setFilters({
      sports: (filter == "all" || filter == "sport") ? new Set([]) : filters.sports,
      days: (filter == "all" || filter == "day") ? new Set([]) : filters.days,
      time: {
        startTime: (filter == "all" || filter == "time") ? null : filters.time.startTime,
        endTime: (filter == "all" || filter == "time") ? null : filters.time.endTime,
      }
    });

    setTempFilters({
      sports: (filter == "all" || filter == "sport") ? new Set([]) : filters.sports,
      days: (filter == "all" || filter == "day") ? new Set([]) : filters.days,
      time: {
        startTime: (filter == "all" || filter == "time") ? null : filters.time.startTime,
        endTime: (filter == "all" || filter == "time") ? null : filters.time.endTime,
      }
    });
  }


  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, filterType: filterType) => {
    setCurrentFilter(filterType);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (save = false) => {
    if (!save) {
      setTempFilters({
        ...filters,
        sports: new Set(filters.sports),
        days: new Set(filters.days)
      });
    } else {
      saveFilters();
    }
    setAnchorEl(null);
  };

  const popOverOpen = Boolean(anchorEl);
  const popOverId = popOverOpen ? `${currentFilter}-filter-popover` : undefined;

  return (

      <Box sx={{display: "flex", flexDirection:"row", overflowX:"auto", gap:1}}>
        <Button 
          sx={{textTransform:"none", borderRadius:100, minWidth:"fit-content"}}  
          variant="contained" 
          size="large" 
          disableElevation 
          startIcon={<FilterListOutlined/>} 
          onClick={(event) => handleClick(event, "all")}>
            Filter
        </Button>
        <Button 
          sx={{textTransform:"none", borderRadius: 2, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
          variant={(filters.sports.size == 0) ? "outlined" : "contained"} 
          size="small" 
          disableElevation 
          startIcon={(filters.sports.size == 0) ? <></> :  <Check/>} 
          endIcon={<ArrowDropDown/>} 
          color={(filters.sports.size == 0) ? "primary" : "secondaryContainer"} 
          onClick={(event) => handleClick(event, "sport")}>
            <span className="max-w-36 overflow-hidden text-ellipsis text-nowrap whitespace-nowrap">
              {(filters.sports.size == 0) ? "Any sport" : Array.from(filters.sports).join(', ')}
            </span>
        </Button>
        <Button 
          sx={{textTransform:"none", borderRadius: 2, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
          variant={(filters.days.size == 0) ? "outlined" : "contained"} 
          size="small" 
          disableElevation 
          startIcon={(filters.days.size == 0) ? <></>: <Check/>} 
          endIcon={<ArrowDropDown/>} 
          color={(filters.days.size == 0) ? "primary" : "secondaryContainer"} 
          onClick={(event) => handleClick(event, "day")}>
            <span className="max-w-36 overflow-hidden text-ellipsis text-nowrap whitespace-nowrap">
              {(filters.days.size == 0) ? "Any day" : Array.from(filters.days).map(_ => _.substring(0,3)).join(', ')}
            </span>
          </Button>
        <Button 
          sx={{textTransform:"none", borderRadius: 2, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
          variant={(filters.time.startTime == null) ? "outlined" : "contained"} 
          size="small" 
          disableElevation 
          startIcon={(filters.time.startTime == null) ? <></> : <Check/>} 
          endIcon={<ArrowDropDown/>} 
          color={(filters.time.startTime == null) ? "primary" : "secondaryContainer"} 
          onClick={(event) => handleClick(event, "time")}>
            {(filters.time.startTime && filters.time.endTime)? `${filters.time.startTime.format("HH:mm")} - ${filters.time.endTime.format("HH:mm")}` : "Any time"}
        </Button>
        <Popover 
          id={popOverId}
          open={popOverOpen}
          anchorEl={anchorEl}
          onClose={() => handleClose()}
          anchorOrigin={{vertical:"bottom", horizontal: "left"}}
          sx={{mt: 1}}
        >
          <Box sx={{backgroundColor: "rgb(var(--color-surface-container-light))", p:2, borderRadius: 2, display: "flex", flexDirection:"column", gap: 2}}>
            <FilterSelectors filters={tempFilters} setFilters={setTempFilters} filterType={currentFilter}></FilterSelectors>
            <Box  sx={{display: "flex", gap: 1, flexWrap:"wrap", alignItems:"center", justifyContent:"flex-end"}}>
              <Button sx={{textTransform: "none", borderRadius:100}} variant="outlined" onClick={() => clearFilters(currentFilter)}>{`Clear filter${currentFilter == "all"? "s" : ""}`}</Button>
              <Button sx={{textTransform: "none", borderRadius:100}} variant="contained" onClick={() => handleClose(true)}>Save</Button>
            </Box>
          </Box>
        </Popover>
      </Box>
  )
}