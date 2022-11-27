import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Banner = tw.section`
    mb-0
`;

export const BGWhite = tw.div`
    bg-white
`;

export const CenterItems = tw.div`
    flex items-center
`;

export const SvgContainer = styled.div<{
    color?: string;
    height?: number
    width?: number
}>`
    height: auto;
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.color ? `${props.color}` : 'inherit')};
    cursor: pointer;
    & svg {
        height: ${props => (props.height ? `calc(${props.height}px + 0.5rem)` : null)};
        width: ${props => (props.width ? `calc(.2vw + ${props.width}px)` : `.5rem`)};
    }
    &:hover {
        color: rgb(139 92 246);
    }
`;

export const GridFull = tw.div`
    mt-12 lg:mt-0
`;

export const H1Typography = tw.h1`
    text-4xl md:text-5xl xl:text-6xl 
    font-bold tracking-tight mb-12
`;

export const H2Typography = tw.h2`
    text-2xl font-bold tracking-tight text-gray-900
`;

export const H3Typography = tw.h3`
    text-sm text-gray-700
`;

export const LinkTypography = tw.div`
    absolute inset-0
`;

export const ParagraphTypography = tw.p`
    text-sm font-medium text-gray-900
`;

export const ImageLink = tw.a``;

export const FlexContainer = tw.div`
    md:flex flex-row
`;

export const TypographyCustom = styled.span<{
    color?: string;
    height?: number
    width?: number
}>`
  height: auto;
  width: auto;
  color: ${props => (props.color ? `${props.color}` : 'inherit')};
`;

export const SearchButton = tw.button`
    inline-block px-7 py-3 bg-blue-600 
    text-white font-medium text-sm 
    leading-snug uppercase rounded 
    shadow-md hover:bg-blue-700 
    hover:shadow-lg focus:bg-blue-700 
    focus:shadow-lg focus:outline-none 
    focus:ring-0 active:bg-blue-800 
    active:shadow-lg transition 
    duration-150 ease-in-out
`;

export const CardImageContainer = tw.div`
    min-h-fit aspect-w-1 aspect-h-1 
    w-full overflow-hidden rounded-md
    bg-gray-200 group-hover:opacity-75 
    lg:aspect-none
`;

export const CardImage = tw.img`
    h-full w-full object-cover 
    object-center lg:h-full lg:w-full
`;

export const GroupItemsBlock = tw.div`
    inline-block
`;
