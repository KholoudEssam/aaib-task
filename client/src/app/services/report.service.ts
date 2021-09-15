import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Report } from 'src/app/models/Report';

@Injectable({
    providedIn: 'root',
})
export class ReportService {
    private apiUrl = 'https://aaib-task.herokuapp.com/reports';
    behSub = new BehaviorSubject<Report[]>([]);

    constructor(private _http: HttpClient) {}

    getReports() {
        this._http.get<Report[]>(this.apiUrl).subscribe((data) => {
            this.behSub.next(data);
        });
    }
    blockReport(id: string) {
        return this._http.delete<{ message: '' }>(`${this.apiUrl}/${id}`);
    }
    resolveReport(id: string) {
        return this._http.put<{ message: '' }>(`${this.apiUrl}/${id}`, {});
    }
}
