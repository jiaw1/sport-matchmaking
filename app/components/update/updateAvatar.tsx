import { Icon } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";

interface IUpdateAvatarProps {
  sport: string,
  type: string,
}

export default function UpdateAvatar({sport, type} : IUpdateAvatarProps) {
  return (
    <Fragment>
      <div style={{position: "relative"}}>
        <div className="p-2 bg-on-primary-container rounded-full size-fit h-[44px] aspect-square flex items-center justify-center">
          <Icon sx={{ height: "28px", width: "28px" }}>
            <Image
              src={`/icons/sports/${sport.toLowerCase()}.svg`}
              alt={`${sport.toLowerCase()} icon`}
              width={28}
              height={28}
              ></Image>
          </Icon>
        </div>
        <div className="p-1 bg-primary-container rounded-full size-fit h-[18px] aspect-square flex items-center justify-center absolute bottom-[-4px] right-2">
          <Icon sx={{ height: "10px", width: "10px" }}>
            <Image
              src={`/icons/updateTypes/${type.toLowerCase()}.svg`}
              alt={`${type.toLowerCase()} icon`}
              width={10}
              height={10}
              ></Image>
          </Icon>
        </div>
      </div>
    </Fragment>
  )
}