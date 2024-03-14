import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/sample-api",
    alias: "sampleApi",
    description: `Sample API`,
    requestFormat: "json",
    response: z.object({ data: z.number().int() }).partial().passthrough(),
  },
]);

const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
