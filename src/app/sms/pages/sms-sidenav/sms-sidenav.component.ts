import { Component } from '@angular/core'
import { menuList } from '../../constant/menu'

@Component({
  selector: 'sms-sidenav',
  templateUrl: './sms-sidenav.component.html',
  styleUrls: ['./sms-sidenav.component.scss']
})
export class SmsSidenavComponent {
  userRole = 'Admin'
  menu = menuList

  menuSelected(row: any) {
    console.log(row)
    this.menu.forEach((obj) => {
      obj.menuClass = row.id === obj.id ? 'selected' : 'def'
    })
  }

}
