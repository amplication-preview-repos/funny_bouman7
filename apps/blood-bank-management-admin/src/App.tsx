import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WardList } from "./ward/WardList";
import { WardCreate } from "./ward/WardCreate";
import { WardEdit } from "./ward/WardEdit";
import { WardShow } from "./ward/WardShow";
import { BloodDonationList } from "./bloodDonation/BloodDonationList";
import { BloodDonationCreate } from "./bloodDonation/BloodDonationCreate";
import { BloodDonationEdit } from "./bloodDonation/BloodDonationEdit";
import { BloodDonationShow } from "./bloodDonation/BloodDonationShow";
import { BloodRequestList } from "./bloodRequest/BloodRequestList";
import { BloodRequestCreate } from "./bloodRequest/BloodRequestCreate";
import { BloodRequestEdit } from "./bloodRequest/BloodRequestEdit";
import { BloodRequestShow } from "./bloodRequest/BloodRequestShow";
import { BloodTransfusionList } from "./bloodTransfusion/BloodTransfusionList";
import { BloodTransfusionCreate } from "./bloodTransfusion/BloodTransfusionCreate";
import { BloodTransfusionEdit } from "./bloodTransfusion/BloodTransfusionEdit";
import { BloodTransfusionShow } from "./bloodTransfusion/BloodTransfusionShow";
import { HospitalList } from "./hospital/HospitalList";
import { HospitalCreate } from "./hospital/HospitalCreate";
import { HospitalEdit } from "./hospital/HospitalEdit";
import { HospitalShow } from "./hospital/HospitalShow";
import { FacilityList } from "./facility/FacilityList";
import { FacilityCreate } from "./facility/FacilityCreate";
import { FacilityEdit } from "./facility/FacilityEdit";
import { FacilityShow } from "./facility/FacilityShow";
import { RegionList } from "./region/RegionList";
import { RegionCreate } from "./region/RegionCreate";
import { RegionEdit } from "./region/RegionEdit";
import { RegionShow } from "./region/RegionShow";
import { DistrictList } from "./district/DistrictList";
import { DistrictCreate } from "./district/DistrictCreate";
import { DistrictEdit } from "./district/DistrictEdit";
import { DistrictShow } from "./district/DistrictShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BloodBankManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ward"
          list={WardList}
          edit={WardEdit}
          create={WardCreate}
          show={WardShow}
        />
        <Resource
          name="BloodDonation"
          list={BloodDonationList}
          edit={BloodDonationEdit}
          create={BloodDonationCreate}
          show={BloodDonationShow}
        />
        <Resource
          name="BloodRequest"
          list={BloodRequestList}
          edit={BloodRequestEdit}
          create={BloodRequestCreate}
          show={BloodRequestShow}
        />
        <Resource
          name="BloodTransfusion"
          list={BloodTransfusionList}
          edit={BloodTransfusionEdit}
          create={BloodTransfusionCreate}
          show={BloodTransfusionShow}
        />
        <Resource
          name="Hospital"
          list={HospitalList}
          edit={HospitalEdit}
          create={HospitalCreate}
          show={HospitalShow}
        />
        <Resource
          name="Facility"
          list={FacilityList}
          edit={FacilityEdit}
          create={FacilityCreate}
          show={FacilityShow}
        />
        <Resource
          name="Region"
          list={RegionList}
          edit={RegionEdit}
          create={RegionCreate}
          show={RegionShow}
        />
        <Resource
          name="District"
          list={DistrictList}
          edit={DistrictEdit}
          create={DistrictCreate}
          show={DistrictShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
