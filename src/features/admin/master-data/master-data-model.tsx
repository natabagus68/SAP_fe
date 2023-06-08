import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useMasterDataModel() {
  const navigate = useNavigate();
  const [openModalFilter, setOpenModalFilter] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const onNavigate = (path) => {
    navigate(path);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirmModal(true);
  };

  const onDeleteOpen = () => {
    setOpenModalDelete(true);
  };

  const onDeleteClose = () => {
    setOpenModalDelete(false);
  };

  const onConfirmClose = () => {
    setOpenConfirmModal(false);
  };

  const onFilterOpen = () => {
    setOpenModalFilter(true);
  };

  const onFilterClose = () => {
    setOpenModalFilter(false);
  };

  return {
    openModalFilter,
    openModalDelete,
    openConfirmModal,
    onNavigate,
    onFormSubmit,
    onConfirmClose,
    onFilterOpen,
    onFilterClose,
    onDeleteOpen,
    onDeleteClose,
  };
}
