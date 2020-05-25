import fetch from 'cross-fetch';
import { IDevice } from './interface/Device';
import { IFirmware } from './interface/Firmware';

/**
 * @hidden
 */
const baseUrl = 'https://api.ipsw.me';

/**
 * Get device and firmware information for a specific device ID.
 *
 * @param deviceId - An iDevice Device Identifier.
 * @example
 * ```
 * getDevice('iPhone8,2').then(console.log);
 * ```
 */
export async function getDevice(deviceId: string): Promise<IDevice> {
  return fetch(`${baseUrl}/v4/device/${deviceId}`).then(req => req.json());
}

/**
 * Get list of devices except for firmware information.
 *
 * @example
 * ```
 * getDevices().then(console.log)
 * ```
 */
export async function getDevices(): Promise<IDevice[]> {
  return fetch(`${baseUrl}/v4/devices`).then(req => req.json());
}

/**
 * Get the IPSW download url for a device ID and Build ID.
 * Link redirects to Apple's server.
 *
 * @param deviceId - An iDevice Device Identifier.
 * @param buildid - iOS Build Number
 */
export async function getIPSWLink(deviceId: string, buildid: string): Promise<string> {
  return `https://api.ipsw.me/v4/ipsw/download/${deviceId}/${buildid}`;
}

/**
 * Get IPSW Information for a device ID and Build ID.
 *
 * @param deviceId
 * @param buildid
 */
export async function getIPSWInfo(deviceId: string, buildid: string): Promise<IFirmware> {
  return fetch(`${baseUrl}/v4/ipsw/${deviceId}/${buildid}`).then(req => req.json());
}

/**
 * Gives list of all IPSW for the version
 *
 * @param version - iOS Version
 */
export async function getIPSWListForVersion(version: string): Promise<IFirmware[]> {
  return fetch(`${baseUrl}/v4/ipsw/${version}`).then(req => req.json());
}
