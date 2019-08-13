import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textLong =
    'This text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable\nThis text is written in a component variable.';
  textShort = 'TEST';

  maxHeight = 150;
  text = this.textLong;
}
