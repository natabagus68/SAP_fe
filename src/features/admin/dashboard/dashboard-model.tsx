import { useState } from "react";

export default function useDashboardModel() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const onSelectDate = (prev) => {
    setDate(prev);
  };

  return {
    date,
    onSelectDate,
  };
}
