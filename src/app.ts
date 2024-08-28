import express, { Application } from 'express';
import { setupSwagger } from './swagger';
import repoRoutes from './routes/repoRoutes';

const app: Application = express();

app.use(express.json());
setupSwagger(app);
app.use('/api/repos', repoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
