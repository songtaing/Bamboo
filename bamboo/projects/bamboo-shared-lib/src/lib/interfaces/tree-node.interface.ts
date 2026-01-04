export interface ITreeNode<T> {
  nodeId: number;
  data: T;
  children?: ITreeNode<T>[];
  expanded?: boolean;
}
