import { pluginFetch } from "@zodios/plugins";
import { createApiClient } from "./generated";

const apiClient = createApiClient("http://localhost:3000");
apiClient.use(pluginFetch({ keepalive: true }));

export { apiClient };
