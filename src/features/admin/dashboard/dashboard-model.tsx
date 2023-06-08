import { useState, useEffeect } from "react";

export default function useDashboardModel() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const onDate = (prev) => {
    console.log(prev);
    setDate(prev);
  };

  return {
    date,
    onDate,
  };
}
