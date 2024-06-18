import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DistrictTitle } from "../district/DistrictTitle";
import { HospitalTitle } from "../hospital/HospitalTitle";

export const WardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
