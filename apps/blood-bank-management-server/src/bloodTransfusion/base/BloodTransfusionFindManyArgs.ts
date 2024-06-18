/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BloodTransfusionWhereInput } from "./BloodTransfusionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BloodTransfusionOrderByInput } from "./BloodTransfusionOrderByInput";

@ArgsType()
class BloodTransfusionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BloodTransfusionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BloodTransfusionWhereInput, { nullable: true })
  @Type(() => BloodTransfusionWhereInput)
  where?: BloodTransfusionWhereInput;

  @ApiProperty({
    required: false,
    type: [BloodTransfusionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BloodTransfusionOrderByInput], { nullable: true })
  @Type(() => BloodTransfusionOrderByInput)
  orderBy?: Array<BloodTransfusionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BloodTransfusionFindManyArgs as BloodTransfusionFindManyArgs };
