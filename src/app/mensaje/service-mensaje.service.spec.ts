import { TestBed } from '@angular/core/testing';

import { ServiceMensajeService } from './service-mensaje.service';

describe('ServiceMensajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMensajeService = TestBed.get(ServiceMensajeService);
    expect(service).toBeTruthy();
  });
});
