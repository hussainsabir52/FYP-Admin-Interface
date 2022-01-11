import React from "react";
import PendingRegistrationButton from "../pending-resgistration-button";
import RegisteredDriversButton from "../registered-dirvers-button";

export default function QuickMenu() {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-xs text-gray-700">Quick Menu</h3>
        <ul className="list-none p-1">
          <RegisteredDriversButton/>
          <PendingRegistrationButton/>
        </ul>
      </div>
    </div>
  );
}
