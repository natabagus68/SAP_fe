import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useDashboardModel() {
  const navigate = useNavigate()
  const [date, setDate] = useState({ startDate: null, endDate: null });

  const onSelectDate = (prev) => setDate(prev);
  const onNavigate = (path) => navigate(path)

  return {
    date,
    onSelectDate,
    onNavigate
  };
}
