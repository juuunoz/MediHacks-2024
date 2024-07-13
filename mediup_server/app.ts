import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import caseStudiesRoute from './src/routes/caseStudiesRoute';
import authRoute from './src/routes/authRoute';
import { AuthUserResponse } from './src/models/authModel';
const AuthUserSchema = require('./src/schema/authUserSchema');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

export class App {
  private app: express.Application = express();
  private port: string = process.env.PORT || '8080';

  public constructor() {
    this.init();
  }

  public async init() {
    this.setupMiddleware();
    this.setupMongoConnection();
    this.setupPassportAuth();
    this.registerRoutes();
    this.register404Page();
    this.startServer();
  }

  private setupMiddleware() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: 'http://localhost:5173'
      })
    );
  }

  private setupMongoConnection() {
    const mongoDBUriKey: string = process.env.MONGO_ATLAS_URI || '';
    mongoose.connect(mongoDBUriKey);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
    db.once('open', () => console.log('Connected to DB!'));
  }

  private setupPassportAuth() {
    passport.use(
      'login',
      new localStrategy(
        {
          usernameField: 'email',
          passwordField: 'password'
        },
        async (email: any, password: any, done: any) => {
          try {
            const user: AuthUserResponse = await AuthUserSchema.findOne({
              userEmail: email
            });
            if (!user) {
              return done(null, false, { message: 'Incorrect username' });
            }

            bcrypt.compare(
              password,
              user.userPassword,
              (err: any, res: any) => {
                if (res) {
                  return done(null, user, {
                    message: 'Logged in Successfully'
                  });
                } else {
                  return done(null, false, { message: 'Incorrect password' });
                }
              }
            );
          } catch (error) {
            return done(error);
          }
        }
      )
    );
    passport.use(
      new JWTstrategy(
        {
          secretOrKey: process.env.JWT_SECRET,
          jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (token: any, done: any) => {
          try {
            return done(null, token.user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
  }

  private registerRoutes() {
    this.app.get('/api/auth/tests', (req, res) => {
      res.json({ message: 'Hello from the backend!' });
    });
    this.app.use('/api/casestudies', caseStudiesRoute);
    this.app.use('/api/auth', authRoute);
  }

  private register404Page() {
    this.app.get('*', function (req, res) {
      res.status(404).send({ status: 404, message: 'Page Not Found!s' });
    });
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
