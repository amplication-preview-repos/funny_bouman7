import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { FacilityTitle } from "../facility/FacilityTitle";

export const BloodTransfusionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="bloodType"
          label="bloodType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="facility.id"
          reference="Facility"
          label="facility"
        >
          <SelectInput optionText={FacilityTitle} />
        </ReferenceInput>
        <TextInput label="patient" source="patient" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="transfusionDate" source="transfusionDate" />
      </SimpleForm>
    </Create>
  );
};
