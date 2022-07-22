import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log('Enviando via transportadora.')
    }
    recieve(): void {
        console.log('Recebendo via transportadora.')
    }

}