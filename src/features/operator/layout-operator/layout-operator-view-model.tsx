import moment from "moment";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Title } from "@domain/models/operator/layout-model/layout";
export const useLayoutOperator = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [title, setTitle] = useState<Title>({
    title: "",
    textTitle: "",
  });

  const handleTitle = (props: Title) => {
    setTitle(props);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    currentTime,
    title,
    handleTitle,
  };
};

