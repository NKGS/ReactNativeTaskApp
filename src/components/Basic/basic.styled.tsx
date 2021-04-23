import styled from 'styled-components';
import * as ReactNative from 'react-native';
import { FontColor } from '../../config/theme';

export type Font = 'RobotoCondensed-Regular'

type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'super' | 'max'

export const fontSizes : { [index in FontSize]: string } = {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '24px',
    super: '32px',
    max: '54px'
}

export const lineHeights: { [index in FontSize] : string} = {
    xs: '12px',
    s: '13px',
    m: '21px',
    l: '24px',
    xl: '27px',
    xxl: '36px',
    super: '48px',
    max: '81px',
}

type FontType = 'regular' | 'bold' | 'italic';


const fontFamilies: { [index in FontType]: string } = {
    regular: 'RobotoCondensed-Regular',
    bold: 'RobotoCondensed-Bold',
    italic: 'RobotoCondensed-Italic',
};

export interface IStyledCustomText {
    size: FontSize,
    fontType: FontType,
    fontColor: FontColor
}

export const StyledCustomText = styled.Text<IStyledCustomText>`
  font-size: ${(props) => fontSizes[props.size]};
  line-height: ${(props) => lineHeights[props.size]};
  font-family: ${(props) => fontFamilies[props.fontType]};
`;

//  color: ${(props) => props.theme.fontColors[props.fontColor]};

export const StyledBaseScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;


//  background-color: ${({ theme }) => theme.backgroundColor};