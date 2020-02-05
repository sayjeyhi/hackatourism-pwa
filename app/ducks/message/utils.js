import { normalizeActionType } from '@snappmarket/helpers';
// import { normalizeActionType } from '../../constants/Helpers/reduxHelper';

export const normalizeMessageType = key => {
  const [, normalizedKey] = normalizeActionType(key);
  return normalizedKey || key;
};

export const clearAlert = (key, messages) => {
  const tempMessages = {};
  Object.keys(messages).forEach(messageKey => {
    if (messageKey !== normalizeMessageType(key)) {
      tempMessages[messageKey] = messages[messageKey];
    }
  });

  return tempMessages;
};

export default {
  normalizeMessageType,
  clearAlert,
};
