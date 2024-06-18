import * as graphql from "@nestjs/graphql";
import { BloodDonationResolverBase } from "./base/bloodDonation.resolver.base";
import { BloodDonation } from "./base/BloodDonation";
import { BloodDonationService } from "./bloodDonation.service";

@graphql.Resolver(() => BloodDonation)
export class BloodDonationResolver extends BloodDonationResolverBase {
  constructor(protected readonly service: BloodDonationService) {
    super(service);
  }
}
