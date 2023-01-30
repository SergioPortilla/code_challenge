export interface ResponseApi<T> {
  count: number;
  next: URL;
  previous: URL;
  results: T;
}
