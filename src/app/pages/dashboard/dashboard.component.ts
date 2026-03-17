import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
    title: string;
    value: number | string;
    change: string;
    trend: 'up' | 'down';
}

interface TableItem {
    user: string;
    action: string;
    status: 'Completed' | 'Pending' | 'Failed';
    date: string;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    stats: StatCard[] = [
        {
            title: 'Total Users',
            value: 1240,
            change: '+12%',
            trend: 'up',
        },
        {
            title: 'Revenue',
            value: '$8,540',
            change: '+8%',
            trend: 'up',
        },
        {
            title: 'Orders',
            value: 320,
            change: '-5%',
            trend: 'down',
        },
        {
            title: 'Conversion Rate',
            value: '4.2%',
            change: '+1.1%',
            trend: 'up',
        },
    ];

    tableData: TableItem[] = [
        {
            user: 'John Doe',
            action: 'Created account',
            status: 'Completed',
            date: '2026-03-15',
        },
        {
            user: 'Jane Smith',
            action: 'Placed order',
            status: 'Pending',
            date: '2026-03-14',
        },
        {
            user: 'Michael Brown',
            action: 'Payment failed',
            status: 'Failed',
            date: '2026-03-13',
        },
        {
            user: 'Emily Johnson',
            action: 'Updated profile',
            status: 'Completed',
            date: '2026-03-12',
        },
    ];
}
