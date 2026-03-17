import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardComponent, StatCard, TableItem } from './dashboard.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let component: DashboardComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DashboardComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('populateStatCard', () => {
        it('should validate returned values', () => {
            const returnedList: StatCard[] = component.populateStatCard();
            expect(returnedList.length).toBe(4);
        });
    });

    describe('populateTableItem', () => {
        it('should validate returned values', () => {
            const returnedList: TableItem[] = component.populateTableItem();
            expect(returnedList.length).toBe(4);
        });
    })
});