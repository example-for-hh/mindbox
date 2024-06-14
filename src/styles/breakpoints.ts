type TBreakpoints = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    custom: (width: number) => string;
};

export interface IMediaQueriesBreakpoints {
    min: TBreakpoints;
    max: TBreakpoints;
}

export const customMinMediaQuery = (minWidth: number) =>
    `@media (min-width: ${minWidth}px)`;

export const customMaxMediaQuery = (maxWidth: number) =>
    `@media (max-width: ${maxWidth}px)`;


export const media: IMediaQueriesBreakpoints = {
    min: {
        xs: customMinMediaQuery(330),
        sm: customMinMediaQuery(592),
        md: customMinMediaQuery(768),
        lg: customMinMediaQuery(992),
        xl: customMinMediaQuery(1024),
        xxl: customMinMediaQuery(1200),
        custom: customMinMediaQuery,
    },
    max: {
        xs: customMaxMediaQuery(330),
        sm: customMaxMediaQuery(592),
        md: customMaxMediaQuery(768),
        lg: customMaxMediaQuery(992),
        xl: customMaxMediaQuery(1024),
        xxl: customMaxMediaQuery(1200),
        custom: customMaxMediaQuery,
    },
};
