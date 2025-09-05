import { AuthController } from "@/app/auth/auth.controller";
import { AuthService } from "@/app/auth/auth.service";
import { JwtStrategy } from "@/app/auth/jwt/jwt.strategy";
import { UserModule } from "@/app/user/user.module";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

@Module({
   imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      UserModule,
      JwtModule.registerAsync({
         inject: [ConfigService],
         useFactory:(config: ConfigService) => ({
            secret: config.get<string>("JWT_SECRET"),
            signOptions: { expiresIn: config.get<string>("JWT_EXPIRES_IN") || '1h' },
         }),
      }),
   ],
   providers: [AuthService, JwtStrategy],
   controllers: [AuthController],
   exports:[AuthService, JwtStrategy],
})
export class AuthModule{}