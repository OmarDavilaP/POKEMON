import { TestBed, inject } from '@angular/core/testing';

import { ServicePokemonService } from './service-pokemon.service';

describe('ServicePokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePokemonService]
    });
  });

  it('should be created', inject([ServicePokemonService], (service: ServicePokemonService) => {
    expect(service).toBeTruthy();
  }));
});
