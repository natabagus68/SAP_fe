import { UniqueMessageIdProvider } from "mqtt";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useUserModel() {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [roleActive, setRoleActive] = useState(false);
  const [openModalFilter, setOpenModalFilter] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [openModalPreviewPhoto, setOpenModalPreviewPhoto] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const onNavigate = (path) => {
    navigate(path);
  };

  const onPreviewPhotoOpen = () => {
    setOpenModalPreviewPhoto(true);
  };

  const onPreviewPhotoClose = () => {
    setOpenModalPreviewPhoto(false);
  };

  const onActive = () => {
    setRoleActive(true);
  };

  const onInactive = () => {
    setRoleActive(false);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirmModal(true);
  };

  const onDeleteImageUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current.value = ""
  };

  const onResetImageUpdate = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    imageRef.current.click()
  };

  const onPasswordOpen = () => {
    setOpenModalPassword(true);
  };

  const onPasswordClose = () => {
    setOpenModalPassword(false);
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
    imageRef,
    roleActive,
    openModalPreviewPhoto,
    openModalFilter,
    openModalDelete,
    openModalPassword,
    openConfirmModal,
    onNavigate,
    onFormSubmit,
    onConfirmClose,
    onFilterOpen,
    onFilterClose,
    onDeleteOpen,
    onDeleteClose,
    onPasswordOpen,
    onPasswordClose,
    onActive,
    onInactive,
    onPreviewPhotoOpen,
    onPreviewPhotoClose,
    onDeleteImageUpdate,
    onResetImageUpdate,
  };
}
