import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report';
import { ReportService } from 'src/app/services/report.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
    constructor(private reportService: ReportService) {}

    reports: Report[] = [];

    ngOnInit(): void {
        this.reportService.getReports();
        this.reportService.behSub.subscribe((data) => {
            this.reports = data;
        });
    }
}
