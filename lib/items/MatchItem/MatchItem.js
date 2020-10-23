import React from "react";
import PropTypes from "prop-types";
import {
    MatchItemStyles,
    MatchItemTitleStyles,
    MatchItemImageStyles,
    MatchItemTimeStyles,
    MatchItemTeamStyles,
} from "./styles";
import { Box, Image } from "../../accessories";

const MatchItem = props => {
    return (
        <MatchItemStyles {...props}>
            <MatchItemTeamStyles variant="Transparent">
                <Box variant="Flex" >
                    <MatchItemImageStyles>
                        <Image ratio="aspect1x1" iconwidth={["20px", "20px"]} />
                    </MatchItemImageStyles>
                    <MatchItemTitleStyles variant="h5">Olympiacos</MatchItemTitleStyles>
                </Box>
                <Box variant="Flex">
                    <MatchItemImageStyles>
                        <Image ratio="aspect1x1" iconwidth={["20px", "20px"]} />
                    </MatchItemImageStyles>
                    <MatchItemTitleStyles variant="h5">Tottenham</MatchItemTitleStyles>
                </Box>
            </MatchItemTeamStyles>
            <MatchItemTimeStyles>19:45</MatchItemTimeStyles>
        </MatchItemStyles>
    );
};

export default MatchItem;