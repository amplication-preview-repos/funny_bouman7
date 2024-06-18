import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodRequestServiceBase } from "./base/bloodRequest.service.base";

@Injectable()
export class BloodRequestService extends BloodRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
