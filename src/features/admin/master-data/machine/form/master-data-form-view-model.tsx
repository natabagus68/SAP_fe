import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Machine } from "@domain/models/machine/machine";
import { MachineRepository } from "@domain/repositories/machine/machine-repository";
import { MachineApiRepository } from "@data/api/machine/machine-api-repository";

export const useMasterDataform = () => {
  const navigate = useNavigate();
  const machineRepo: MachineRepository = new MachineApiRepository();
  const { id } = useParams();
  const [form, setForm] = useState<Machine>(
    Machine.create({
      name: "",
      description: "",
      machineCode: "",
      location: "",
    })
  );

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return Machine.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    id
      ? machineRepo.edit(form).then(() => {
          navigate(-1);
        })
      : machineRepo.create(form).then(() => navigate(-1));
  };

  return {
    id,
    form,
    handleForm,
    onSubmit,
  };
};
