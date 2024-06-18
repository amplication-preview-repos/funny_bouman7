import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DistrictTitle } from "../district/DistrictTitle";
import { HospitalTitle } from "../hospital/HospitalTitle";

export const WardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="district.id"
          reference="District"
          label="District"
        >
          <SelectInput optionText={DistrictTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="hospitals"
          reference="Hospital"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HospitalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
