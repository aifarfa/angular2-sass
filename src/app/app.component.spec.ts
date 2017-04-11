import { TestBed, async } from '@angular/core/testing'
import { APP_BASE_HREF } from '@angular/common'

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NavComponent } from './nav/nav.component'
import { HowtoComponent } from './howto/howto.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HowtoComponent,
        NavComponent
      ],
      imports: [
        appRoutes
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app works!')
  }))

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('app works!')
  }))
})
