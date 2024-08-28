import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger';
import repoRoutes from './routes/repoRoutes';

const app: Application = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/repos', repoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;