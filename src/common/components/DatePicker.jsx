import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col items-center">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="bg-white rounded-lg border border-gray-300 p-2 text-center"
      />
    </div>
  );
};

export default Datepicker;

