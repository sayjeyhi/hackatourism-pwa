// Express requirements
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import helmet from 'helmet';
import responseTime from 'response-time';
import cookieParser from 'cookie-parser';
import { flattenObject } from '@snappmarket/helpers';

import routes from 'components/Common/Router/routes';

// Our loader - this basically acts as the entry point for each page load
import { renderServerSideApp } from './loader';

// Create our express app using the port optionally specified
export const app = express();

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());

// log into files
// app.use(
//   morgan('common', {
//     skip(req, res) {
//       return res.statusCode < 400;
//     },
//     stream: fs.createWriteStream(
//       path.join(
//         __dirname,
//         `logs/access-${new Date()
//           .toLocaleDateString()
//           .replace(/\//g, '-')}.log`,
//       ),
//       {
//         flags: 'a',
//       },
//     ),
//   }),
// );

// Set up homepage, static assets, and capture everything else
app.use(express.static(path.resolve(process.cwd(), 'build')));

// set response time header
app.use(
  responseTime((_req, res, time) => {
    res.setHeader('X-Response-Time', `${time.toFixed(2)}ms`);
    res.setHeader('Server-Timing', `renderServerSideApp;dur=${time}`);
  }),
);

const allReactRoutes = Object.values(flattenObject(routes));
app.get([...new Set(allReactRoutes)], renderServerSideApp);

export default app;
