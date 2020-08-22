import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserCreateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput | UserCreateWithoutFollowingInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[] | null;
}
