const Category = require("../models/category");

const createCategory = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    const categoryStored = await category.save();
    if (!categoryStored) {
      return res.status(404).send({
        message: "No se ha podido guardar el category.",
      });
    }
    res.status(200).send({
      category: categoryStored,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error en el servidor.",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    if (isNaN(pageNumber) || isNaN(limitNumber)) {
      return res.status(400).send({
        message: "Los parámetros de paginación deben ser números válidos.",
      });
    }
    const options = {
      page: pageNumber,
      limit: limitNumber,
      sort: { date: "desc" },
    };
    const categories = await Category.paginate({}, options);

    if (!categories || categories.totalPages === 0) {
      return res.status(404).send({
        message: "No se ha encontrado ninguna categoría.",
      });
    }
    res.status(200).send({
      categories,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Error en el servidor al obtener los categories.",
    });
  }
};

module.exports = { createCategory, getCategories };
