import tw from 'twin.macro';

export const CardGroup = tw.div`
    relative
`;

export const CardImageContainer = tw.div`
    min-h-fit aspect-w-1 aspect-h-1 
    w-full overflow-hidden rounded-md
    bg-gray-200 group-hover:opacity-75 
    lg:aspect-none
`;

export const CardGroupTitle = tw.div`
    mt-4 flex justify-between
`;

export const MovieTitle = tw.div`
    w-3/5
`;