import TraceabilityApiRepository from "@data/api/traceavility/traceability-api-repository";
import TraceabilityPreventiveApiRepository from "@data/api/traceavility/traceability-preventive-api-repository";
import { Traceability } from "@domain/models/traceability/traceability";
import { TraceabilityPreventive } from '@domain/models/traceability/traceability-preventive';
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function useTraceability() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams()
  //data Traceability
  const [dataTraceability, setDataTraceability] = useState<Traceability[]>([]);
  const [dataTraceabilityPreventive, setDataTraceabilityPreventive] = useState<TraceabilityPreventive>(null);
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);

  const [isLoadingData, setIsLoadingData] = useState(true)

  // init api traceability
  const traceabilityApi = new TraceabilityApiRepository()
  const traceabilityPreventiveApi = new TraceabilityPreventiveApiRepository()

  //click detail data
  const onOpenDetail = (type:string, id:string): void => {
    navigate(`detail/${id}`, {
      state: {
        type: type,
      },
    });
    getTraceabilityPreventive(id)
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

  const getTraceabilityPreventive = async (id:string) => {
    setIsLoadingData(true)
    try {
      const result = await traceabilityPreventiveApi.getById(id)
      
      setDataTraceabilityPreventive(result)
     
      setIsLoadingData(false)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTraceability()
  }, []);
  useEffect(() => {
    if (id) {
      getTraceabilityPreventive(id)      
    }
  }, [id]);

  return {
    state,
    dataTraceability,
    openModalExport,
    onOpenDetail,
    onOpenBack,
    setOpenModalExport,
    isLoadingData,
    dataTraceabilityPreventive
  };
}
