import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ExportedAssetExportFormatEnum {
    ImagePng = "image/png",
    ApplicationPdf = "application/pdf",
    TextCsv = "text/csv"
}

// ExportedAsset
/** 
 * Standard ExportedAsset serializer that doesn't return content.
**/
export class ExportedAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=export_context" })
  exportContext?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=export_format" })
  exportFormat: ExportedAssetExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=has_content" })
  hasContent: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=insight" })
  insight?: number;
}

// ExportedAssetInput
/** 
 * Standard ExportedAsset serializer that doesn't return content.
**/
export class ExportedAssetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboard, form, name=dashboard;, multipart_form, name=dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=export_context, form, name=export_context;json=true, multipart_form, name=export_context;json=true" })
  exportContext?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=export_format, form, name=export_format;, multipart_form, name=export_format" })
  exportFormat: ExportedAssetExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=insight, form, name=insight;, multipart_form, name=insight" })
  insight?: number;
}