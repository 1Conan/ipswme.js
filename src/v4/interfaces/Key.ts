export interface KeyInfo {
  identifier: string;
  buildid: string;
  codename: string;
  baseband: string;
  updateramdiskexists: boolean;
  restoreramdiskexists: boolean;
}

export interface Key {
  image: string;
  filename: string;
  kbag: string;
  key: string;
  iv: string;
  date: string;
}
