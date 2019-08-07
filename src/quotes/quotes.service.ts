import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {
  quotes: Quote[] = [
    {
      id: '1',
      title: 'Impossible is for the unwilling',
      author: 'John Keats',
    },
    {
      id: '2',
      title: 'No pressure, no diamonds',
      author: 'Thomas Carlyle',
    },
    {
      id: '3',
      title: 'My life is my message',
      author: 'Mahatma Gandhi',
    },
  ];
  getQuotes(): Quote[] {
    return this.quotes;
  }

  getQuote(id: string): Quote {
    return this.quotes.find(quote => quote.id === id);
  }

  createQuote(quote: Quote) {
    return quote;
  }

  updateQuote(id: string, updateQuoteDto): Quote {
    const data = this.quotes.find(quote => quote.id === id);
    data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
    data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
    return data;
  }

  deleteQuote(id: string): Quote {
    return this.quotes.find(quote => quote.id === id);
  }
}
