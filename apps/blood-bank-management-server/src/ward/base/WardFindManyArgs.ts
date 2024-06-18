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
import { WardWhereInput } from "./WardWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WardOrderByInput } from "./WardOrderByInput";

@ArgsType()
class WardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WardWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WardWhereInput, { nullable: true })
  @Type(() => WardWhereInput)
  where?: WardWhereInput;

  @ApiProperty({
    required: false,
    type: [WardOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WardOrderByInput], { nullable: true })
  @Type(() => WardOrderByInput)
  orderBy?: Array<WardOrderByInput>;

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

export { WardFindManyArgs as WardFindManyArgs };