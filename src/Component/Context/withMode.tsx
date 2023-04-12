import { ComponentType, useContext } from "react";
import { ModeContext } from "./Context";

function withMode(IncomingComponent:ComponentType<any>){

    return function OutgoingComponent(props:any){
        const data = useContext(ModeContext);
        return <IncomingComponent {...props} {...data} />
    }

}
export default withMode