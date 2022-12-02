import tw from 'twin.macro';
import { GroupItemsBlock } from 'components';

export const DetailsContainer = tw(GroupItemsBlock)`
    bg-white pt-6 m-20
`;

export const MovieDetailImage = tw.div`
    mx-auto mt-6 max-w-2xl sm:px-6 
    lg:grid lg:max-w-7xl lg:grid-cols-3 
    lg:gap-x-8 lg:px-8
`;

export const ImageContainer = tw.div`
    aspect-w-3 aspect-h-4 hidden 
    overflow-hidden rounded-lg lg:block
`;

export const DetailSection = tw.div`
    py-10 lg:col-span-2 lg:col-start-1 
    lg:border-r lg:border-gray-200 
    lg:pt-6 lg:pb-16 lg:pr-8
`;

export const DetailTextSection = tw(MovieDetailImage)`
   lg:grid-rows-[auto,auto,1fr] lg:pt-16 lg:pb-24
`;

export const DetailText = tw.div`
    lg:col-span-2 lg:border-r 
    lg:border-gray-200 lg:pr-8
`;

export const MovieDetailContainer = tw.div`
    space-y-6
`;

export const MovieNameSection = tw.div`mt-10`;
export const MovieDetailSection = tw.div`mt-4`;