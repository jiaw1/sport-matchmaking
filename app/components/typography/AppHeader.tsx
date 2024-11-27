import { Typography } from "@mui/material";

export default function AppHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography variant="h1" sx={{fontWeight: 400, fontSize: {xs: 28, md: 32}, letterSpacing: 0, lineHeight: 1.28}}>{children}</Typography>
  )
}