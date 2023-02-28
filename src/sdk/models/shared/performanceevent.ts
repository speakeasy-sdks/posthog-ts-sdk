import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class PerformanceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connect_end" })
  connectEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "connect_start" })
  connectStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "current_url" })
  currentUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "decoded_body_size" })
  decodedBodySize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dom_complete" })
  domComplete?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dom_content_loaded_event" })
  domContentLoadedEvent?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dom_interactive" })
  domInteractive?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "domain_lookup_end" })
  domainLookupEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "domain_lookup_start" })
  domainLookupStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "encoded_body_size" })
  encodedBodySize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "entry_type" })
  entryType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fetch_start" })
  fetchStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "initiator_type" })
  initiatorType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_element" })
  largestContentfulPaintElement?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_id" })
  largestContentfulPaintId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_load_time" })
  largestContentfulPaintLoadTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_render_time" })
  largestContentfulPaintRenderTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_size" })
  largestContentfulPaintSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "largest_contentful_paint_url" })
  largestContentfulPaintUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "load_event_end" })
  loadEventEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "load_event_start" })
  loadEventStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "navigation_type" })
  navigationType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "next_hop_protocol" })
  nextHopProtocol?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageview_id" })
  pageviewId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect_count" })
  redirectCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect_end" })
  redirectEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect_start" })
  redirectStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "render_blocking_status" })
  renderBlockingStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "request_start" })
  requestStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "response_end" })
  responseEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "response_start" })
  responseStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "response_status" })
  responseStatus?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "secure_connection_start" })
  secureConnectionStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "session_id" })
  sessionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_time" })
  startTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "time_origin" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeOrigin: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "transfer_size" })
  transferSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unload_event_end" })
  unloadEventEnd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unload_event_start" })
  unloadEventStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "window_id" })
  windowId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "worker_start" })
  workerStart?: number;
}