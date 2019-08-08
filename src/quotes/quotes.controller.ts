import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Logger,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}
  @Get()
  getQuotes(): Promise<Quote[]> {
    Logger.log('New Quotes API Request');
    return this.quotesService.getQuotes();
  }

  @ApiImplicitParam({ name: 'id' })
  @Get(':id')
  getQuote(@Param('id') id): Promise<Quote> {
    Logger.log('New Quotes API Request');
    return this.quotesService.getQuote(id);
  }

  @Post()
  createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
    return this.quotesService.createQuote(createQuoteDto);
  }

  @ApiImplicitParam({ name: 'id' })
  @Put(':id')
  updateQuote(
    @Param('id') id,
    @Body() updateQuoteDto: CreateQuoteDto,
  ): Promise<Quote> {
    return this.quotesService.updateQuote(id, updateQuoteDto);
  }

  @ApiImplicitParam({ name: 'id' })
  @Delete(':id')
  deleteQuote(@Param('id') id): Promise<any> {
    return this.quotesService.deleteQuote(id);
  }
}
