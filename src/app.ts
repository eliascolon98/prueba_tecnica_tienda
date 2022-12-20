import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import getProducts from './routes/products.routes';
import getRoles from './routes/rol.routes';
import getUsers from './routes/user.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(getProducts);
app.use(getRoles);
app.use(getUsers);


export default app;
