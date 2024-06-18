import { Module } from "@nestjs/common";
import { WardModule } from "./ward/ward.module";
import { BloodDonationModule } from "./bloodDonation/bloodDonation.module";
import { BloodRequestModule } from "./bloodRequest/bloodRequest.module";
import { BloodTransfusionModule } from "./bloodTransfusion/bloodTransfusion.module";
import { HospitalModule } from "./hospital/hospital.module";
import { FacilityModule } from "./facility/facility.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    WardModule,
    BloodDonationModule,
    BloodRequestModule,
    BloodTransfusionModule,
    HospitalModule,
    FacilityModule,
    RegionModule,
    DistrictModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
