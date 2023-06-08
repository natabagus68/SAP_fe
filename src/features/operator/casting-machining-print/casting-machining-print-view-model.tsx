import { useContext, useEffect, useState } from "react";
import layoutContex from "../layout-operator/layout-contex";
import { Title } from "@domain/models/operator/layout-model/layout";
import { useParams } from "react-router-dom";

export const useCastingMachiningPrint = () => {
  const { machine } = useParams();
  const [head, setHead] = useState<Title>({
    title: "Casting Print",
    textTitle: "Print transaction casting data",
  });
  const { title, handleTitle } = useContext(layoutContex);
  const changeTitle = () => {
    if (machine === "machine") {
      setHead({
        title: "Machining Print",
        textTitle: "Print transaction casting data",
      });
    }
  };

  useEffect(() => {
    if (machine) {
      changeTitle();
      handleTitle(head);
    } else {
      setHead({
        title: "Casting Print",
        textTitle: "Print transaction casting data",
      });
      handleTitle(head);
    }
  }, [head]);
};

