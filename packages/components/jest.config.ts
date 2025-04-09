import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverage: true,
  testEnvironment: "jsdom",
};

export default config;
