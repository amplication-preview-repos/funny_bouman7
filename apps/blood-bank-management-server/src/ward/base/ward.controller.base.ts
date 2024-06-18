/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WardService } from "../ward.service";
import { WardCreateInput } from "./WardCreateInput";
import { Ward } from "./Ward";
import { WardFindManyArgs } from "./WardFindManyArgs";
import { WardWhereUniqueInput } from "./WardWhereUniqueInput";
import { WardUpdateInput } from "./WardUpdateInput";
import { HospitalFindManyArgs } from "../../hospital/base/HospitalFindManyArgs";
import { Hospital } from "../../hospital/base/Hospital";
import { HospitalWhereUniqueInput } from "../../hospital/base/HospitalWhereUniqueInput";

export class WardControllerBase {
  constructor(protected readonly service: WardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ward })
  async createWard(@common.Body() data: WardCreateInput): Promise<Ward> {
    return await this.service.createWard({
      data: {
        ...data,

        district: data.district
          ? {
              connect: data.district,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        district: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ward] })
  @ApiNestedQuery(WardFindManyArgs)
  async wards(@common.Req() request: Request): Promise<Ward[]> {
    const args = plainToClass(WardFindManyArgs, request.query);
    return this.service.wards({
      ...args,
      select: {
        createdAt: true,

        district: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ward(
    @common.Param() params: WardWhereUniqueInput
  ): Promise<Ward | null> {
    const result = await this.service.ward({
      where: params,
      select: {
        createdAt: true,

        district: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWard(
    @common.Param() params: WardWhereUniqueInput,
    @common.Body() data: WardUpdateInput
  ): Promise<Ward | null> {
    try {
      return await this.service.updateWard({
        where: params,
        data: {
          ...data,

          district: data.district
            ? {
                connect: data.district,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          district: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWard(
    @common.Param() params: WardWhereUniqueInput
  ): Promise<Ward | null> {
    try {
      return await this.service.deleteWard({
        where: params,
        select: {
          createdAt: true,

          district: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/hospitals")
  @ApiNestedQuery(HospitalFindManyArgs)
  async findHospitals(
    @common.Req() request: Request,
    @common.Param() params: WardWhereUniqueInput
  ): Promise<Hospital[]> {
    const query = plainToClass(HospitalFindManyArgs, request.query);
    const results = await this.service.findHospitals(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        ward: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hospitals")
  async connectHospitals(
    @common.Param() params: WardWhereUniqueInput,
    @common.Body() body: HospitalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hospitals: {
        connect: body,
      },
    };
    await this.service.updateWard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hospitals")
  async updateHospitals(
    @common.Param() params: WardWhereUniqueInput,
    @common.Body() body: HospitalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hospitals: {
        set: body,
      },
    };
    await this.service.updateWard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hospitals")
  async disconnectHospitals(
    @common.Param() params: WardWhereUniqueInput,
    @common.Body() body: HospitalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hospitals: {
        disconnect: body,
      },
    };
    await this.service.updateWard({
      where: params,
      data,
      select: { id: true },
    });
  }
}