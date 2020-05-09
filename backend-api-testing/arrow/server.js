'use strict';

const routes = require('./routes');
const port = 8080;

routes.listen(port, () => {
  console.log(`Server running on ${port}`);
});
