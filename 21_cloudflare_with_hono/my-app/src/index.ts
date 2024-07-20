import { Hono } from 'hono';

const app = new Hono();

app.post('/', async (c) => {
  try {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header('Authorization'));
    console.log(c.req.query('param'));

    return c.text('Hello Hono!');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return c.text('Invalid JSON input', 400);
  }
});

export default app;