import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { CorrectiveApiRepository } from "@data/api/report/corrective-api-repository";
import { Section } from "@domain/models/location/section";
import { Corrective } from "@domain/models/report/corrective";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function useCorrective() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // params data from url
  const { date, status, section_id, id } = useParams();

  //data corrective
  const [dataCorrective, setDataCorrective] = useState([]);

  //data corrective by id
  const [dataCorrectiveById, setDataCorrectiveById] = useState(null);

  //api Repository
  const correctiveRepository = new CorrectiveApiRepository();
  const sectionRepository = new SectionApiRepository();

  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);

  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openModalPicture, setOpenModalPicture] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [statusDocument, setStatusDocument] = useState(false);
  //click detail data
  const onOpenDetail = (data): void => {
    navigate("details", {
      state: {
        data: {
          id: dataCorrectiveById?.id,
          idCorrective: dataCorrectiveById?.idCorrective,
          date: dataCorrectiveById?.date,
          noMesin: dataCorrectiveById?.noMesin,
          pelaksana: dataCorrectiveById?.pelaksana,
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

  //get data corrective
  const getDataCorrective = async () => {
    setIsLoadingData(true);
    setDataCorrective([]);
    try {
      const result = await correctiveRepository.get(
        date != "null" ? date : "",
        status != "null" ? status : "",
        section_id != "null" ? section_id : ""
      );
      setTimeout(() => {
        setIsLoadingData(false);
        setDataCorrective(result);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  //  //get data cheklist by Id
  const getDataCorrectiveById = async (id: string) => {
    try {
      const result = await correctiveRepository.getDataById(id);
      setDataCorrectiveById(result);
      console.log(result, "data-by-id");
    } catch (error) {
      throw new Error(error);
    }
  };

  //get data section
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
      getDataCorrectiveById(id);
    }
  }, []);

  // useEffect(() => {
  //   setDataCorrective([
  //     {
  //       id: 1,
  //       idPreventive: "A0B12345",
  //       date: "13/10/2023",
  //       noMesin: "SR-12345",
  //       pelaksana: "Bramantra Putra",
  //       status: "closed",
  //     },
  //     {
  //       id: 2,
  //       idPreventive: "A0B1222",
  //       date: "13/10/2023",
  //       noMesin: "RS-12345",
  //       pelaksana: "Cendani Arum",
  //       status: "open",
  //     },
  //   ]);
  // }, []);

  return {
    state,
    navigate,
    dataCorrective,
    openModalExport,
    openModalDetail,
    openModalPicture,
    openModalVideo,
    onOpenDetail,
    onOpenBack,
    onOpenBackDetail,
    onOpenBackModalPicture,
    onOpenBackModalVideo,
    setOpenModalExport,
    setOpenModalDetail,
    setOpenModalPicture,
    setOpenModalVideo,
    statusDocument,
    setStatusDocument,
    isLoadingData,
    date,
    status,
    id,
    section_id,
    dataSection,
    getDataCorrective,
    getDataSection,
    dataCorrectiveById,
    getDataCorrectiveById,
  };
}
