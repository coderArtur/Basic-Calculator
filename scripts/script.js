function calcular(n1, n2) {
  n1 = Number(document.getElementById('n1').value)
  n2 = Number(document.getElementById('n2').value)

  selector = document.getElementById('selector').value

  switch (selector) {
    case '+':
      calculo = n1 + n2
      document.getElementById(
        'resultado'
      ).innerHTML = `O resultado da soma é ${calculo}`
      break
    case '-':
      calculo = n1 - n2
      document.getElementById(
        'resultado'
      ).innerHTML = `O resultado da subtração é ${calculo}`
      break
    case 'x':
      calculo = n1 * n2
      document.getElementById(
        'resultado'
      ).innerHTML = `O resultado da multiplicação é ${calculo}`
      break
    case '/':
      calculo = n1 / n2
      if (Number.isNaN(calculo)) {
        document.getElementById('resultado').innerHTML = `Insira um numero!`
      } else {
        document.getElementById(
          'resultado'
        ).innerHTML = `O resultado da divisão é ${calculo}`
      }
    case '%':
      calculo = (n1 / 100) * n2
      document.getElementById(
        'resultado'
      ).innerHTML = `${n1}% de ${n2} é ${calculo}`
      break
  }
}
