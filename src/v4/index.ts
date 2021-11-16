import fetch from 'cross-fetch';
import { Device } from './interfaces/Device';
import { Firmware } from './interfaces/Firmware';
import { ITunes } from './interfaces/ITunes';
import { Key, KeyInfo } from './interfaces/Key';

const url = 'https://api.ipsw.me/v4';

export type Platform = 'windows' | 'macOS';

async function get<T>(path: string) {
  const req = await fetch(`${url}${path}`);

  return req.json() as Promise<T>;
}

export function getDevice(deviceId: string, ota: boolean = false) {
  const qs = new URLSearchParams();
  qs.set('type', ota ? 'ota' : 'ipsw');
  return get<Device & { firmwares: Firmware[] }>(`/device/${deviceId}?${qs.toString()}`);
}

export function getDevices() {
  return get<Device[]>('/devices');
}

export function getFirmwareDownload(deviceId: string, buildid: string) {
  return `${url}/ipsw/download/${deviceId}/${buildid}`;
}

export function getFirmwareInfo(deviceId: string, buildid: string) {
  return get<Firmware>(`/ipsw/${deviceId}/${buildid}`);
}

export function getFirmwaresForVersion(version: string) {
  return get<Firmware[]>(`/ipsw/${version}`);
}

export function getItunesDownload(platform: Platform, version: string) {
  return `${url}/itunes/download/${platform}/${version}`;
}

export function getItunesInfo(platform: Platform) {
  return get<ITunes[]>(`/itunes/${platform}`);
}

export function getDeviceKeysList(deviceId: string) {
  return get<KeyInfo[]>(`/keys/device/${deviceId}`);
}

export function getDeviceKeysForIPSW(deviceId: string, buildid: string) {
  return get<KeyInfo & { keys: Key[] }>(`/keys/device/${deviceId}/${buildid}`);
}

export function identifyModel(model: string) {
  return get<{ identifier: string }>(`/model/${model}`);
}

export function getOtaDocumentation(deviceId: string, version: string) {
  return `${url}/ota/documentation/${deviceId}/${version}`;
}

export function getOTAFirmwareDownload(deviceId: string, buildid: string) {
  return `${url}/ota/download/${deviceId}/${buildid}`;
}

export function getOTAFirmwareInfo(deviceId: string, buildid: string) {
  return get<Firmware>(`/ota/${deviceId}/${buildid}`);
}

export function getOTAFirmwaresForVersion(version: string) {
  return get<Firmware[]>(`/ota/${version}`);
}
