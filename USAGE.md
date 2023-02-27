<!-- Start SDK Example Usage -->
```typescript
import {
  ActionsCountRetrieveRequest,
  ActionsCountRetrieveResponse 
} from "@posthog/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Posthog } from "@posthog/sdk";


const sdk = new Posthog();
    
const req: ActionsCountRetrieveRequest = {
  pathParams: {
    id: 548814,
    projectId: "deserunt",
  },
  queryParams: {
    format: "undefined",
  },
};

sdk.actions.actionsCountRetrieve(req).then((res: ActionsCountRetrieveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->