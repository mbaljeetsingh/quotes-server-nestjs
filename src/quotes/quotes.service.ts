import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {
  getQuotes(): string {
    return 'This will return all the quotes (update)';
  }

  createQuote(quote: Quote) {
    return quote;
  }
}
