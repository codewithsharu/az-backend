const app = require("./app");

const PORT = 5000; // explicit port

app.listen(PORT, () => {
  console.log(`✅ Backend listening on http://localhost:${PORT}`);
});