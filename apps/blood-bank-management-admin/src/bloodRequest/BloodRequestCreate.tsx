import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BloodRequestCreate = (props: CreateProps): React.ReactElement => {
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
        <BooleanInput label="fulfilled" source="fulfilled" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="requestDate" source="requestDate" />
        <TextInput label="requester" source="requester" />
      </SimpleForm>
    </Create>
  );
};
