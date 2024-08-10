import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DateUtil {



  converterDDMMYYYYParaISO(data: string|null): string {
    if(!data){
      return '';
    }
    // Dividir a data em dia, mês e ano
    const partesData = data.split('/');

    // Certifique-se de que há três elementos (dia, mês e ano)
    if (partesData.length !== 3) {
      return '';
    }

    // Extrair dia, mês e ano
    const dia = partesData[0];
    const mes = partesData[1];
    const ano = partesData[2];

    // Construir uma string ISO 8601 formatada (YYYY-MM-DD)
    const dataISO8601 = `${ano}-${mes}-${dia}`;

    return dataISO8601;
  }

  converterISOParaDDMMYYYY(dataISO8601: string|null) {
    const arrayDta = dataISO8601?.split('-');

    const year = arrayDta![0];

    const month = arrayDta![1];

    const day = arrayDta![2].split('T')[0];

    // Formatar a data no formato "DD/MM/YYYY"
    return day + '/' + month + '/' + year;
  }

}
