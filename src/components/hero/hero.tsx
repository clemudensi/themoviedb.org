import {
    FlexContainer,
    GridFull,
    H1Typography,
    Banner,
    SearchButton,
    TypographyCustom,
    Navbar,
    HeroChildContainer,
    HeroContainer,
    Input, Searchbar
} from 'components'

export const Hero = () => {
    return (
        <Banner>
            <Navbar/>
            <HeroContainer>
                <HeroChildContainer>
                    <GridFull>
                        <H1Typography>
                            Are you ready <br />
                            <TypographyCustom color="#2363eb">
                                for an adventure?
                            </TypographyCustom>
                        </H1Typography>
                        <FlexContainer>
                            <Searchbar />
                        </FlexContainer>
                    </GridFull>
                </HeroChildContainer>
            </HeroContainer>
        </Banner>
    )
}