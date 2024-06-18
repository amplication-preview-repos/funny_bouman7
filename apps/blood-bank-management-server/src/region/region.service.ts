import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegionServiceBase } from "./base/region.service.base";

@Injectable()
export class RegionService extends RegionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
