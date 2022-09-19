export default interface PostRepositoryInterface<T> {
  all(): Promise<T[]>;
  find(id: number): Promise<T>;
  create(data: object): Promise<T>;
}
