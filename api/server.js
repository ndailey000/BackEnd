const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const adminsRouter = require('../admin/admin-router.js');
const storiesRouter = require('../stories/stories-router.js');
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/auth', authRouter);
server.use('/admin', authenticate, adminsRouter);
// server.use('/story',storiesRouter);
server.use('/auth', authRouter);



module.exports = server;
