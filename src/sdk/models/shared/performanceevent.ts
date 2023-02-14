import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PerformanceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connect_end" })
  connectEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_start" })
  connectStart?: number;

  @SpeakeasyMetadata({ data: "json, name=current_url" })
  currentUrl: string;

  @SpeakeasyMetadata({ data: "json, name=decoded_body_size" })
  decodedBodySize?: number;

  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId: string;

  @SpeakeasyMetadata({ data: "json, name=dom_complete" })
  domComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=dom_content_loaded_event" })
  domContentLoadedEvent?: number;

  @SpeakeasyMetadata({ data: "json, name=dom_interactive" })
  domInteractive?: number;

  @SpeakeasyMetadata({ data: "json, name=domain_lookup_end" })
  domainLookupEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=domain_lookup_start" })
  domainLookupStart?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=encoded_body_size" })
  encodedBodySize?: number;

  @SpeakeasyMetadata({ data: "json, name=entry_type" })
  entryType: string;

  @SpeakeasyMetadata({ data: "json, name=fetch_start" })
  fetchStart?: number;

  @SpeakeasyMetadata({ data: "json, name=initiator_type" })
  initiatorType?: string;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_element" })
  largestContentfulPaintElement?: string;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_id" })
  largestContentfulPaintId?: string;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_load_time" })
  largestContentfulPaintLoadTime?: number;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_render_time" })
  largestContentfulPaintRenderTime?: number;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_size" })
  largestContentfulPaintSize?: number;

  @SpeakeasyMetadata({ data: "json, name=largest_contentful_paint_url" })
  largestContentfulPaintUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=load_event_end" })
  loadEventEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=load_event_start" })
  loadEventStart?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=navigation_type" })
  navigationType?: string;

  @SpeakeasyMetadata({ data: "json, name=next_hop_protocol" })
  nextHopProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=pageview_id" })
  pageviewId?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_count" })
  redirectCount?: number;

  @SpeakeasyMetadata({ data: "json, name=redirect_end" })
  redirectEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=redirect_start" })
  redirectStart?: number;

  @SpeakeasyMetadata({ data: "json, name=render_blocking_status" })
  renderBlockingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=request_start" })
  requestStart?: number;

  @SpeakeasyMetadata({ data: "json, name=response_end" })
  responseEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=response_start" })
  responseStart?: number;

  @SpeakeasyMetadata({ data: "json, name=response_status" })
  responseStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=secure_connection_start" })
  secureConnectionStart?: number;

  @SpeakeasyMetadata({ data: "json, name=session_id" })
  sessionId: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=time_origin" })
  timeOrigin: Date;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transfer_size" })
  transferSize?: number;

  @SpeakeasyMetadata({ data: "json, name=unload_event_end" })
  unloadEventEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=unload_event_start" })
  unloadEventStart?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;

  @SpeakeasyMetadata({ data: "json, name=window_id" })
  windowId: string;

  @SpeakeasyMetadata({ data: "json, name=worker_start" })
  workerStart?: number;
}