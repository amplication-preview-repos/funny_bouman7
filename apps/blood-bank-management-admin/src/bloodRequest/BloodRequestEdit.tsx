import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BloodRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
