import React from "react";

export const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center p-2 shadow-sm">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
