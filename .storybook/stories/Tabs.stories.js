import React from "react";
import { Title } from "accessories";
import tablinks from "../../lib/widgets/Tabs/tabs.json";

import { Tabs } from "../../lib/widgets";
// import { TabPane } from "../../lib/widgets/Tabs/tabpane";

export default {
    title: "Desing System/Widgets/Tabs",
};

export const TABS = () => {
    return (
        <div>
            <Title variant="h2">Tabs</Title>
            <Tabs tablinks={tablinks} />
            {/* <TabPane>texto</TabPane> */}
        </div>
    );
};
