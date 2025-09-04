import { Module } from '@nestjs/common';
import { HomeModule } from '@/home/home.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@/database/database.module';
import { RoleModule } from '@/app/role/role.module';
import { UserModule } from '@/app/user/user.module';
import { RouteModule } from '@/app/route/route.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    HomeModule,
    RoleModule,
    UserModule,
    RouteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
