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
import { WardWhereUniqueInput } from "./WardWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class WardFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => WardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WardWhereUniqueInput)
  @Field(() => WardWhereUniqueInput, { nullable: false })
  where!: WardWhereUniqueInput;
}

export { WardFindUniqueArgs as WardFindUniqueArgs };