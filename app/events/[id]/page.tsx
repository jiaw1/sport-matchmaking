import { IMatch } from "@/app/lib/definitions";
import * as mockData from "@/app/lib/mockData";
import {
  Check,
  EditOutlined,
  InfoOutlined,
  LaunchOutlined,
  LocationOnOutlined,
  PersonOutline,
  ShareOutlined,
  StarOutline,
  TodayOutlined,
} from "@mui/icons-material";
import Image from "next/image";

import {
  styled,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  Icon,
  Button,
} from "@mui/material";
import Grid from "@mui/material/grid2";
import DetailHeader from "@/app/components/typography/DetailHeader";
import ViewParticipantsModal from "@/app/components/ViewParticipantsModal";
import BackButton from "@/app/components/BackButton";
import LevelHelpTooltip from "@/app/components/LevelHelpTooltip";
import JoinButton from "./JoinButton";

const drawerWidth = 240;

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const matchDetails = mockData.matches.find((match) => match.id === id);
  const sport = "Table tennis";
  const joined = true;

  if (!matchDetails) {
    return <div>Match not found</div>;
  }

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 110,
          backgroundColor: "rgb(253 247 255)",
          boxShadow: "0 0 0",
        }}
        color="transparent"
        className="bg-surface-light shadow-none"
      >
        <Toolbar>
          <BackButton />
          <Typography variant="h6" noWrap component="div">
            {sport}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <EditOutlined />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <ShareOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Container
          sx={{ mb: 3 }}
          className="flex flex-col items-center gap-2 no-wrap"
        >
          <div className="p-4 bg-primary-container-light rounded-full size-fit h-[80px] aspect-square">
            <Icon sx={{ height: "50px", width: "50px" }}>
              <Image
                src={`/icons/sports/${sport.toLowerCase()}.svg`}
                alt={`${sport.toLowerCase()} icon`}
                width={50}
                height={50}
              ></Image>
            </Icon>
          </div>
          {joined ? (
            <Container className="flex flex-row justify-center align-middle gap-1">
              <Check fontSize="small" />
              <Typography variant="body2">
                You have joined this event.
              </Typography>
            </Container>
          ) : (
            <></>
          )}
        </Container>
        <Container
          sx={{
            borderRadius: 2,
            p: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mb: { xs: 2, md: 4 },
          }}
          className="bg-surface-container-light"
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mb: 12 / 8,
              }}
            >
              <TodayOutlined fontSize="small"></TodayOutlined>
              <DetailHeader>Time</DetailHeader>
            </Box>
            <Box>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Monday 06/10/2024
                </Typography>
                <Typography
                  variant="body2"
                  className="text-on-surface-variant-light"
                >
                  14.00-16.00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mb: 12 / 8,
              }}
            >
              <LocationOnOutlined fontSize="small"></LocationOnOutlined>
              <DetailHeader>Location</DetailHeader>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Unisport Otaniemy, Hall B
                </Typography>
                <Typography
                  variant="body2"
                  className="text-on-surface-variant-light"
                >
                  Otaranta 6 02150 Espoo
                </Typography>
              </Box>
              <IconButton
                aria-label="Open in Google Maps"
                sx={{ height: "fit-content" }}
              >
                <LaunchOutlined></LaunchOutlined>
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mb: 12 / 8,
              }}
            >
              <PersonOutline fontSize="small"></PersonOutline>
              <DetailHeader>Participants</DetailHeader>
            </Box>
            <Box>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  3/4
                </Typography>
                <ViewParticipantsModal></ViewParticipantsModal>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <StarOutline fontSize="small"></StarOutline>
              <DetailHeader>Level</DetailHeader>
              <LevelHelpTooltip></LevelHelpTooltip>
            </Box>
            <Box>
              <Box>
                <Typography variant="body1">All</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                mb: 12 / 8,
              }}
            >
              <InfoOutlined fontSize="small"></InfoOutlined>
              <DetailHeader>Additional information</DetailHeader>
            </Box>
            <Box>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae pellentesque lectus, in scelerisque ipsum. Proin
                  venenatis justo ut leo mollis, et rutrum ante.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Grid container spacing={2} columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid size={6}>
            <Button
              sx={{ textTransform: "none", borderRadius: 100 }}
              size="large"
              fullWidth
              variant="outlined"
              color="primary"
              startIcon={<ShareOutlined />}
            >
              Invite participant
            </Button>
          </Grid>
          <Grid size={6}>
            <JoinButton></JoinButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
