import * as graphql from "@nestjs/graphql";
import { WardResolverBase } from "./base/ward.resolver.base";
import { Ward } from "./base/Ward";
import { WardService } from "./ward.service";

@graphql.Resolver(() => Ward)
export class WardResolver extends WardResolverBase {
  constructor(protected readonly service: WardService) {
    super(service);
  }
}
