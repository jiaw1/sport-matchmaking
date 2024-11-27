import { Typography } from "@mui/material";

export default function SectionHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography variant="h2" sx={{fontWeight: 600, fontSize: {xs: 16, md: 22}, letterSpacing: 0.15, lineHeight: {xs: 1.25, md: 1.27}, mt: 1, mb: 2}}>{children}</Typography>
  )
}