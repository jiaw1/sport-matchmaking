"use client";

import { ArrowDropDown, Check } from "@mui/icons-material";
import { Button} from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface SingleFilterButtonProps {
  children: ReactNode;
  active: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>,

}

export default function SingleFilterButton({
  children,
  active,
  onClick,
}: SingleFilterButtonProps) {

  return (
    <Button 
      sx={{textTransform:"none", borderRadius: 2, flexWrap:"nowrap", textWrap:"nowrap", minWidth:"fit-content"}}  
      variant={active ? "contained" : "outlined"} 
      size="small" 
      disableElevation 
      startIcon={active ? <Check/> : <></>} 
      endIcon={<ArrowDropDown/>} 
      color={active ? "secondaryContainer" : "primary"} 
      onClick={onClick}>
        <span className="max-w-36 overflow-hidden text-ellipsis text-nowrap whitespace-nowrap text-on-surface-light font-medium">
          {children}
        </span>
    </Button>
)
}