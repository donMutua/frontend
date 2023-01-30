import React, { useState } from "react";

interface Props {
  message: string;
}

const NotificationBar: React.FC<Props> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-0 p-2 text-center text-white bg-red-500`}
    >
      {message}
      <button className="ml-2" onClick={() => setIsVisible(false)}>
        x
      </button>
    </div>
  );
};

export default NotificationBar;
