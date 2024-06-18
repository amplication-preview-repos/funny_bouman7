/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BloodDonation as PrismaBloodDonation } from "@prisma/client";

export class BloodDonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BloodDonationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bloodDonation.count(args);
  }

  async bloodDonations(
    args: Prisma.BloodDonationFindManyArgs
  ): Promise<PrismaBloodDonation[]> {
    return this.prisma.bloodDonation.findMany(args);
  }
  async bloodDonation(
    args: Prisma.BloodDonationFindUniqueArgs
  ): Promise<PrismaBloodDonation | null> {
    return this.prisma.bloodDonation.findUnique(args);
  }
  async createBloodDonation(
    args: Prisma.BloodDonationCreateArgs
  ): Promise<PrismaBloodDonation> {
    return this.prisma.bloodDonation.create(args);
  }
  async updateBloodDonation(
    args: Prisma.BloodDonationUpdateArgs
  ): Promise<PrismaBloodDonation> {
    return this.prisma.bloodDonation.update(args);
  }
  async deleteBloodDonation(
    args: Prisma.BloodDonationDeleteArgs
  ): Promise<PrismaBloodDonation> {
    return this.prisma.bloodDonation.delete(args);
  }
}