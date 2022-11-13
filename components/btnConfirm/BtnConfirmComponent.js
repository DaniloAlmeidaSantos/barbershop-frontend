import React from 'react';
import { View } from 'react-native';

export default function BtnConfirmComponent({ title, onPress }) {
  return (
    <BtnConfirm onPress={onPress}>
      <BtnText>{title}</BtnText>
    </BtnConfirm>
  );
}

import { BtnConfirm, BtnText } from './Styles';
