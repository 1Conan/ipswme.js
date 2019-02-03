import { IFirmware } from './Firmware';

/** Device Information */
export interface IDevice {

  /**
   * Device Name
   * @example iPhone 6S Plus
   */
  name: string;

  /**
   * Device Identifier
   * @example iPhone8,2
   */
  identifier: string;

  /**
   * Board Config
   * @example N66mAP
   */
  boardconfig: string;

  /**
   * CPU
   * @example s8003
   */
  platform: string;

  /**
   * CHIP ID
   * @example 32771
   */
  cpid: string;

  /**
   * BDID
   * @example 6
   */
  bdid: string;

  /**
   * Firmwares
   */
  firmwares?: IFirmware[];
}
