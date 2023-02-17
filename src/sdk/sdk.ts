import { Actions } from "./actions";
import { ActivityLog } from "./activitylog";
import { Annotations } from "./annotations";
import { AppMetrics } from "./appmetrics";
import { Cohorts } from "./cohorts";
import { Dashboards } from "./dashboards";
import { DashboardTemplates } from "./dashboardtemplates";
import { Domains } from "./domains";
import { EventDefinitions } from "./eventdefinitions";
import { Events } from "./events";
import { Experiments } from "./experiments";
import { Exports } from "./exports";
import { FeatureFlags } from "./featureflags";
import { Funnel } from "./funnel";
import { Groups } from "./groups";
import { GroupsTypes } from "./groupstypes";
import { Hooks } from "./hooks";
import { IngestionWarnings } from "./ingestionwarnings";
import { Insights } from "./insights";
import { Integrations } from "./integrations";
import { Invites } from "./invites";
import { IsGeneratingDemoData } from "./isgeneratingdemodata";
import { Members } from "./members";
import { Organizations } from "./organizations";
import { PerformanceEvents } from "./performanceevents";
import { Persons } from "./persons";
import { PluginConfigs } from "./pluginconfigs";
import { Plugins } from "./plugins";
import { Projects } from "./projects";
import { Prompts } from "./prompts";
import { PropertyDefinitions } from "./propertydefinitions";
import { Query } from "./query";
import { ResetToken } from "./resettoken";
import { ResourceAccess } from "./resourceaccess";
import { Roles } from "./roles";
import { SessionRecordingPlaylists } from "./sessionrecordingplaylists";
import { SessionRecordings } from "./sessionrecordings";
import { Subscriptions } from "./subscriptions";
import { Tags } from "./tags";
import { Trend } from "./trend";
import { UploadedMedia } from "./uploadedmedia";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://app.posthog.com/api/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class Posthog {
  public actions: Actions;
  public activityLog: ActivityLog;
  public annotations: Annotations;
  public appMetrics: AppMetrics;
  public cohorts: Cohorts;
  public dashboardTemplates: DashboardTemplates;
  public dashboards: Dashboards;
  public domains: Domains;
  public eventDefinitions: EventDefinitions;
  public events: Events;
  public experiments: Experiments;
  public exports: Exports;
  public featureFlags: FeatureFlags;
  public funnel: Funnel;
  public groups: Groups;
  public groupsTypes: GroupsTypes;
  public hooks: Hooks;
  public ingestionWarnings: IngestionWarnings;
  public insights: Insights;
  public integrations: Integrations;
  public invites: Invites;
  public isGeneratingDemoData: IsGeneratingDemoData;
  public members: Members;
  public organizations: Organizations;
  public performanceEvents: PerformanceEvents;
  public persons: Persons;
  public pluginConfigs: PluginConfigs;
  public plugins: Plugins;
  public projects: Projects;
  public prompts: Prompts;
  public propertyDefinitions: PropertyDefinitions;
  public query: Query;
  public resetToken: ResetToken;
  public resourceAccess: ResourceAccess;
  public roles: Roles;
  public sessionRecordingPlaylists: SessionRecordingPlaylists;
  public sessionRecordings: SessionRecordings;
  public subscriptions: Subscriptions;
  public tags: Tags;
  public trend: Trend;
  public uploadedMedia: UploadedMedia;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.1.1";
  private _genVersion = "1.3.2";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.actions = new Actions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.activityLog = new ActivityLog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.annotations = new Annotations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.appMetrics = new AppMetrics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cohorts = new Cohorts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dashboardTemplates = new DashboardTemplates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dashboards = new Dashboards(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domains = new Domains(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eventDefinitions = new EventDefinitions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.events = new Events(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.experiments = new Experiments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.exports = new Exports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.featureFlags = new FeatureFlags(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.funnel = new Funnel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groups = new Groups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupsTypes = new GroupsTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.hooks = new Hooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ingestionWarnings = new IngestionWarnings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.insights = new Insights(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.integrations = new Integrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invites = new Invites(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.isGeneratingDemoData = new IsGeneratingDemoData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.members = new Members(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organizations = new Organizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.performanceEvents = new PerformanceEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.persons = new Persons(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pluginConfigs = new PluginConfigs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.plugins = new Plugins(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.prompts = new Prompts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.propertyDefinitions = new PropertyDefinitions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.query = new Query(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resetToken = new ResetToken(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resourceAccess = new ResourceAccess(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roles = new Roles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sessionRecordingPlaylists = new SessionRecordingPlaylists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sessionRecordings = new SessionRecordings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptions = new Subscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tags = new Tags(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trend = new Trend(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uploadedMedia = new UploadedMedia(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}