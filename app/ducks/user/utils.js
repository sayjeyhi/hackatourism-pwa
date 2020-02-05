export default {
  normalizeProfile: data => {
    const {
      id,
      username,
      firstname,
      lastname,
      cellphone,
      email,
      credit,
      hash,
    } = data;
    return {
      id,
      username,
      firstname,
      lastname,
      cellphone,
      email,
      credit,
      hash,
    };
  },
};
