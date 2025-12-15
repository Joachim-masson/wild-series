// Import access to data
import categoryRepository from "./categoryRepository";

// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const listCategories: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

//*****************************************************
const category: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const category = categories.find((p) => p.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default {
  category,
  listCategories,
};
