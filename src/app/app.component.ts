import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-ui';

  constructor(private translate: TranslateService, private modalService: NgbModal) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  
}
