import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodTransfusionServiceBase } from "./base/bloodTransfusion.service.base";

@Injectable()
export class BloodTransfusionService extends BloodTransfusionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
