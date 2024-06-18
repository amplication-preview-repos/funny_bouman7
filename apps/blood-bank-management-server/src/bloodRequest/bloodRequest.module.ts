import { Module } from "@nestjs/common";
import { BloodRequestModuleBase } from "./base/bloodRequest.module.base";
import { BloodRequestService } from "./bloodRequest.service";
import { BloodRequestController } from "./bloodRequest.controller";
import { BloodRequestResolver } from "./bloodRequest.resolver";

@Module({
  imports: [BloodRequestModuleBase],
  controllers: [BloodRequestController],
  providers: [BloodRequestService, BloodRequestResolver],
  exports: [BloodRequestService],
})
export class BloodRequestModule {}
