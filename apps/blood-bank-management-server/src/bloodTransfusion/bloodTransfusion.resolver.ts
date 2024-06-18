import * as graphql from "@nestjs/graphql";
import { BloodTransfusionResolverBase } from "./base/bloodTransfusion.resolver.base";
import { BloodTransfusion } from "./base/BloodTransfusion";
import { BloodTransfusionService } from "./bloodTransfusion.service";

@graphql.Resolver(() => BloodTransfusion)
export class BloodTransfusionResolver extends BloodTransfusionResolverBase {
  constructor(protected readonly service: BloodTransfusionService) {
    super(service);
  }
}
