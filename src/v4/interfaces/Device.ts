import { Board } from './Board';

export interface Device {
  name: string;
  identifier: string;
  boards: Board[];

  /**
   * @deprecated - use `boards`
   */
  boardconfig: string;

  /**
   * @deprecated - use `boards`
   */
  platform: string;

  /**
   * @deprecated - use `boards`
   */
  cpid: number;

  /**
   * @deprecated - use `boards`
   */
  bdid: number;
}
