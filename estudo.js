let p1 =  Number(window.prompt('Calculadora WEB (1,2,3,4,5,6,7,8,9,10)' )); //pergunta 01
let p2 =  Number(window.prompt('Escolha outro numero (' + p1 + ') 1,2,3,4,5,6,7,8,9,10')); //pergunta 02
let n1 = p1 ** p2
let n2 = p1 * p2
let n3 = p1 / p2
let n4 = p1 % p2
let n5 = p1 + p2
let n6 = p1 - p2
let r = p1 + p2 //irá execultar as duas perguntas e fazer a soma em diferentes formas

 window.alert(` A sua potencialização  ${p1} ** ${p2} É : ${n1}` )
 window.alert(` A sua multiplicação  ${p1} * ${p2} É : ${n2}`)
 window.alert(`A sua divisão  ${p1} / ${p2} É : ${n3}`)
 window.alert(` A sua porcetagem  ${p1} % ${p2} É : ${n4}`)
 window.alert(`A sua soma  ${p1} + ${p2} É : ${n5}`)
 window.alert(`A sua substracão ${p1} - ${p2} É : ${n6}`)
 document.write(`A sua potencialização ${p1} ** ${p2} É : <strong>${n1}</strong><br>`)
 document.write(` A sua multiplicação  ${p1} * ${p2} É : <strong>${n2}</strong><br>`)
 document.write(` A sua divisão  ${p1} / ${p2} : <strong>${n3}</strong><br>`)
 document.write(`A sua porcetagem  ${p1} % ${p2} : <strong>${n4}</strong><br>`)
 document.write(`A sua soma  ${p1} + ${p2} É : <strong>${n5}</strong><br>`)
 document.write(`A sua substracão ${p1} - ${p2} É : <strong>${n6}</strong><br>`)