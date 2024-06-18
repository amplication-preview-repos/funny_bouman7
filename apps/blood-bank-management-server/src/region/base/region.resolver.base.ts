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
import { Region } from "./Region";
import { RegionCountArgs } from "./RegionCountArgs";
import { RegionFindManyArgs } from "./RegionFindManyArgs";
import { RegionFindUniqueArgs } from "./RegionFindUniqueArgs";
import { CreateRegionArgs } from "./CreateRegionArgs";
import { UpdateRegionArgs } from "./UpdateRegionArgs";
import { DeleteRegionArgs } from "./DeleteRegionArgs";
import { DistrictFindManyArgs } from "../../district/base/DistrictFindManyArgs";
import { District } from "../../district/base/District";
import { RegionService } from "../region.service";
@graphql.Resolver(() => Region)
export class RegionResolverBase {
  constructor(protected readonly service: RegionService) {}

  async _regionsMeta(
    @graphql.Args() args: RegionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Region])
  async regions(@graphql.Args() args: RegionFindManyArgs): Promise<Region[]> {
    return this.service.regions(args);
  }

  @graphql.Query(() => Region, { nullable: true })
  async region(
    @graphql.Args() args: RegionFindUniqueArgs
  ): Promise<Region | null> {
    const result = await this.service.region(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Region)
  async createRegion(@graphql.Args() args: CreateRegionArgs): Promise<Region> {
    return await this.service.createRegion({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Region)
  async updateRegion(
    @graphql.Args() args: UpdateRegionArgs
  ): Promise<Region | null> {
    try {
      return await this.service.updateRegion({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Region)
  async deleteRegion(
    @graphql.Args() args: DeleteRegionArgs
  ): Promise<Region | null> {
    try {
      return await this.service.deleteRegion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [District], { name: "districts" })
  async findDistricts(
    @graphql.Parent() parent: Region,
    @graphql.Args() args: DistrictFindManyArgs
  ): Promise<District[]> {
    const results = await this.service.findDistricts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}