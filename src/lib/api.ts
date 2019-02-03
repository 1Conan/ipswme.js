import axios from 'axios';

import { IDevice } from './interface/Device';
import { IFirmware } from './interface/Firmware';

/**
 * @hidden
 */
const request = axios.create({
  baseURL: 'https://api.ipsw.me',
  headers: { 'User-Agent': 'node-ipswme/2.0' },
});

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
  try {
    const req = await request.get(`/v4/device/${deviceId}`);

    if (req.status === 404) throw new Error('Not Found');

    if (req.status === 200) return req.data;

  } catch (e) {
    throw e;
  }
  throw new Error('Unknown Error');

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

  try {
    const req = await request.get('/v4/devices');

    if (req.status === 200) return req.data;
  } catch (e) {
    throw e;
  }
  throw new Error('Unknown Error');
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
  try {
    const req = await request.get(`/v4/ipsw/${deviceId}/${buildid}`);
    if (req.status === 404) throw new Error('Not Found');

    if (req.status === 200) return req.data;
  } catch (e) {
    throw e;
  }
  throw new Error('Unknown Error');
}

/**
 * Gives list of all IPSW for the version
 *
 * @param version - iOS Version
 */
export async function getIPSWListForVersion(version: string): Promise<IFirmware[]> {
  try {
    const req = await request.get(`/v4/ipsw/${version}`);
    if (req.status === 404) throw new Error('Not Found');

    if (req.status === 200) return req.data;
  } catch (e) {
    throw e;
  }
  throw new Error('Unknown Error');
}
