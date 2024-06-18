import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const BloodTransfusionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bloodType" source="bloodType" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="facility"
          source="facility.id"
          reference="Facility"
        >
          <TextField source={FACILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="patient" source="patient" />
        <TextField label="quantity" source="quantity" />
        <TextField label="transfusionDate" source="transfusionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
