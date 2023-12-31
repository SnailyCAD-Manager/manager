import { Socket } from "socket.io";
import HandleCreateInstance from "./create-instance";
import HandleLoadInstances from "./load-instances";
import HandleStartInstance from "./start-instance";
import HandleSaveEnv from "./save-env";

export default function HandleAllSockets(socket: Socket) {
    HandleCreateInstance(socket);
    HandleLoadInstances(socket);
    HandleStartInstance(socket);
    HandleSaveEnv(socket);
}
