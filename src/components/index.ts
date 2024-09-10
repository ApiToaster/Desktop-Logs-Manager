import { QMainWindow, QWidget, QBoxLayout, Direction, QPushButton } from '@nodegui/nodegui';
import Navbar from './navbar';
import Log from '../tools/logger';
import State from '../tools/state';

export default class UI {
  private _root: QWidget | null = null;

  private get root(): QWidget {
    return this._root!;
  }

  private set root(val: QWidget) {
    this._root = val;
  }

  init(): void {
    const layout = this.initWindow();
    this.initNavbar(layout);
    this.initMainLayout(layout);

    Log.debug('Root ui', 'Showing window');
    State.window.show();
  }

  /**
   * Initialize root component and main window.
   * @returns Void.
   */
  private initWindow(): QBoxLayout {
    Log.debug('Root ui', 'Creating main window');
    const win = new QMainWindow();
    State.window = win;

    win.setWindowTitle('Api Toaster');
    win.setMinimumSize(500, 500);

    this.root = new QWidget();
    const rootLayout = new QBoxLayout(Direction.LeftToRight);
    this.root.setObjectName('myroot');
    this.root.setLayout(rootLayout);

    win.setCentralWidget(this.root);
    win.setStyleSheet(`
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
  `);
    return rootLayout;
  }

  private initNavbar(rootLayout: QBoxLayout): void {
    Log.debug('Root ui', 'Initing navbar');

    const nav = new Navbar();
    nav.init(rootLayout);
  }

  private initMainLayout(root: QBoxLayout): void {
    Log.debug('Root ui', 'Initing main ui');

    const mainWindow = new QWidget();
    const mainWindowLayout = new QBoxLayout(Direction.TopToBottom);
    mainWindow.setLayout(mainWindowLayout);
    mainWindow.setObjectName('MainWindow');

    const button = new QPushButton();
    button.setText('Banana');

    mainWindow.setInlineStyle(`
      background-color: blue;
    `);

    button.setMaximumWidth(120);
    button.setObjectName('Button on main window');

    mainWindowLayout.addWidget(button);

    root.addWidget(mainWindow);
  }
}
