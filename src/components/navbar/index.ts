import { Direction, QPushButton, QWidget, QBoxLayout } from '@nodegui/nodegui';
import Log from '../../tools/logger';

export default class Navbar {
  init(root: QBoxLayout): void {
    Log.debug('Navbar', 'Initializing');

    const nav = new QWidget();
    const navLayout = new QBoxLayout(Direction.TopToBottom);
    nav.setLayout(navLayout);
    nav.setObjectName('Nav');

    nav.setFixedWidth(150);

    const button1 = this.createButton();
    const button2 = this.createButton();
    const button3 = this.createButton();

    nav.setInlineStyle(`
      background-color: red;
    `);

    navLayout.addWidget(button1);
    navLayout.addWidget(button2);
    navLayout.addWidget(button3);

    root.addWidget(nav);
  }

  private createButton(): QPushButton {
    const button = new QPushButton();
    button.setText('NavButton');

    button.setFixedWidth(130);
    button.setObjectName('NavButton');

    return button;
  }
}
