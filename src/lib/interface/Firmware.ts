
/**
 * Firmware information
 */
export interface IFirmware {

  /**
   * Device Identifier
   * @example iPhone8,2
   */
  identifier: string;

  /**
   * iOS Version
   * @example 12.1.3
   */
  version: string;

  /**
   * iOS Build ID
   * @example 16D39
   */
  buildid: string;

  /**
   * SHA1 Hash Sum
   * @example 9ff3ff7360f23b2ce0bed6b3354c0dab4415c35e
   */
  sha1sum: string;

  /**
   * MD5 Hash Sum
   * @example 90f008ba0d4cea85e9a9713e1fad660e
   */
  md5sum: string;

  /**
   * File Size (Bytes)
   * @example 3274508918
   */
  filesize: number;

  /**
   * IPSW Download URL
   */
  url: string;

  /**
   * iOS Release Date
   * @example 2019-01-22T18:35:59Z
   */
  releasedate: string;

  /**
   * iOS Upload Date
   * @example 2019-01-11T22:20:50Z
   */
  uploaddate: string;

  /**
   * Signing Status
   * @example true
   */
  signed: boolean;
}
