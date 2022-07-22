import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import Correios from "./Correios/Correios";
import ICorreios from "./Correios/ICorreios";
import Transportadora from "./Transportadora/Transportadora";

const transport: ICorreios = new TransportadoraAdapter(new Transportadora)
transport.receiveCorreios()
transport.sendCorreios()

const transport1: ICorreios = new Correios()
transport1.receiveCorreios()
transport1.sendCorreios()