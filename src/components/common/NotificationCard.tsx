import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

// Define notification types
export interface UserNotification {
  id: number;
  type: "user";
  avatar: string;
  name: string;
  action: React.ReactNode;
  time: string;
}

export interface SystemNotification {
  id: number;
  type: "system";
  icon: React.ReactNode;
  title: string;
  message: string | null;
  time: string;
}

export type Notification = UserNotification | SystemNotification;

interface NotificationCardProps {
  notification: Notification;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const handleRemove = () => {
    console.log("Remove Notification", notification.id);
    // Implement actual remove logic here
  };
  const handleTurnOff = () => {
    console.log("Turn off notifications from this user", notification.id);
    // Implement actual turn off logic here
  };

  return (
    <div className="flex items-center justify-center bg-[#d9e0ea] rounded-xl shadow px-6 py-5 hover:shadow-lg transition-shadow relative">
      <div className="flex items-center gap-4 w-full">
        {notification.type === "user" ? (
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {notification.name.charAt(0)}
          </div>
        ) : (
          <div className="w-12 h-12 flex items-center justify-center bg-[#e8ebef] rounded-full">
            {notification.icon}
          </div>
        )}
        <div className="flex flex-col justify-center">
          {notification.type === "user" ? (
            <p className="text-base text-gray-800">
              <span className="font-semibold">{notification.name}</span>{" "}
              {notification.action}
            </p>
          ) : (
            <>
              <p
                className="text-base text-gray-800"
                dangerouslySetInnerHTML={{ __html: notification.title || "" }}
              />
              {notification.message && (
                <p className="text-sm text-gray-500 mt-1">
                  {notification.message}
                </p>
              )}
            </>
          )}
          <span className="text-xs text-gray-400 mt-0 block">
            {notification.time}
          </span>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 hover:bg-gray-100 cursor-pointer transition-colors rounded-md border border-transparent hover:border-gray-300 ml-4">
            <RxDotsHorizontal className="text-gray-400 text-xl" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem className="cursor-pointer" onClick={handleRemove}>
            Remove Notification
          </DropdownMenuItem>
          {notification.type === "user" && (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleTurnOff}
            >
              Turn off notifications from this user
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationCard;
