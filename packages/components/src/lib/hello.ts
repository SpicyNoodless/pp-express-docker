import { greet } from "@pp-express-docker/lib";

export const hello = () => {
  return greet("components");
};

export const add = (a: number, b: number) => {
  return a + b;
};
