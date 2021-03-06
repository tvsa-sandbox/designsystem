import React from "react";
import { Title } from "accessories";

import NotFound from "../../lib/contentTypes/NotFound";

export default {
    title: "Desing System/Template/NotFound",
};

export const NOTFOUND = args => {
    return (
        <div>
            <Title variant="h2">404</Title>
            <NotFound />
        </div>
    );
};
