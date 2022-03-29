import GridSwitcher from "./GridSwitcher/GridSwitcher";
import GridMessage from "./GridMessage/GridMessage";
import React, {useState} from "react";
import GridSwitcherHookVersion from "../People/PeopleToolBar/GridSwitcherHookVersion";
import useGridSwitcherHook from "./GridSwitcher/useGridSwitcherHook";
import {Tree} from "antd";
import ManagersTree from "./StructureTree/ManagersTree";

export default function HomeFunc() {
    const [Managers, TreeManagers] = useGridSwitcherHook();
    const [NodeData, setNodeData] = useState([[],]);
    let getNodeData = (value, ele) => {
        //    拿到nodedata之后,传值给request,得到当前节点下所有人员的信息.
        setNodeData(ele.nodeData)
    }

        return (
            <div>
                <GridSwitcherHookVersion
                    value={TreeManagers}
                    style={{
                        width: '90%'
                    }}
                    getNodeData={getNodeData}
                />
                {/*<GridMessage*/}
                {/*    Managers={TreeManagers}*/}
                {/*    nodeData={NodeData}*/}
                {/*    getNodeData={getNodeData}/>*/}
                <ManagersTree Managers={TreeManagers}/>
            </div>
        )

}