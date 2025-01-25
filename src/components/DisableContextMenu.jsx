"use client"
import React, { useEffect } from "react";

const DisableContextMenu = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      // Prevent F12 (DevTools), Ctrl+Shift+I (DevTools), Ctrl+U (View Source), Ctrl+S (Save Page), and other combinations
      if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
        (event.ctrlKey && event.keyCode === 83) || // Ctrl+S
        (event.ctrlKey && event.shiftKey && event.keyCode === 67) // Ctrl+Shift+C
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return null;
};

export default DisableContextMenu;
