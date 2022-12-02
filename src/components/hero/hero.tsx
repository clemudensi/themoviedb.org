import {
    FlexContainer,
    GridFull,
    H1Typography,
    Banner,
    TypographyCustom,
    Navbar,
    HeroChildContainer,
    HeroContainer,
    Searchbar
} from 'components'
import { SearchbarProps } from 'types';

export const Hero = ({handleSearch}: SearchbarProps) => {
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
                            <Searchbar handleSearch={handleSearch} />
                        </FlexContainer>
                    </GridFull>
                </HeroChildContainer>
            </HeroContainer>
        </Banner>
    )
}