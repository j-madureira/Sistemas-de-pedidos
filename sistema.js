/* Criar 3 variáveis, uma irá conter a localização do cliente
   Segunda variável vai conter o nome
   A terceira a idade para conferiar se o cliente tem a idade miníma para efetuar
   o pedido.
   E para que o cliente tenha o direito de fazer o pedido ele precisa ter pelo menos
   18 anos ou mais
*/

var localizacao = prompt(`Informe sua localização:`);
var nome = prompt(`Digite seu nome:`);
alert(`${nome}, informe a sua idade para conferir se você tem direito a utilizar o sistema`);
var idade = prompt(`Digite sua idade:`);

if(idade >= 18){
    console.log(`localização do cliente para a entrega: ${localizacao}`);
    console.log(`Nome do cliente: ${nome}`);
    console.log(`Idade confirmada, autorizado para efetuar o pedido`);
    alert(`Certo ${nome}, você tem  autorização para efetuar seu pedido!`)
    var pedido = prompt(`${nome}, faça seu pedido !`);
    alert(`${nome}, pedido finalizado! seu pedido: ${pedido}, está saindo para entrega no endereço: ${localizacao}`);
}

else{
    console.log(`Cliente não autorizado para fazer pedidos`)
    alert(`Você não tem autorização para fazer o pedido!`)
}