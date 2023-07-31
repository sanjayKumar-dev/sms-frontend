import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SmsSidenavComponent } from './sms-sidenav.component'

describe('SmsSidenavComponent', () => {
  let component: SmsSidenavComponent
  let fixture: ComponentFixture<SmsSidenavComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsSidenavComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(SmsSidenavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
