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

import { RegionTitle } from "../region/RegionTitle";
import { WardTitle } from "../ward/WardTitle";

export const DistrictCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="region.id" reference="Region" label="Region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="wards"
          reference="Ward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WardTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
