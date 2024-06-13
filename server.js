import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/inscritos", async (req, res) => {
  await prisma.inscrito.create({
    data: {
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      dataNascimento: req.body.dataNascimento,
      sexo: req.body.sexo,
      cargo: req.body.cargo,
      curriculo: req.body.curriculo,
      termos: req.body.termos,
    },
  });

  res.status(201).send(req.body);
});

app.get("/inscritos", async (req, res) => {
  let inscritos = [];

  if (req.query) {
    inscritos = await prisma.inscrito.findMany({
      where: {
        nome: req.query.nome,
        email: req.query.email,
        cpf: req.query.cpf,
      },
    });
  } else {
    inscritos = await prisma.inscrito.findMany();
  }
  res.status(200).json(inscritos);
});

app.put("/inscritos/:id", async (req, res) => {
  await prisma.inscrito.update({
    where: {
      id: req.params.id,
    },
    data: {
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      dataNascimento: req.body.dataNascimento,
      sexo: req.body.sexo,
      cargo: req.body.cargo,
      curriculo: req.body.curriculo,
      termos: req.body.termos,
    },
  });

  res.status(201).send(req.body);
});

app.delete("/inscritos/:id", async (req, res) => {
  await prisma.inscrito.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
