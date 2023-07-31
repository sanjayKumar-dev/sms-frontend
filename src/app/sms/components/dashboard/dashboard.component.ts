import { Component, OnInit } from '@angular/core'
import { DashboardService } from '../../services/dashboard.service'
import { stats } from '../../constant/dashboards/dashboard'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  states = stats

  constructor(public service: DashboardService){''}

  ngOnInit() {
    this.service.getDashboardStats().subscribe((res) => {
      this.states = res
    })
  }



}
