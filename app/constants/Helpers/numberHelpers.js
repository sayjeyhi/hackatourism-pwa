import { currencyPrice as currencyPriceConverter } from '@snappmarket/helpers';
import generalMessages from 'constants/Messages/general.messages';

// @note : use @snappmarket/helpers for every purpose, JUST when you do not have method there add your method here

export const currencyPrice = (amount, hasUnit = true) =>
  `${currencyPriceConverter(amount, hasUnit)} ${
    hasUnit ? ` ${generalMessages.pricingUnit}` : ''
  }`;
