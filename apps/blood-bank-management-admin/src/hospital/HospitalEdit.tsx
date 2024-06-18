import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WardTitle } from "../ward/WardTitle";

export const HospitalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="ward.id" reference="Ward" label="Ward">
          <SelectInput optionText={WardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
