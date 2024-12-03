"use client";

import { SetStateAction, Dispatch, useState } from "react";
import { Box, Button, Popover} from "@mui/material"
import { FilterListOutlined} from "@mui/icons-material";
import { IEventFilters } from "@/app/lib/definitions";
import FilterSelectors from "./FilterSelectors";
import SingleFilterButton from "./SingleFilterButton";

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
        <SingleFilterButton active={(filters.sports.size != 0)} onClick={(event) => handleClick(event, "sport")}>
          {(filters.sports.size != 0) ? Array.from(filters.sports).join(', ') : "Any sport"}
        </SingleFilterButton>
        <SingleFilterButton active={(filters.days.size != 0)} onClick={(event) => handleClick(event, "day")}>
          {(filters.days.size != 0) ? Array.from(filters.days).join(', ') : "Any day"}
        </SingleFilterButton>
        <SingleFilterButton active={(filters.time.startTime != null)} onClick={(event) => handleClick(event, "time")}>
          {(filters.time.startTime && filters.time.endTime)? `${filters.time.startTime.format("HH:mm")} - ${filters.time.endTime.format("HH:mm")}` : "Any time"}
        </SingleFilterButton>
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