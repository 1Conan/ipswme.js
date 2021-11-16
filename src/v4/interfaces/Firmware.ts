export interface Firmware {
  identifier: string;
  version: string;
  buildid: string;
  sha256sum: string;
  sha1sum: string;
  md5sum: string;
  filesize: number;
  url: string;
  releasedate: string;
  uploaddate: string;
  signed: boolean;
}
