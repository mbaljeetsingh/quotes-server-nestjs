import { Controller, Get } from '@nestjs/common';

@Controller('quotes')
export class QuotesController {
  @Get()
  getQuotes(): string {
    return 'hello from quotes';
  }
}
