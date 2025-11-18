import 'reflect-metadata'

// biome-ignore lint/suspicious/noExplicitAny: to allow hmr
declare const module: any

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const port = Number(process.env['PORT'] ?? 3001)
  await app.listen(port)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

void bootstrap()
