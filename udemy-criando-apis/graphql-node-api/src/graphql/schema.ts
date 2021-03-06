import { makeExecutableSchema } from 'graphql-tools';
import {Query} from './query';
import {Mutation} from './mutation';

import { merge } from "lodash";

import { postTypes } from './resources/post/post.schema';
import { userTypes } from './resources/user/user.schema';
import { commentTypes } from './resources/comment/comment.schema';

import { commentResolvers } from './resources/comment/comment.resolvers';
import { postResolvers } from './resources/post/post.resolvers';
import { userResolvers } from './resources/user/user.resolvers';

//pega os atributos que tem igual e mescla tudo
const resolvers = merge(
  commentResolvers,
  postResolvers,
  userResolvers
);

const SchemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
      typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        postTypes,
        userTypes,
        commentTypes
      ],
      resolvers
    });