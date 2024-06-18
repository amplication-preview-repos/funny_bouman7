import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodDonationService } from "./bloodDonation.service";
import { BloodDonationControllerBase } from "./base/bloodDonation.controller.base";

@swagger.ApiTags("bloodDonations")
@common.Controller("bloodDonations")
export class BloodDonationController extends BloodDonationControllerBase {
  constructor(protected readonly service: BloodDonationService) {
    super(service);
  }
}
