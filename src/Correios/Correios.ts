import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log('Enviando via correios.')
    }
    receiveCorreios(): void {
        console.log('Recebendo via correios.')
    }

}