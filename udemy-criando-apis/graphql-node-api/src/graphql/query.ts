import { PostQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';
import { commentQueries } from './resources/comment/comment.schema';

const Query = `

  type Query {
    ${PostQueries}
    ${userQueries}
    ${commentQueries}
  }
  
`;

export {
  Query
}