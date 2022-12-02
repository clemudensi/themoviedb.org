import tw from 'twin.macro';

export const MovieListContainer = tw.div`
    mx-auto max-w-2xl py-16 
    px-4 sm:py-24 sm:px-6 
    lg:max-w-7xl lg:px-8
`;

export const MovieListItems = tw.div`
    mt-6 grid grid-cols-1 gap-y-10
     gap-x-6 sm:grid-cols-2 
     lg:grid-cols-4 xl:gap-x-8
`;