import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature = 'recipe';

  // event handler
  onNavigate(feature: string) {
    console.log('on nav');
    this.loadedfeature = feature;
  }


}