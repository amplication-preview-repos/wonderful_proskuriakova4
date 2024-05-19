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
import { ParentWhereInput } from "./ParentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParentWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentWhereInput)
  @IsOptional()
  @Field(() => ParentWhereInput, {
    nullable: true,
  })
  every?: ParentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParentWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentWhereInput)
  @IsOptional()
  @Field(() => ParentWhereInput, {
    nullable: true,
  })
  some?: ParentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParentWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentWhereInput)
  @IsOptional()
  @Field(() => ParentWhereInput, {
    nullable: true,
  })
  none?: ParentWhereInput;
}
export { ParentListRelationFilter as ParentListRelationFilter };
