import TraceabilityApiRepository from "@data/api/traceability/traceability-api-repository";
import TraceabilityPreventiveChecklistApiRepository from "@data/api/traceability/traceability-preventive-checklist-api-repository";
import { Traceability } from "@domain/models/traceability/traceability";
import { TraceabilityPreventiveChecklist } from "@domain/models/traceability/traceability-preventive-checklist"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useTraceability() {
  const navigate = useNavigate();
  const { id, type } = useParams()


  //data Traceability
  const [dataTraceability, setDataTraceability] = useState<Traceability[]>([]);
  const [dataTraceabilityById, setDataTraceabilityById] = useState<TraceabilityPreventiveChecklist>(null);
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);

  const [isLoadingData, setIsLoadingData] = useState(true)


  // init api traceability
  const traceabilityApi = new TraceabilityApiRepository()
  const traceabilityPreventiveChecklistApi = new TraceabilityPreventiveChecklistApiRepository()

  //click detail data
  const onOpenDetail = (type:string, id:string): void => {
    navigate(`detail/${type}/${id}`);
    getTraceabilityByid(id, type)
  };
  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };

  const getTraceability =async () => {
    setIsLoadingData(true)
    try {
      const result = await traceabilityApi.get()
      
      setDataTraceability(result)
     
      setIsLoadingData(false)
      
    } catch (error) {
      console.log(error);
    }
  }

  const getTraceabilityByid = async (id:string, type:string) => {
    setIsLoadingData(true)
    try {
      const result = await traceabilityPreventiveChecklistApi.getById(id, type)
      
      setDataTraceabilityById(result)
     
      setIsLoadingData(false)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTraceability()
  }, []);

  useEffect(() => {
    if (id && type) {
      getTraceabilityByid(id, type)      
    }
  }, [id, type]);

  return {
    dataTraceability,
    openModalExport,
    onOpenDetail,
    onOpenBack,
    setOpenModalExport,
    isLoadingData,
    dataTraceabilityById,
    type
  };
}
