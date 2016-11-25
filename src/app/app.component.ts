import { Component } from '@angular/core';
import { SampleService } from './services/sampleService';

@Component({
  selector: 'app-root',
  template: '<h1>I am a new <h2>{{Title}}</h2> app.</h1>',
  styles: [`h1 { color: red } 
            h2 { font-size: 20px; color: blue }`],
  providers: [ SampleService ]
})

export class AppComponent {
  Title: string;

  constructor(_sampleService: SampleService)
  {
    let sampleObj = _sampleService.getSampleObject();
    this.Title = sampleObj.Title;
  }
}
