import { Model } from 'objection';

export default class Post extends Model {
  static tableName = 'posts';

  id: number;
  title: string;
  content: string;
}
