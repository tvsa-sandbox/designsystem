import React from "react";
import Utils from "@televisadigital/nxtv-utilities";

import Gallery from "../../lib/contentTypes/Gallery";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Template/CTGallery",
};

export const GALLERY = args => {
    const { aspect = "aspect4x3", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect16x9",
            query: "(min-width: 0px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        slides: [
            {
                desktop: IMG[0],
                mobile: IMG[1],
            },
        ],
        carousel: [
            {
                desktop: {},
                mobile: IMG[2],
            },
        ],
    };
    return <Gallery slides={SRC.slides[0]} items={SRC.carousel[0]} />;
};
