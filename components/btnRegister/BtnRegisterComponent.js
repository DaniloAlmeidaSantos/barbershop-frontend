import React from 'react';

export default function BtnConfirmComponent({ title, onPress }) {
  return (
    <BtnRegister onPress={onPress}>
      <BtnText>{title}</BtnText>
    </BtnRegister>
  );
}

import { BtnRegister, BtnText } from './Styles';
