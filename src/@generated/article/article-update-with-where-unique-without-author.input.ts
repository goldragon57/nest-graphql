import { Field, InputType } from '@nestjs/graphql';

import { ArticleUncheckedUpdateWithoutAuthorInput } from './article-unchecked-update-without-author.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: false,
    })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, {
        nullable: false,
    })
    data!: ArticleUpdateWithoutAuthorInput | ArticleUncheckedUpdateWithoutAuthorInput;
}
