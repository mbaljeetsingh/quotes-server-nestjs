import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuoteDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly author: string;
}
