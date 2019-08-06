import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  getQuotes(): string {
    return 'This will return all the quotes (update)';
  }

  createQuote(quote: any) {
    return `${quote.author} has written ${quote.title}`;
  }
}
