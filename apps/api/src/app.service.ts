import { getHelloWorld } from '@my-project/shared-utils'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getState() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      message: getHelloWorld(),
    } as const
  }
}
