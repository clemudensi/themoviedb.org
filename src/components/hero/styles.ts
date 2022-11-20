import styled from '@emotion/styled';
import tw from "twin.macro";

export const HeroContainer = styled.div`
	${tw`
		px-6 py-24 md:px-12 text-gray-800 
        text-center lg:text-left
	`}
    height: 100%; 
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-image: url(https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
`;

export const HeroChildContainer = tw.div`
    container mx-auto xl:px-32
`;

export const HeroSectionGrid = tw.div`
    grid lg:grid-cols-2 gap-12 flex items-center
`;

export const Input = tw.input`
    block w-full 
    px-4 py-2 mb-2 md:mb-0 md:mr-2 
    text-xl font-normal text-gray-700 
    bg-white bg-clip-padding border 
    border-solid border-gray-300 
    rounded transition ease-in-out 
    m-0 focus:text-gray-700 focus:bg-white 
    focus:border-blue-600 
    focus:outline-none
`;
