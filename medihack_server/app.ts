import express from 'express';
import bodyParser from 'body-parser';

export class App {
  private app: express.Application = express();
  private port: string = process.env.PORT || "8080";

  public constructor() {
    this.init();
  }

  public async init() {
    this.setupMiddleware();
    this.registerTestController();
    this.register404Page();
    this.startServer();
  }

  private setupMiddleware() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  private registerTestController() {
    this.app.get('/', (req, res) => {
      res.json({
        title: 1,
        mode: 2,
        date: new Date(),
      });
    });
  }

  private register404Page() {
    this.app.get('*', function (req, res) {
      res.status(404).send({ status: 404, message: 'Page Not Found!' });
    });
  }

  private startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
