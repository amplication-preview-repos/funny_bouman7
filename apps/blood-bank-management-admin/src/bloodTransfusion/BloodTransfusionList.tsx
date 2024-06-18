import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const BloodTransfusionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BloodTransfusions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
