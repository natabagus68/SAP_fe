import { useState } from "react";

export default function useStockModel() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const onSelectDate = (prev) => {
    setDate(prev);
  };

  return {
    date,
    setDate,
    onSelectDate,
  };
}
