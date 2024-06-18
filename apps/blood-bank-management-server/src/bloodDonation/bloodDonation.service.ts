import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodDonationServiceBase } from "./base/bloodDonation.service.base";

@Injectable()
export class BloodDonationService extends BloodDonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
