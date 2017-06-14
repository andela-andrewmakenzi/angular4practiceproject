import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    url_string = 'http://private-729ea-lenken.apiary-mock.com/requests';
    returned_error: string;
    returned_data: any;
    avar: any;

    request_body = {
        'mentorid' : 1,
        'title': 'example',
        'description': 'description',
        'skills': 'skills'
        };

    constructor(private _http: Http) {
    }

    get_data(): Observable<any> {
        return this._http
        .post(this.url_string, this.request_body)
        .map((response: Response) => response.json())
    }

    ngOnInit() {
        this.get_data().subscribe(
            data => console.log(data),
            error => this.returned_error = error
        );
    }
}