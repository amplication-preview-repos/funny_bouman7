import * as graphql from "@nestjs/graphql";
import { DistrictResolverBase } from "./base/district.resolver.base";
import { District } from "./base/District";
import { DistrictService } from "./district.service";

@graphql.Resolver(() => District)
export class DistrictResolver extends DistrictResolverBase {
  constructor(protected readonly service: DistrictService) {
    super(service);
  }
}
