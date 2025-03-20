const dataInicial = new Date('2021-06-09T00:00:00');
function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicial;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('contadorTempo').innerHTML = `Desde o primeiro beijo:<br>${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}
setInterval(atualizarContador, 1000);