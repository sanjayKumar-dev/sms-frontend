import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { stats } from '../constant/dashboards/dashboard'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getDashboardStats(){
    return of(stats)
  }

}
