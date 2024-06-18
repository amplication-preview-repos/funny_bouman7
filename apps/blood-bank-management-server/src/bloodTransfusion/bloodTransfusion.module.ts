import { Module } from "@nestjs/common";
import { BloodTransfusionModuleBase } from "./base/bloodTransfusion.module.base";
import { BloodTransfusionService } from "./bloodTransfusion.service";
import { BloodTransfusionController } from "./bloodTransfusion.controller";
import { BloodTransfusionResolver } from "./bloodTransfusion.resolver";

@Module({
  imports: [BloodTransfusionModuleBase],
  controllers: [BloodTransfusionController],
  providers: [BloodTransfusionService, BloodTransfusionResolver],
  exports: [BloodTransfusionService],
})
export class BloodTransfusionModule {}
