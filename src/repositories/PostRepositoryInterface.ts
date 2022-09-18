import Post from '../post/post.model';

export default interface PostRepositoryInterface {
  all(): Promise<Post[]>;
  find(id: number): Promise<Post>;
  create(data: object): Promise<Post>;
}
