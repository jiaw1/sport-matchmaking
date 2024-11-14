import { Typography } from "@mui/material";

export default function DetailHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography variant="body2" sx={{fontWeight: 600, fontSize: 14, letterSpacing: 0.1, lineHeight: 1.43}} className="text-on-surface-variant-light">{children}</Typography>
  )
}