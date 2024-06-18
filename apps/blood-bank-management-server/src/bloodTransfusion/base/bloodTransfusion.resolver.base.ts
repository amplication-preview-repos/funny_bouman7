/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BloodTransfusion } from "./BloodTransfusion";
import { BloodTransfusionCountArgs } from "./BloodTransfusionCountArgs";
import { BloodTransfusionFindManyArgs } from "./BloodTransfusionFindManyArgs";
import { BloodTransfusionFindUniqueArgs } from "./BloodTransfusionFindUniqueArgs";
import { CreateBloodTransfusionArgs } from "./CreateBloodTransfusionArgs";
import { UpdateBloodTransfusionArgs } from "./UpdateBloodTransfusionArgs";
import { DeleteBloodTransfusionArgs } from "./DeleteBloodTransfusionArgs";
import { Facility } from "../../facility/base/Facility";
import { BloodTransfusionService } from "../bloodTransfusion.service";
@graphql.Resolver(() => BloodTransfusion)
export class BloodTransfusionResolverBase {
  constructor(protected readonly service: BloodTransfusionService) {}

  async _bloodTransfusionsMeta(
    @graphql.Args() args: BloodTransfusionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BloodTransfusion])
  async bloodTransfusions(
    @graphql.Args() args: BloodTransfusionFindManyArgs
  ): Promise<BloodTransfusion[]> {
    return this.service.bloodTransfusions(args);
  }

  @graphql.Query(() => BloodTransfusion, { nullable: true })
  async bloodTransfusion(
    @graphql.Args() args: BloodTransfusionFindUniqueArgs
  ): Promise<BloodTransfusion | null> {
    const result = await this.service.bloodTransfusion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BloodTransfusion)
  async createBloodTransfusion(
    @graphql.Args() args: CreateBloodTransfusionArgs
  ): Promise<BloodTransfusion> {
    return await this.service.createBloodTransfusion({
      ...args,
      data: {
        ...args.data,

        facility: args.data.facility
          ? {
              connect: args.data.facility,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => BloodTransfusion)
  async updateBloodTransfusion(
    @graphql.Args() args: UpdateBloodTransfusionArgs
  ): Promise<BloodTransfusion | null> {
    try {
      return await this.service.updateBloodTransfusion({
        ...args,
        data: {
          ...args.data,

          facility: args.data.facility
            ? {
                connect: args.data.facility,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BloodTransfusion)
  async deleteBloodTransfusion(
    @graphql.Args() args: DeleteBloodTransfusionArgs
  ): Promise<BloodTransfusion | null> {
    try {
      return await this.service.deleteBloodTransfusion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Facility, {
    nullable: true,
    name: "facility",
  })
  async getFacility(
    @graphql.Parent() parent: BloodTransfusion
  ): Promise<Facility | null> {
    const result = await this.service.getFacility(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
