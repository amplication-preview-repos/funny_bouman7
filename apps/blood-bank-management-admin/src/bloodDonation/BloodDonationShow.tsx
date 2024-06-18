import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BloodDonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bloodType" source="bloodType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="donationDate" source="donationDate" />
        <TextField label="donor" source="donor" />
        <TextField label="ID" source="id" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
