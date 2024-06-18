import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const BloodDonationEdit = (props: EditProps): React.ReactElement => {
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
        <DateTimeInput label="donationDate" source="donationDate" />
        <TextInput label="donor" source="donor" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
