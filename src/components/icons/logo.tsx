import { FC } from 'react';
import { IconWrapper } from 'components';
import { SVGProps } from './types';
import { ReactComponent as Icon }  from 'assets/svg/logo.svg';

const Logo: FC<SVGProps> = props => {
    return (
        <IconWrapper {...props}>
            <Icon />
        </IconWrapper>
    )
};

export { Logo };
