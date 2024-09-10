import UI from './components';
import Log from './tools/logger';

class App {
  private _ui: UI | null = null;

  private get ui(): UI {
    return this._ui!;
  }

  private set ui(val) {
    this._ui = val;
  }

  init(): void {
    try {
      this.handleInit();
    } catch (err) {
      Log.error('Main package', (err as Error).message, (err as Error).stack);
    }
  }

  private handleInit(): void {
    this.ui = new UI();

    this.ui.init();
  }
}

new App().init();
