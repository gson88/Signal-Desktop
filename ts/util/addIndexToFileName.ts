import path from 'path';

export const addIndexToFileName = ({
  fileName,
  index,
  paddingMaxLength = 3,
}: {
  fileName: string;
  index: number;
  paddingMaxLength?: number;
}): string => {
  const extension = path.extname(fileName);
  const indexString = `-${String(index).padStart(paddingMaxLength, '0')}`;

  if (!extension) {
    return fileName.concat(indexString);
  }

  const extensionRegex = new RegExp(`${extension}$`);
  const noExtension = fileName.replace(extensionRegex, '');
  return noExtension.concat(indexString).concat(extension);
};
