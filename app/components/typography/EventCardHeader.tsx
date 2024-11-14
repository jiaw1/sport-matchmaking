import { Typography } from "@mui/material";

export default function EventCardHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography variant="h3" sx={{fontWeight: 600, fontSize: 14, letterSpacing: 0.1, lineHeight: 1.42}}>{children}</Typography>
  )
}