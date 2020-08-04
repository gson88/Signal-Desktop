import { Attachment } from '../ts/types/Attachment';

export function getTempPath(userDataPath: string): string;

export type SaveMultipleFilesResult = {
  folder: string;
  files: Array<{
    fullPath: string;
    name: string;
  }>;
} | null;

export function saveMultipleAttachmentsToDisk(options: {
  attachments: Attachment[];
  baseFileName: string;
}): Promise<SaveMultipleFilesResult | null>;
