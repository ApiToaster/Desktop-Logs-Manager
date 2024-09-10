import Log from './logger';
import type { IState } from '../types';
import type { QMainWindow } from '@nodegui/nodegui';

class State implements IState {
  private _window: QMainWindow | null = null;

  get window(): QMainWindow {
    return this._window!;
  }

  set window(value: QMainWindow) {
    this._window = value;
  }

  kill(): void {
    Log.log('Server', 'Aoo closing');
    this.window.close();
  }
}

export default new State();
