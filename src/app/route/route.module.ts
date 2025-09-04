import { RoleModule } from "@/app/role/role.module";
import { RouteService } from "@/app/route/route.service";
import { Route } from "@/database/entities/route.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
   imports:[
      TypeOrmModule.forFeature([Route]),
      RoleModule,
   ],
   providers: [RouteService],
   exports: [RouteService],
})
export class RouteModule{}