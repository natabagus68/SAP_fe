import { User } from "@domain/models/user/user";
import { UserRepository } from "@domain/repositories/user/user-repository";
import React, { Component } from "react";
import { api } from "../_api";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class UserApiRepository implements UserRepository {
  async getDataUser(): Promise<User[]> {
    const { data } = await api.get(`/admin/user`);
    return data?.data?.map((item) =>
      User.create({
        id: item.id,
        email: item.email,
        fullname: item.fullname,
        isActive: item?.isActive,
        avatarPath: item.avatarPath,
        role: item.role,
      })
    );
  }

  async getDataByFilter(
    page?: string,
    limit?: string,
    search?: string
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `/admin/user?limit=${limit || ""}&page=${page || ""}&search=${
          search || ""
        }`
      );
      return DefaultResponse.create({
        success: true,
        message: data.message,
        pagination: MetaPagination.create({
          page: data?.meta?.page,
          limit: data?.meta?.limit,
          totalRows: data?.meta?.totalRows,
          totalPages: data?.meta?.totalPages,
        }),
        data: data?.data?.map((item) =>
          User.create({
            id: item.id,
            email: item.email,
            fullname: item.fullname,
            isActive: item?.isActive,
            avatarPath: item.avatarPath,
            role: item.role,
          })
        ),
      });
    } catch (error) {
      return DefaultResponse.create({
        success: false,
        message: "error",
        data: [],
      });
    }
  }

  async getDataById(id: string): Promise<User> {
    try {
      const { data } = await api.get(`admin/user/${id}`);

      return User.create({
        id: data.id,
        email: data.email || "-",
        fullname: data.fullname || "-",
        avatarPath: data.avatarPath || "",
        role: data.role || "-",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(user: User): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("fullname", user.fullname);
      formData.append("email", user.email);
      formData.append("role", user.role);
      formData.append("avatarPath", user.avatarPath);
      const { data } = await api.post("/admin/user", formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async edit(user: User): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("fullname", user.fullname);
      formData.append("email", user.email);
      formData.append("role", user.role);
      if (typeof user.avatarPath == "string" || user.avatarPath.length == 0) {
        formData.append("avatarPath", "");
      } else {
        formData.append("avatarPath", user.avatarPath[0]);
      }
      //formData.append("avatarPath", user.avatarPath);
      const { data } = await api.put(`/admin/user/${user.id}`, formData);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`/admin/user/${id}`);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
