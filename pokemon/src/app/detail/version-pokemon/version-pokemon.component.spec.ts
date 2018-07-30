import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionPokemonComponent } from './version-pokemon.component';

describe('VersionPokemonComponent', () => {
  let component: VersionPokemonComponent;
  let fixture: ComponentFixture<VersionPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
