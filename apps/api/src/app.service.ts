import { getHelloWorld } from '@cook-me/shared-utils'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getState() {
    return {
      status: 'ohk',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      message: getHelloWorld(),
    } as const
  }
}
