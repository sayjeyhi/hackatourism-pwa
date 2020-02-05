import apiMessages from 'constants/Messages/api.messages';

export default {
  GLOBAL_FAILURE: apiMessages.promiseFailed,
  TIMEOUT: apiMessages.timedOut,
  RACE_TIMEOUT: apiMessages.raceTimeout,
  SERVER_CONTENT_TYPE_ERROR: apiMessages.serverContentTypeError,
  SERVER_CONTENT_PARSING_ERROR: apiMessages.serverContentParsingError,
  JWT_TOKEN_ERROR: apiMessages.serverContentParsingError,
};
