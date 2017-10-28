import * as express from 'express';
const exampleRouter = express.Router();



exampleRouter.get('/example1', example1);
exampleRouter.get('/example2', example2);



function example1 (req: express.Request, res: express.Response) {
  const testData = {
    firstName: 'Hello,',
    lastName: 'World'
  };

  res.send(testData);
}

function example2 (req: express.Request, res: express.Response) {
  res.send({message: 'data from example 2 api endpoint'});
}


export = exampleRouter;


