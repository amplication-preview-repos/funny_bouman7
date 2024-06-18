import * as graphql from "@nestjs/graphql";
import { BloodRequestResolverBase } from "./base/bloodRequest.resolver.base";
import { BloodRequest } from "./base/BloodRequest";
import { BloodRequestService } from "./bloodRequest.service";

@graphql.Resolver(() => BloodRequest)
export class BloodRequestResolver extends BloodRequestResolverBase {
  constructor(protected readonly service: BloodRequestService) {
    super(service);
  }
}
