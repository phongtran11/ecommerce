import { ConsoleLogger } from '@nestjs/common';

export class AppLogger extends ConsoleLogger {
  #appName = 'ECOMMERCE_APP';

  protected override formatPid(pid: number): string {
    return `[${this.#appName}] ${pid} - `;
  }
}
