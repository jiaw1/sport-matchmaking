import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import AppHeader from "../components/typography/AppHeader";
import UpdateList from "../components/update/updateList";

export default function UpdatesPage() {
  return (
    <Box>
      <AppHeader>
        Updates
      </AppHeader>
      <Box sx={{mt: 3}}>
        <SearchBar></SearchBar>
      </Box>
      <Box sx={{mt: 1}}>
        <UpdateList></UpdateList>
      </Box>
    </Box>

  )
}