import { Module } from "@nestjs/common";
import { DistrictModuleBase } from "./base/district.module.base";
import { DistrictService } from "./district.service";
import { DistrictController } from "./district.controller";
import { DistrictResolver } from "./district.resolver";

@Module({
  imports: [DistrictModuleBase],
  controllers: [DistrictController],
  providers: [DistrictService, DistrictResolver],
  exports: [DistrictService],
})
export class DistrictModule {}