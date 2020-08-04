import { Attachment } from '../ts/types/Attachment';

export function getTempPath(userDataPath: string): string;

export function saveMultipleAttachmentsToDisk(options: {
  attachments: Attachment[];
  timestamp?: number;
}): Promise<{ fillPath: string; name: string }[] | null>;
