import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapTextService {

  values = {
    CERTIFIED_DEPOSIT_TERM: 'CDT',
    CREDIT: 'Crédito',
    CREDIT_CARD: 'Tarjeta de Crédito',
    CURRENT_ACCOUNT: 'Cuenta Corriente',
    DEPOSIT_ACCOUNT: 'Cuenta de Ahorros'
  }

  labels = {
    CERTIFIED_DEPOSIT_TERM: ['Valor invertido'],
    CREDIT: [''],
    CREDIT_CARD: ['Cupo disponible', 'Próximo pago mínimo'],
    CURRENT_ACCOUNT: ['En sobregiro', 'Saldo disponible'],
    DEPOSIT_ACCOUNT: ['Saldo disponible'],
  }

  units = {
    Days: 'días'
  }

  constructor() { }

  getValue(key: string) {
    return this.values[key] || 'Sin Discripción';
  }

  getLabelAmount(obj: any) {
    switch (obj.typeAccount) {
      case "CREDIT_CARD":
        if (obj.productAccountBalances.valor_pago_minimo.amount < 1) {
          var amount = obj.productAccountBalances.cupo_disponible_compras_pesos.amount;
          return { label: this.labels[obj.typeAccount][0], amount }
        } else {
          var amount = obj.productAccountBalances.valor_pago_minimo.amount;
          return { label: this.labels[obj.typeAccount][1], amount }
        }

      case "CERTIFIED_DEPOSIT_TERM":
        var amount = obj.productAccountBalances.valor_constitucion.amount;
        return { label: this.labels[obj.typeAccount][0], amount }


      case "CURRENT_ACCOUNT":
        if (obj.productAccountBalances.saldo_actual.amount < 0) {
          var amount = obj.productAccountBalances.saldo_disponible.amount;
          return { label: this.labels[obj.typeAccount][0], amount }
        } else {
          var amount = obj.productAccountBalances.saldo_actual.amount;
          return { label: this.labels[obj.typeAccount][1], amount }
        }

      case "DEPOSIT_ACCOUNT":
        var amount = obj.productAccountBalances.saldo_disponible.amount;
        return { label: this.labels[obj.typeAccount][0], amount }

      default:
        return { label: this.labels[obj.typeAccount][0], amount: 0 }
    }
  }

  getUnits(key: string){
    return this.units[key] || 'Sin unidad';
  }

}
