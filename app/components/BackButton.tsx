"use client";

import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              sx={{ mr: 2 }}
              onClick={() => router.back()}
            >
      <ArrowBack />
    </IconButton>
  )
}