import * as graphql from "@nestjs/graphql";
import { FacilityResolverBase } from "./base/facility.resolver.base";
import { Facility } from "./base/Facility";
import { FacilityService } from "./facility.service";

@graphql.Resolver(() => Facility)
export class FacilityResolver extends FacilityResolverBase {
  constructor(protected readonly service: FacilityService) {
    super(service);
  }
}
