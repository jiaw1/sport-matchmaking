import { FormControl, FilledInput, InputAdornment, ButtonBase } from "@mui/material"
import { Search } from "@mui/icons-material"

export default function SearchBar() {
  return (<FormControl sx={{mb:2, "& .MuiInputBase-root": {borderRadius:"100px"}, "& .MuiFilledInput-root::before": {borderBottom: "none !important"}, "& .MuiFilledInput-root::after": {borderBottom: "none"}}} fullWidth variant="filled">
    <ButtonBase sx={{borderRadius: "100px"}}>
      <FilledInput
        hiddenLabel
        fullWidth
        endAdornment={<InputAdornment position="end"><Search></Search></InputAdornment>}
        sx={{pl: 2}}
        inputProps={{
          'aria-label': 'search for events',
        }}
      
        />
    </ButtonBase>
  </FormControl>)
}