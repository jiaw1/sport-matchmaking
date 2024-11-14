import { Typography } from "@mui/material";

export default function DetailText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography variant="h3" sx={{fontWeight: 400, fontSize: 12, letterSpacing: 0.5, lineHeight: 1.45}} className="text-on-surface-variant-light">{children}</Typography>
  )
}