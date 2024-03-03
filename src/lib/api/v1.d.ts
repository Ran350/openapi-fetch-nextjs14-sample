/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/sample-api": {
    /**
     * Sample API
     * @description Sample API
     */
    get: operations["sampleApi"];
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Sample API
   * @description Sample API
   */
  sampleApi: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            /**
             * @description Sample data
             * @example 123456
             */
            data?: number;
          };
        };
      };
    };
  };
}
