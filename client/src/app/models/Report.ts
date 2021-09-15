export interface Report {
    payload: {
        reportType: string;
        message: string;
    };
    id: string;
    state: string;
}
