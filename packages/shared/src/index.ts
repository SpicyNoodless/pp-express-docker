import { greet } from "@pp-express-docker/lib";

export function goodbye(name: string): string {
  return `Not ${greet(name)}, but goodbye ${name}!`;
}
