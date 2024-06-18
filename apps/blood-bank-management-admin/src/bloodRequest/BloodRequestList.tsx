import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BloodRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BloodRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bloodType" source="bloodType" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="fulfilled" source="fulfilled" />
        <TextField label="ID" source="id" />
        <TextField label="quantity" source="quantity" />
        <TextField label="requestDate" source="requestDate" />
        <TextField label="requester" source="requester" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
