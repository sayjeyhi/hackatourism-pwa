/* eslint-disable no-console,import/no-unresolved,consistent-return */
const path = require('path');

const BUILD_DIR = path.join(
  path.resolve(process.cwd(), 'build'),
  process.env.PUBLIC_URL,
);

const { app } = require(`${BUILD_DIR}\\server`);
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on port ${PORT}`,);
});
/* eslint-enable no-console,import/no-unresolved,consistent-return */
