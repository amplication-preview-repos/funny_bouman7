import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodTransfusionService } from "./bloodTransfusion.service";
import { BloodTransfusionControllerBase } from "./base/bloodTransfusion.controller.base";

@swagger.ApiTags("bloodTransfusions")
@common.Controller("bloodTransfusions")
export class BloodTransfusionController extends BloodTransfusionControllerBase {
  constructor(protected readonly service: BloodTransfusionService) {
    super(service);
  }
}
