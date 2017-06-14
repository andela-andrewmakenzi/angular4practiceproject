import { Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-eventslist',
  templateUrl: './eventslist.component.html',
  styleUrls: ['./eventslist.component.scss'],
})
export class EventslistComponent {
    selectedItem: string;
    items: Array<string> = ['MySQL', 'PostgreSQL', 'Sqlite3'];

    selectItem(item) {
        console.log('dsf');
        this.selectedItem = item;
    }
}
