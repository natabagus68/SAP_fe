import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function useLogPart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //get params url
  const { type } = useParams();
  //setup react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: state?.data?.id,
      damage: state?.data?.damage,
    },
  });

  // create manpower data
  const createDamage = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // console.log(2);
  }, []);

  return {
    state,
    errors,
    type,
    navigate,
    createDamage,
    register,
    handleSubmit,
  };
}
