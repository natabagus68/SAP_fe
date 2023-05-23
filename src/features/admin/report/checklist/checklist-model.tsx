import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { ChecklistApiRepository } from "@data/api/report/checklist-api-repository";
import { Section } from "@domain/models/location/section";
import { Checklist } from "@domain/models/report/checklist";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function useChecklist() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // params data from url
  const { date, status, section_id, id } = useParams();
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openModalPicture, setOpenModalPicture] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);
  //state data Checklist
  const [dataChecklist, setDataChecklist] = useState<Checklist[]>([]);

  //state dataCheklist By Id
  const [dataCheklistById, setDataCheklistById] = useState(null);
  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //api Repository
  const checklistRepository = new ChecklistApiRepository();
  const sectionRepository = new SectionApiRepository();

  //click detail data
  const onOpenDetail = (data): void => {
    navigate("details", {
      state: {
        data: {
          id: dataCheklistById?.id,
          idChecklist: dataCheklistById?.idChecklist,
          date: dataCheklistById?.date,
          noMesin: dataCheklistById?.noMesin,
          pelaksana: dataCheklistById?.pelaksana,
        },
      },
    });
  };
  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };
  const onOpenBackDetail = (): void => {
    setOpenModalDetail(false);
  };
  const onOpenBackModalPicture = (): void => {
    setOpenModalPicture(false);
  };
  const onOpenBackModalVideo = (): void => {
    setOpenModalVideo(false);
  };

  // get data Checklist
  const getDataChecklist = async () => {
    setIsLoadingData(true);
    setDataChecklist([]);
    try {
      //date: string, status: string, section_id: string
      const result = await checklistRepository.get(
        date != "null" ? date : "",
        status != "null" ? status : "",
        section_id != "null" ? section_id : ""
      );
      setTimeout(() => {
        setIsLoadingData(false);
        setDataChecklist(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //get data cheklist by Id
  const getDataCheklistById = async (id: string) => {
    try {
      const result = await checklistRepository.getDataById(id);
      setDataCheklistById(result);
      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  // get data section
  const getDataSection = async () => {
    try {
      const result = await sectionRepository.getSection();
      setDataSection(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!id) {
      getDataCheklistById(id);
    }
  }, []);

  return {
    state,
    dataChecklist,
    openModalExport,
    openModalDetail,
    openModalPicture,
    openModalVideo,
    isLoadingData,
    date,
    status,
    section_id,
    dataSection,
    navigate,
    onOpenDetail,
    onOpenBack,
    onOpenBackDetail,
    onOpenBackModalPicture,
    onOpenBackModalVideo,
    setOpenModalExport,
    setOpenModalDetail,
    setOpenModalPicture,
    setOpenModalVideo,
    getDataChecklist,
    getDataSection,
    getDataCheklistById,
    dataCheklistById,
  };
}
