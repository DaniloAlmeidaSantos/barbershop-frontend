import React from 'react';

export default function BtnConfirm({ title, onPress }){
    return(
        <BtnConfirm onPress={onPress}>
            <BtnText>{title}</BtnText>
        </BtnConfirm>
    )
}

import {
    BtnConfirm,
    BtnText
} from './Styles';