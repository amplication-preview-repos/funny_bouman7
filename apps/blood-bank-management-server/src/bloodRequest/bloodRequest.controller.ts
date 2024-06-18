import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodRequestService } from "./bloodRequest.service";
import { BloodRequestControllerBase } from "./base/bloodRequest.controller.base";

@swagger.ApiTags("bloodRequests")
@common.Controller("bloodRequests")
export class BloodRequestController extends BloodRequestControllerBase {
  constructor(protected readonly service: BloodRequestService) {
    super(service);
  }
}
