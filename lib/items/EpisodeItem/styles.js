import styled, { css } from "styled-components";
import { Box, Title, Image, Text, Time, Icons } from "../../accessories";

const EpisodeItemStyles = styled.a(
    ({ theme }) => css`
        border-radius: 6px;
        width: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        width:  240px;
        margin: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
        height: 306px;
        }
        `,
);

const EpisodeCaptionStyles = styled(Box)(
    ({ theme }) => css`
    border-radius: 6px;
    height: auto;
    background: ${theme.colors.gray4};
    min-height: 145px;

    @media (min-width: ${theme.breakpoints.xl}) {
            height: 171px;
        }
        `,
);

const EpisodeImageStyles = styled(Image)(
    ({ theme }) => css`
    width: 165px;
    height: 220px;

@media (min-width: ${theme.breakpoints.xl}) {
            height: 328px;
            width: 246px;
        }
        `,
);

const EpisodeThumbnailStyles = styled(Box)`
 text-transform: uppercase;
 background: transparent;
`;

const EpisodeLabelStyles = styled(Text)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fxs};
    line-height: ${theme.lineHeights.lbase};
    color: ${theme.colors.gray};
    width: 100%;

        `,
);

const EpisodeDurationStyles = styled(Time)(
    ({ theme }) => css`
    text-transform: uppercase;
    background: Transparent;
    display: flex;
    font-size: ${theme.fontSizes.fxs};

    `,
);

const EpisodeTitleStyles = styled(Title)(
    ({ theme }) => css`
                color: ${theme.colors.gray};
                font-size: ${theme.fontSizes.fmd};
                line-height: ${theme.lineHeights.lmd};
                margin: ${theme.space.base} ${theme.space.md};
                padding-bottom: ${theme.space.base};
                overflow: hidden;
                max-height: 75px;
                border-bottom: 1px solid ${theme.colors.gray2};

                @media (min-width: ${theme.breakpoints.lg}) {
                    font-size: ${theme.fontSizes.fmd};
                    line-height: ${theme.lineHeights.llg};
                    margin: ${theme.space.md} ${theme.space.md};
                    max-height: 72px;
        }
    `,
);

const EpisodeSectionStyles = styled(Text)(
    ({ theme }) => css`
        position: absolute;
        left: 0;
        bottom: 5px;
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
        margin:${theme.space.xs} ${theme.space.md};
        color: ${theme.colors.gray};
        text-align: right;
        display: block;

                @media (min-width: ${theme.breakpoints.xl}) {
                    bottom: 10px;

        }
        `,
);

const EpisodeBoxIconStyles = styled(Box)(
    ({ theme }) => css`
        justify-content: flex-end;
        display: flex;
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.auto};
        position: absolute;
        right: 0;
        bottom: 0px;
        @media (min-width: ${theme.breakpoints.xl}) {
                    bottom: 5px;

        }
        `,
);

const EpisodeIconStyles = styled(Icons)(
    ({ theme }) => css`
    width: 35px;
        height: 35px;
        fill: ${theme.colors.gray};
    `,
);

const EpisodeBoxStyles = styled(Box)(
    ({ theme }) => css`
    display: flex;
    height: 25px;
    align-items: center;
    padding: ${theme.space.md} ${theme.space.md} ${theme.space.zero};

    @media (min-width: ${theme.breakpoints.xl}) {
        height: 40px;
        padding: ${theme.space.base} ${theme.space.md} ${theme.space.zero};

        }    
    `,
);

export {
    EpisodeItemStyles,
    EpisodeImageStyles,
    EpisodeTitleStyles,
    EpisodeCaptionStyles,
    EpisodeLabelStyles,
    EpisodeSectionStyles,
    EpisodeThumbnailStyles,
    EpisodeDurationStyles,
    EpisodeBoxIconStyles,
    EpisodeIconStyles,
    EpisodeBoxStyles,
};