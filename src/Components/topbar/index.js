import React from "react";
import ConveygoLogo from "../conveygo-logo";
import NotificationIcon from "../notification-icon";
import SettingsIcon from "../settings-icon";
import UserImage from "../user-image";

export default function Topbar() {
  return (
    <div className="w-full h-12 bg-gray-800 sticky top-0 z-50 hover:bg-gray-900">
      <div className="h-full py-0 px-5 flex items-center justify-between">
        <ConveygoLogo/>
        <div className="flex items-center">
          <NotificationIcon/>
          <SettingsIcon/>
          <UserImage/>
        </div>
      </div>
    </div>
  );
}
