import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAlerts} from '../../store/selectors/app.selectors';
import {AppAlert} from '../../store/reducers/app.reducer';
import {removeAlert} from '../../store/actions/app.actions';

import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-app-notifications',
    templateUrl: './app-notifications.component.html',
    styleUrls: ['./app-notifications.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatIcon]
})
export class AppNotificationsComponent implements OnInit {

  alerts: AppAlert[] = [];

  constructor(private store: Store<{}>) {
  }

  ngOnInit(): void {
    this.store.select(selectAlerts).subscribe(alerts => {
      this.alerts = JSON.parse(JSON.stringify(alerts));
    })
  }

  remove(messageId: string) {
    this.store.dispatch(
      removeAlert({
        src: AppNotificationsComponent.name,
        alertId: messageId
      }))
  }

}
