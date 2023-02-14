<!-- Start SDK Example Usage -->
```typescript
import { Posthog, withSecurity} from "@posthog/sdk";
import { ActionsCountRetrieveRequest, ActionsCountRetrieveResponse } from "@posthog/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


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