import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LogPart } from '@domain/models/log-part/log-part'
import { LogPartApiRepository } from '@data/api/log-part/log-part-api-repository'

export default function useLogPart() {
  const navigate = useNavigate();
  //get params url
  const { id } = useParams();

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [dataLogPart, setDataLogPart] = useState<LogPart[]>([])
  const [dataLogPartById, setDataLogPartById] = useState<LogPart>(null)


  const logPartRepository = new LogPartApiRepository()

  const getLogPart = async() => {
    setIsLoadingData(true);
    try {
      const result = await logPartRepository.get();
      setTimeout(() => {
        setIsLoadingData(false);
        setDataLogPart(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  const getLogPartById = async() => {
    setIsLoadingData(true);
    try {
      const result = await logPartRepository.getById(id);
      setTimeout(() => {
        setIsLoadingData(false);
        setDataLogPartById(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLogPart()
  }, []);

  useEffect(() => {
    if (id) {
      getLogPartById()
    }
  }, [id])
  

  return {
    navigate,
    dataLogPart,
    isLoadingData,
    dataLogPartById
  };
}
