export interface ICacheService {
  get(key: string): string | null;
  getKeys(): string[];
  set(key: string, value: string, expire?: Date): void;
  has(key: string): boolean;
  length(): number;
  remove(key: string): void;
  removeAll(): void;
}
