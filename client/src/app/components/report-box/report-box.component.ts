import { Component, Input } from '@angular/core';
import { Report } from 'src/app/models/Report';
import { ReportService } from 'src/app/services/report.service';

@Component({
    selector: 'app-report-box',
    templateUrl: './report-box.component.html',
    styleUrls: ['./report-box.component.scss'],
})
export class ReportBoxComponent {
    @Input() data: Report;

    constructor(private reportService: ReportService) {
        this.data = { id: '', state: '', payload: { message: '', reportType: '' } };
    }

    resolveReport(id: string) {
        this.reportService.resolveReport(id).subscribe((msg) => {
            alert(msg.message);
            this.reportService.getReports();
        });
    }
    blockReport(id: string) {
        this.reportService.blockReport(id).subscribe((msg) => {
            alert(msg.message);
            this.reportService.getReports();
        });
    }
}
