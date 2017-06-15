import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-test-fire-base',
  templateUrl: './test-fire-base.component.html',
  styleUrls: ['./test-fire-base.component.scss']
})
export class TestFireBaseComponent implements OnInit {
  service: AngularFire;
  dataItems: FirebaseListObservable<any[]>;
//   constructor(private firebaseTest: AngularFire) { }s

  ngOnInit() {
    //   this.dataItems = this.firebaseTest.database.list;
  }

}
