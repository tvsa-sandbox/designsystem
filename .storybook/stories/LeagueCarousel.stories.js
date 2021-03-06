import React, { Fragment } from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box } from "accessories";
import { LeagueCarousel } from "widgets";

export default {
    title: "Desing System/Widgets/LeagueCarousel",
};
import Mock from "./imageMock.json";

export const LEAGUECAROUSEL = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
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
    return (
        <div>
            <Title variant="h2">LeagueCarousel</Title>
            <Box my="lg" variant="Transparent">
                <LeagueCarousel ratio={aspect} src={SRC} />
            </Box>
        </div>
    );
};
