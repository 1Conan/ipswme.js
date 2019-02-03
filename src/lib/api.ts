import { IDevice } from './interface/Device';
import axios from 'axios';

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

    if (req.status === 404) throw new Error('Device Not Found');

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
