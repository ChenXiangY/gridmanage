import UseGridSwitcherHook from "../Home/GridSwitcher/useGridSwitcherHook";
import {useEffect, useState} from "react";
import GridSwitcherHookVersion from "./GridSwitcherHookVersion";

export default function People(){
    const [Managers, TreeManagers] = UseGridSwitcherHook();
    const [NodeData, setNodeData] = useState([]);
    let getNodeData=(value,ele)=>{
        setNodeData(ele)
    }

    return(
        <GridSwitcherHookVersion
            value={TreeManagers}
            getNodeData={getNodeData}
        />
    )
}