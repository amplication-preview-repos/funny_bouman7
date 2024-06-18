/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { BloodTransfusionUpdateManyWithoutFacilitiesInput } from "./BloodTransfusionUpdateManyWithoutFacilitiesInput";
import { Type } from "class-transformer";
import { EnumFacilityTypeField } from "./EnumFacilityTypeField";

@InputType()
class FacilityUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => BloodTransfusionUpdateManyWithoutFacilitiesInput,
  })
  @ValidateNested()
  @Type(() => BloodTransfusionUpdateManyWithoutFacilitiesInput)
  @IsOptional()
  @Field(() => BloodTransfusionUpdateManyWithoutFacilitiesInput, {
    nullable: true,
  })
  bloodTransfusions?: BloodTransfusionUpdateManyWithoutFacilitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumFacilityTypeField,
  })
  @IsEnum(EnumFacilityTypeField)
  @IsOptional()
  @Field(() => EnumFacilityTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { FacilityUpdateInput as FacilityUpdateInput };
