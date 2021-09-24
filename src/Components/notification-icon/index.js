import React from "react";
import { NotificationsNone } from "@material-ui/icons"

export default function NotificationIcon() {
  return (
    <div className="relative cursor-pointer mr-2 text-white">
      <NotificationsNone />
      <span className="absolute p-1 -mt-8 ml-4 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
        2
      </span>
    </div>
  );
}
