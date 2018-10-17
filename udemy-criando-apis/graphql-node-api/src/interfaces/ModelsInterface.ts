import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { CommentModel } from "../models/CommentModel";

export interface ModelsInterface {
  
  Comment: CommentModel;
  User: UserModel;
  Post : PostModel;
  
}