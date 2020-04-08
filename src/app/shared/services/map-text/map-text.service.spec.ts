import { TestBed } from '@angular/core/testing';

import { MapTextService } from './map-text.service';

describe('MapTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Debe crear el servicio', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service).toBeTruthy();
  });

  it('getValue() debe retornar string', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(typeof service.getValue('CERTIFIED_DEPOSIT_TERM')).toBe('string');
  });

  it('getValue("CERTIFIED_DEPOSIT_TERM") debe retornar CDT', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service.getValue('CERTIFIED_DEPOSIT_TERM')).toBe('CDT');
  });

  it('getValue("CREDIT") debe retornar Crédito', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service.getValue('CREDIT')).toBe('Crédito');
  });

  it('getValue("CREDIT_CARD") debe retornar Tarjeta de Crédito', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service.getValue('CREDIT_CARD')).toBe('Tarjeta de Crédito');
  });

  it('getValue("CURRENT_ACCOUNT") debe retornar Cuenta Corriente', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service.getValue('CURRENT_ACCOUNT')).toBe('Cuenta Corriente');
  });

  it('getValue("DEPOSIT_ACCOUNT") debe retornar Cuenta de Ahorros', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service.getValue('DEPOSIT_ACCOUNT')).toBe('Cuenta de Ahorros');
  });

  it('getLabelAmount(object) debe retornar objeto', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    const input = {typeAccount:"DEPOSIT_ACCOUNT",productAccountBalances:{saldo_disponible:{amount: 956000}}};
    expect(typeof service.getLabelAmount(input)).toBe('object');
  });

});
