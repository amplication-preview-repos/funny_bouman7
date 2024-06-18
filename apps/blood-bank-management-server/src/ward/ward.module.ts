import { Module } from "@nestjs/common";
import { WardModuleBase } from "./base/ward.module.base";
import { WardService } from "./ward.service";
import { WardController } from "./ward.controller";
import { WardResolver } from "./ward.resolver";

@Module({
  imports: [WardModuleBase],
  controllers: [WardController],
  providers: [WardService, WardResolver],
  exports: [WardService],
})
export class WardModule {}
