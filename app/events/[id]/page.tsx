// import { IMatch } from "@/app/lib/definitions";
// import * as mockData from "@/app/lib/mockData";
import {
  Check,
  EditOutlined,
  InfoOutlined,
  LocationOnOutlined,
  PersonOutline,
  StarOutline,
  TodayOutlined,
  EuroOutlined,
} from "@mui/icons-material";
import Image from "next/image";

import {
  // styled,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  Icon,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DetailHeader from "@/app/components/typography/DetailHeader";
import ViewParticipantsModal from "@/app/components/ViewParticipantsModal";
import BackButton from "@/app/components/BackButton";
import LevelHelpTooltip from "@/app/components/LevelHelpTooltip";
import JoinButton from "../../components/JoinButton";
import dayjs from "dayjs";
import { IMatch, IParticipation, matchServiceURL } from "@/app/lib/definitions";
import { getServerSession } from "next-auth";
import ShareButton from "@/app/components/ShareButton";
import { authOptions } from "@/app/lib/auth";
import { fetchUserInfo } from "@/app/lib/keycloak";

// const drawerWidth = 240;

export default async function EventDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const id = (await params).id;
  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.accountId; //to replace
  const event: IMatch = await fetch(`${matchServiceURL}/matches/${id}`).then(
    (_) => _.json()
  );
  const participants: IParticipation[] = await fetch(
    `${matchServiceURL}/matches/${id}/participants`
  ).then((_) => _.json());

  const joined = participants
    .map((_) => _.userId)
    .includes(currentUserId ?? "");
  const isHost = event.hostUserId === currentUserId;

  if (!event) {
    return <div>Match not found</div>;
  }

  const participantsInfoRecord = await fetchUserInfo(
    participants.map((p) => p.userId)
  );

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
            {event.sport}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {isHost && (
              <IconButton
                size="large"
                aria-label="edit event"
                color="inherit"
                href={"/events/edit/" + event.id}
              >
                <EditOutlined />
              </IconButton>
            )}
            <ShareButton variant="icon"></ShareButton>
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
                src={`/icons/sports/${event.sport.toLowerCase()}.svg`}
                alt={`${event.sport.toLowerCase()} icon`}
                width={50}
                height={50}
              ></Image>
            </Icon>
          </div>
          {joined ? (
            <Container className="flex flex-row justify-center align-middle gap-1">
              <Check fontSize="small" />
              <Typography variant="body2">
                {isHost
                  ? "You are the host of this event."
                  : "You have joined this event."}
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
                  {dayjs(event.startsAt).format("dddd DD/MM/YYYY")}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-on-surface-variant-light"
                >
                  {dayjs(event.startsAt).format("HH.mm") +
                    "-" +
                    dayjs(event.endsAt).format("HH.mm")}
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
                <Typography variant="body1">{event.location}</Typography>
                <Typography
                  variant="body2"
                  className="text-on-surface-variant-light"
                >
                  {/* actual address */}
                </Typography>
              </Box>
              {/* <IconButton
                aria-label="Open in Google Maps"
                sx={{ height: "fit-content", mt: 1 }}
              >
                <LaunchOutlined></LaunchOutlined>
              </IconButton> */}
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
                  {
                    `${participants.length}${event.maxParticipants != null ? "/" + event.maxParticipants : ""} ${
                    event.minParticipants != null ? "(Minimum: " + event.minParticipants + ")" : ""}`
                  }
                </Typography>
                <ViewParticipantsModal
                  currentUserId={currentUserId || ""}
                  participants={participants}
                  hostID={event.hostUserId}
                  participantInfoRecord={participantsInfoRecord}
                ></ViewParticipantsModal>
              </Box>
            </Box>
          </Box>
          {event.participationFee > 0 && (
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
                <EuroOutlined fontSize="small"></EuroOutlined>
                <DetailHeader>Participation fee</DetailHeader>
              </Box>
              <Box>
                <Box>
                  <Typography variant="body1">
                    €{event.participationFee / 100}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
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
                <Typography variant="body1">{event.level}</Typography>
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
                  {event.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Grid container spacing={2} columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid size={6}>
            <ShareButton variant="full width"></ShareButton>
          </Grid>
          <Grid size={6}>
            {!isHost ? (
              <JoinButton joined={joined} eventID={id}></JoinButton>
            ) : (
              <Button
                sx={{ textTransform: "none", borderRadius: 100 }}
                size="large"
                disableElevation
                fullWidth
                variant="contained"
                color="primary"
                href={"/events/edit/" + event.id}
              >
                Edit event
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
