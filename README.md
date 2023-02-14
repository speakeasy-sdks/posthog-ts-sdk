# @posthog/sdk

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @posthog/sdk
```

### Yarn

```bash
yarn add @posthog/sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### actions

* `actionsCountRetrieve`
* `actionsCreate`
* `actionsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `actionsList`
* `actionsPartialUpdate`
* `actionsPeopleRetrieve`
* `actionsRetrieve`
* `actionsUpdate`

### activityLog

* `activityLogBookmarkActivityNotificationCreate`
* `activityLogImportantChangesRetrieve`

### annotations

* `annotationsCreate` - Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
* `annotationsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `annotationsList` - Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
* `annotationsPartialUpdate` - Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
* `annotationsRetrieve` - Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
* `annotationsUpdate` - Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.

### appMetrics

* `appMetricsErrorDetailsRetrieve`
* `appMetricsHistoricalExportsRetrieve`
* `appMetricsHistoricalExportsRetrieve2`
* `appMetricsRetrieve`

### cohorts

* `cohortsCreate`
* `cohortsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `cohortsList`
* `cohortsPartialUpdate`
* `cohortsPersonsRetrieve`
* `cohortsRetrieve`
* `cohortsUpdate`

### dashboardTemplates

* `dashboardTemplatesCreate`
* `dashboardTemplatesRepositoryRetrieve`

### dashboards

* `dashboardsCreate`
* `dashboardsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `dashboardsList`
* `dashboardsMoveTilePartialUpdate`
* `dashboardsPartialUpdate`
* `dashboardsRetrieve`
* `dashboardsUpdate`

### domains

* `domainsCreate`
* `domainsDestroy`
* `domainsList`
* `domainsPartialUpdate`
* `domainsRetrieve`
* `domainsUpdate`
* `domainsVerifyCreate`

### eventDefinitions

* `eventDefinitionsList`
* `eventDefinitionsPartialUpdate`
* `eventDefinitionsRetrieve`
* `eventDefinitionsUpdate`

### events

* `eventsRetrieve`
* `eventsValuesRetrieve`

### experiments

* `experimentsCreate`
* `experimentsDestroy`
* `experimentsList`
* `experimentsPartialUpdate`
* `experimentsRequiresFlagImplementationRetrieve`
* `experimentsResultsRetrieve`
* `experimentsRetrieve`
* `experimentsSecondaryResultsRetrieve`
* `experimentsUpdate`

### exports

* `exportsContentRetrieve`
* `exportsCreate`
* `exportsRetrieve`

### featureFlags

* `featureFlagsActivityRetrieve` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsActivityRetrieve2` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsCreate` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `featureFlagsEvaluationReasonsRetrieve` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsList` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsLocalEvaluationRetrieve` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsMyFlagsRetrieve` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsPartialUpdate` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsRetrieve` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsRoleAccessCreate`
* `featureFlagsRoleAccessDestroy`
* `featureFlagsRoleAccessList`
* `featureFlagsRoleAccessRetrieve`
* `featureFlagsUpdate` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
* `featureFlagsUserBlastRadiusCreate` - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.

If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

### funnel

* `funnels`

### groups

* `groupsFindRetrieve`
* `groupsList`
* `groupsPropertyDefinitionsRetrieve`
* `groupsPropertyValuesRetrieve`
* `groupsRelatedRetrieve`

### groupsTypes

* `groupsTypesList`
* `groupsTypesUpdateMetadataPartialUpdate`

### hooks

* `hooksCreate` - Retrieve, create, update or destroy REST hooks.
* `hooksDestroy` - Retrieve, create, update or destroy REST hooks.
* `hooksList` - Retrieve, create, update or destroy REST hooks.
* `hooksPartialUpdate` - Retrieve, create, update or destroy REST hooks.
* `hooksRetrieve` - Retrieve, create, update or destroy REST hooks.
* `hooksUpdate` - Retrieve, create, update or destroy REST hooks.

### ingestionWarnings

* `ingestionWarningsRetrieve`

### insights

* `funnels`
* `trends`
* `insightsActivityRetrieve`
* `insightsActivityRetrieve2`
* `insightsCancelCreate`
* `insightsCreate`
* `insightsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `insightsFunnelCorrelationCreate`
* `insightsFunnelCorrelationRetrieve`
* `insightsFunnelRetrieve`
* `insightsList`
* `insightsMyLastViewedRetrieve` - Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
* `insightsPartialUpdate`
* `insightsPathCreate`
* `insightsPathRetrieve`
* `insightsRetentionRetrieve`
* `insightsRetrieve`
* `insightsTimingCreate`
* `insightsTrendRetrieve`
* `insightsUpdate`
* `insightsViewedCreate`

### integrations

* `integrationsChannelsRetrieve`
* `integrationsCreate`
* `integrationsDestroy`
* `integrationsList`
* `integrationsRetrieve`

### invites

* `invitesBulkCreate`
* `invitesCreate`
* `invitesDestroy`
* `invitesList`

### isGeneratingDemoData

* `isGeneratingDemoDataRetrieve` - Projects for the current organization.

### members

* `membersDestroy`
* `membersList`
* `membersPartialUpdate`
* `membersUpdate`

### organizations

* `domainsCreate`
* `domainsDestroy`
* `domainsList`
* `domainsPartialUpdate`
* `domainsRetrieve`
* `domainsUpdate`
* `domainsVerifyCreate`
* `invitesBulkCreate`
* `invitesCreate`
* `invitesDestroy`
* `invitesList`
* `membersDestroy`
* `membersList`
* `membersPartialUpdate`
* `membersUpdate`
* `pluginsActivityRetrieve`
* `pluginsCheckForUpdatesRetrieve`
* `pluginsCreate`
* `pluginsDestroy`
* `pluginsList`
* `pluginsPartialUpdate`
* `pluginsRepositoryRetrieve`
* `pluginsRetrieve`
* `pluginsSourceRetrieve`
* `pluginsUpdate`
* `pluginsUpdateSourcePartialUpdate`
* `pluginsUpgradeCreate`
* `resourceAccessCreate`
* `resourceAccessDestroy`
* `resourceAccessList`
* `resourceAccessPartialUpdate`
* `resourceAccessRetrieve`
* `resourceAccessUpdate`
* `rolesCreate`
* `rolesDestroy`
* `rolesList`
* `rolesPartialUpdate`
* `rolesRetrieve`
* `rolesRoleMembershipsCreate`
* `rolesRoleMembershipsDestroy`
* `rolesRoleMembershipsList`
* `rolesUpdate`

### performanceEvents

* `performanceEventsList`
* `performanceEventsRecentPageviewsRetrieve`

### persons

* `personsActivityRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsActivityRetrieve2` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsCohortsRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsDeletePropertyCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsDestroy` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsFunnelCorrelationCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsFunnelCorrelationRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsFunnelCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsFunnelRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsLifecycleRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsPartialUpdate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsPathCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsPathRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsPropertiesRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsPropertiesTimelineRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsRetentionRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsSplitCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsStickinessRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsTrendsRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsUpdate` - Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event.
This means that only the properties listed will be updated, but other properties won't be removed nor updated.
If you would like to remove a property use the `delete_property` endpoint.
* `personsUpdatePropertyCreate` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
* `personsValuesRetrieve` - To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.

### pluginConfigs

* `pluginConfigsCreate`
* `pluginConfigsDestroy`
* `pluginConfigsFrontendRetrieve`
* `pluginConfigsJobCreate`
* `pluginConfigsList`
* `pluginConfigsLogsList`
* `pluginConfigsPartialUpdate`
* `pluginConfigsRearrangePartialUpdate`
* `pluginConfigsRetrieve`
* `pluginConfigsUpdate`

### plugins

* `pluginsActivityRetrieve`
* `pluginsCheckForUpdatesRetrieve`
* `pluginsCreate`
* `pluginsDestroy`
* `pluginsList`
* `pluginsPartialUpdate`
* `pluginsRepositoryRetrieve`
* `pluginsRetrieve`
* `pluginsSourceRetrieve`
* `pluginsUpdate`
* `pluginsUpdateSourcePartialUpdate`
* `pluginsUpgradeCreate`

### projects

* `create` - Projects for the current organization.
* `destroy` - Projects for the current organization.
* `list` - Projects for the current organization.
* `partialUpdate` - Projects for the current organization.
* `retrieve` - Projects for the current organization.
* `update` - Projects for the current organization.

### prompts

* `promptsMyPromptsPartialUpdate` - Create, read, update and delete prompt sequences state for a person.
* `promptsMyPromptsPartialUpdate` - Create, read, update and delete prompt sequences state for a person.

### propertyDefinitions

* `propertyDefinitionsList`
* `propertyDefinitionsPartialUpdate`
* `propertyDefinitionsRetrieve`
* `propertyDefinitionsUpdate`

### query

* `queryRetrieve`

### resetToken

* `resetTokenPartialUpdate` - Projects for the current organization.

### resourceAccess

* `resourceAccessCreate`
* `resourceAccessDestroy`
* `resourceAccessList`
* `resourceAccessPartialUpdate`
* `resourceAccessRetrieve`
* `resourceAccessUpdate`

### roles

* `rolesCreate`
* `rolesDestroy`
* `rolesList`
* `rolesPartialUpdate`
* `rolesRetrieve`
* `rolesRoleMembershipsCreate`
* `rolesRoleMembershipsDestroy`
* `rolesRoleMembershipsList`
* `rolesUpdate`

### sessionRecordingPlaylists

* `sessionRecordingPlaylistsCreate`
* `sessionRecordingPlaylistsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `sessionRecordingPlaylistsList`
* `sessionRecordingPlaylistsPartialUpdate`
* `sessionRecordingPlaylistsRecordingsCreate`
* `sessionRecordingPlaylistsRecordingsDestroy`
* `sessionRecordingPlaylistsRecordingsRetrieve`
* `sessionRecordingPlaylistsRetrieve`
* `sessionRecordingPlaylistsUpdate`

### sessionRecordings

* `sessionRecordingsPropertiesRetrieve`
* `sessionRecordingsRetrieve`
* `sessionRecordingsRetrieve2`
* `sessionRecordingsSnapshotsRetrieve`

### subscriptions

* `subscriptionsCreate`
* `subscriptionsDestroy` - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
* `subscriptionsList`
* `subscriptionsPartialUpdate`
* `subscriptionsRetrieve`
* `subscriptionsUpdate`

### tags

* `tagsList`

### trend

* `trends`

### uploadedMedia

* `uploadedMediaCreate` - 
    When object storage is available this API allows upload of media which can be used, for example, in text cards on dashboards.

    Uploaded media must have a content type beginning with 'image/' and be less than 4MB.
    
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
