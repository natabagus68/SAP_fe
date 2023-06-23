import { MonitoringRepository } from "@domain/repositories/monitoring/monitoring-repository";
import React, { Component } from "react";
import { api } from "../_api";
import { Monitoring } from "@domain/models/monitoring/monitoring";
import { DefaultResponse } from "@domain/models/default-response";
import { MetaPagination } from "@domain/models/meta-pagination";

export class MonitoringApiRepository implements MonitoringRepository {
  async getDataMonitoring(): Promise<Monitoring[]> {
    const { data } = await api.get(`monitoring`);

    return data?.data?.map((item) =>
      Monitoring.create({
        id: item.id,
        qrTagNumber: item.qrTagNumber,
        qrTagNumberDetail: item.qrTagNumberDetail,
        qtyQrTag: item.qtyQrTag,
        beforeCastingAt: item.beforeCastingAt || "-",
        castingAt: item.castingAt || "-",
        beforeMachiningAt: item.beforeMachiningAt || "-",
        afterMachiningAt: item.afterMachiningAt || "-",
      })
    );
  }

  async getDataByFilter(
    page?: string,
    limit?: string,
    order?: string
  ): Promise<DefaultResponse> {
    try {
      const { data } = await api.get(
        `monitoring?order=${order || ""}&page=${page || ""}&limit=${
          limit || ""
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
          prevPage: data?.meta?.prevPage,
          nextPage: data?.meta?.nextPage,
        }),
        data: data?.data?.map((item) =>
          Monitoring.create({
            id: item.id,
            qrTagNumber: item.qrTagNumber,
            qrTagNumberDetail: item.qrTagNumberDetail,
            qtyQrTag: item.qtyQrTag,
            beforeCastingAt: item.beforeCastingAt,
            castingAt: item.castingAt,
            beforeMachiningAt: item.beforeMachiningAt,
            afterMachiningAt: item.afterMachiningAt,
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
}
