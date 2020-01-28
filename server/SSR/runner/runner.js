/* eslint-disable no-console,import/no-unresolved,consistent-return */
const { app: runner } = require('./index');
const PORT = process.env.PORT || 3000;

runner.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on port ${PORT}`);
});
/* eslint-enable no-console,import/no-unresolved,consistent-return */
