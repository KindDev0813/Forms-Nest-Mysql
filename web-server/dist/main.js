"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: true
    });
    app.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 * 6000 * 24 }
    }));
    await app.listen(4005);
}
bootstrap();
//# sourceMappingURL=main.js.map