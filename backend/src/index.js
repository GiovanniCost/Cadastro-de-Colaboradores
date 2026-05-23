import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected Mongo"))
  .catch((erro) => console.log(erro));

const port = 3000;

let workersSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    job: { type: String, require: true },
    email: { type: String, require: true },
    Initiation: { type: Date, require: true },
  },
  { timestamps: true },
);

const Worker = mongoose.model("Worker", workersSchema);

//query user
app.get("/workers", async (req, res) => {
  let registeredCollaborators = await Worker.find();
  res.json(registeredCollaborators);
});

// create user
app.post("/workers", async (req, res) => {
  let registeredCollaborator = await Worker.create(req.body);

  res.json(registeredCollaborator);
});

// delete user
app.delete("/workers/:id", async (req, res) => {
  await Worker.findByIdAndDelete(req.params.id);
  res.status(200).json({ Message: "Cadastro deletado com sucesso" });
});

// edit user
app.put("/workers/:id", async (req, res) => {
  const updateData = await Worker.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updateData);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
