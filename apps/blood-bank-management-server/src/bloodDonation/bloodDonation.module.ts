import { Module } from "@nestjs/common";
import { BloodDonationModuleBase } from "./base/bloodDonation.module.base";
import { BloodDonationService } from "./bloodDonation.service";
import { BloodDonationController } from "./bloodDonation.controller";
import { BloodDonationResolver } from "./bloodDonation.resolver";

@Module({
  imports: [BloodDonationModuleBase],
  controllers: [BloodDonationController],
  providers: [BloodDonationService, BloodDonationResolver],
  exports: [BloodDonationService],
})
export class BloodDonationModule {}
