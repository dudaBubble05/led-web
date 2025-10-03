let clientWeb = null;

const clientId = "ESP8266" + Math.floor(Math.random() * 900) + 100;
clientWeb = new Paho.MQTT.Client("broker.emqx.io", 8084, clientId);
// clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSucess: function(){
        alert(`Conectado com sucesso!! :) `)
    },
    onFailure: function (){
        alert(`A conexão falhou! :( `)
    }
})


function ligarAzul(){
    document.getElementById("azul").classList.add("amar");

    // fazendo publish no tópico, (broken)
    const msgAmar = PaymentMethodChangeEvent.MQTT.Message("");
    msgAmar.destinationName = "MEPF2007/led/on"
    clientWeb.send(msgAmar)
}

function desligar(){
    document.getElementById("azul").classList.remove("amar");

    let msg = new Paho.MQTT.Message(``);
    msg.destinationName = "MEPF2007/led/off"
    clientWeb.send(msg)
}