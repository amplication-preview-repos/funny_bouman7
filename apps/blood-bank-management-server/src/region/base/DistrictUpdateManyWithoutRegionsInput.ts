/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DistrictWhereUniqueInput } from "../../district/base/DistrictWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DistrictUpdateManyWithoutRegionsInput {
  @Field(() => [DistrictWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DistrictWhereUniqueInput],
  })
  connect?: Array<DistrictWhereUniqueInput>;

  @Field(() => [DistrictWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DistrictWhereUniqueInput],
  })
  disconnect?: Array<DistrictWhereUniqueInput>;

  @Field(() => [DistrictWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DistrictWhereUniqueInput],
  })
  set?: Array<DistrictWhereUniqueInput>;
}

export { DistrictUpdateManyWithoutRegionsInput as DistrictUpdateManyWithoutRegionsInput };
