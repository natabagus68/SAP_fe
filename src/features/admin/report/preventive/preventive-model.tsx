import { SectionApiRepository } from "@data/api/location/section-api-repository";
import { PreventiveApiRepository } from "@data/api/report/checklist-api-repository copy";
import { Section } from "@domain/models/location/section";
import { Preventive } from "@domain/models/report/preventive";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function usePreventive() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // params data from url
  const { date, status, section_id } = useParams();
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [openModalPicture, setOpenModalPicture] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [statusDocument, setStatusDocument] = useState(false);

  //state loading data
  const [isLoadingData, setIsLoadingData] = useState(true);
  //state data Checklist
  const [dataPreventive, setDataPreventive] = useState<Preventive[]>([]);
  //state data Section
  const [dataSection, setDataSection] = useState<Section[]>([]);

  //api Repository
  const preventiveRepository = new PreventiveApiRepository();
  const sectionRepository = new SectionApiRepository();

  //click detail data
  const onOpenDetail = (data): void => {
    navigate("details", {
      state: {
        data: {
          id: state?.data?.id,
          idPreventive: state?.data?.idPreventive,
          date: state?.data?.date,
          noMesin: state?.data?.noMesin,
          pelaksana: state?.data?.pelaksana,
        },
      },
    });
  };

  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  const onOpenBackDetails = (): void => {
    navigate("../details");
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

  // get data Preventive
  const getDataPreventive = async () => {
    setIsLoadingData(true);
    setDataPreventive([]);
    try {
      //date: string, status: string, section_id: string
      const result = await preventiveRepository.get(
        date != "null" ? date : "",
        status != "null" ? status : "",
        section_id != "null" ? section_id : ""
      );
      setTimeout(() => {
        setIsLoadingData(false);
        setDataPreventive(result);
      }, 500);
    } catch (error) {
      console.log(error);
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

  return {
    state,
    dataPreventive,
    openModalExport,
    openModalDetail,
    openModalPicture,
    openModalVideo,
    statusDocument,
    isLoadingData,
    dataSection,
    date,
    status,
    section_id,
    navigate,
    onOpenDetail,
    onOpenBack,
    onOpenBackDetail,
    onOpenBackDetails,
    onOpenBackModalPicture,
    onOpenBackModalVideo,
    setOpenModalExport,
    setOpenModalDetail,
    setOpenModalPicture,
    setOpenModalVideo,
    setStatusDocument,
    getDataSection,
    getDataPreventive,
  };
}
