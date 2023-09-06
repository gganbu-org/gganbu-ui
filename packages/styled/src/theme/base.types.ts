export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

export type JSONValue = Primitive | JSONObject;

export interface JSONObject {
  [key: string]: JSONValue;
}
