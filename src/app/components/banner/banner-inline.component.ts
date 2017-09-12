import { Component } from '@angular/core';

@Component({
  selector: 'app-banneri',
  template: '<h1>{{title}}</h1>'
})
export class BannerComponentI {
  title = 'Test Banner Inline';
}