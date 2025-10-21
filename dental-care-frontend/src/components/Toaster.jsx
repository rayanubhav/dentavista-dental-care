import React, { useEffect } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const Toaster = ({ message, type, setMessageState }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessageState({ text: "", type: "" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessageState]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-[100] p-4 rounded-xl shadow-xl text-white transition-all duration-300 max-w-sm ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-start gap-3">
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        )}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Toaster;
