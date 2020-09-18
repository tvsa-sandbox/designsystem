import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";

import EnhancementVideo from "../../lib/widgets/EnhancementVideo";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/enhancement/EnhancementVideo",
};

export const ENHANCEMENTVIDEO = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return <EnhancementVideo ratio={aspect} src={SRC} {...props} />;
};
