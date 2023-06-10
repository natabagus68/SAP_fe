import layoutContex from "@features/operator/layout-operator/layout-contex";
import { useContext, useEffect, useState } from "react";

export const useDashboardOperator = () => {
  const { title, handleTitle } = useContext(layoutContex);
  const [tempTitle, setTempTitle] = useState({
    title: "Casting to Machining Scan",
    textTitle: "Casting to Machining Supply Monitoring",
  });

  useEffect(() => {
    handleTitle(tempTitle);
  }, []);
};

