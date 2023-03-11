import React from 'react';
import { useController } from 'react-hook-form';
import { StyledToggle, StyledCircleDiv, StyledLabel, StyledContainer} from '../ModalAddTransaction/Toggle.styled';
import { useTranslation } from 'react-i18next';
const DEFAULT_LABEL_COLOR = '#E0E0E0'
const RED_LABEL_COLOR = 'rgba(36, 204, 167, 1)'
const GREEN_LABEL_COLOR = 'rgba(255, 101, 150, 1)'

function Toggle({ name, control, disabled }) {
  const { t } = useTranslation();
  const { field } = useController({
    name,
    control,
    defaultValue: false,
  });

  const isActive = !!field.value

  const handleClick = (e) => {
    e.preventDefault();

    if (disabled) {
      return
    }

    field.onChange(!field.value);
  };

  return (
    <StyledContainer>
      <StyledLabel color={!isActive ? RED_LABEL_COLOR : DEFAULT_LABEL_COLOR}>{t('modalAddTransactionIncomesType')}</StyledLabel>
      <StyledToggle active={isActive} disabled={disabled} onClick={handleClick}>
        <StyledCircleDiv active={isActive}>{isActive ? '–' : '+'}</StyledCircleDiv>
      </StyledToggle>
      <StyledLabel color={isActive ? GREEN_LABEL_COLOR : DEFAULT_LABEL_COLOR}>{t('modalAddTransactionOutcomesType')}</StyledLabel>
    </StyledContainer>
  );
}

export default Toggle;
