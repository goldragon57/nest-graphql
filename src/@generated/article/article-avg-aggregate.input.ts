import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleAvgAggregateInput {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: true;
}
