export default {
  normalizeSomeTypes: actions => {
    const temp = {};
    actions.forEach(action => {
      const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

      if (matches) {
        const [, requestActionName] = matches;
        temp[requestActionName] = null;
      }
    });
    return temp;
  },
};
