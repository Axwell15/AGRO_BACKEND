import { Category } from "../models/productCategory.js";
import { Product } from "../models/product.js";
import { MeasureUnit } from "../models/measureUnit.js";

export const uploadDataForCategories = async (req, res) => {
  try {
    const categories = [
      {
        name: "Frutas",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658395/categorys/el-poder-de-las-frutas-libro_moahvm.jpg",
      },
      {
        name: "Verduras",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658422/categorys/calendario-fruta-verduras-temporada-668x400x80xX-1_dwkgdl.jpg",
      },
      {
        name: "Carnes",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658439/categorys/tipos-de-carne_-carnes-rojas-y-blancas_tw2z6n.png",
      },
      {
        name: "Lacteos",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658460/categorys/1559132933_784891_1559133012_noticia_normal_recorte1_xwdeme.jpg",
      },
      {
        name: "Cereales",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658487/categorys/cereales_pcjc6i.webp",
      },
      {
        name: "Aceites",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658507/categorys/Aceite-vegetal-y-aceite-esencial-1024x682_gpk3ja.jpg",
      },
      {
        name: "Granos",
        image:
          "https://res.cloudinary.com/agromarket/image/upload/v1669658523/categorys/conjunto-diferentes-granos-enteros-frijoles-semillas-legumbres_73523-3388_q5neik.jpg",
      },
    ];
    await Category.insertMany(categories);
    res.status(201).json({ message: "Categories created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const uploadDataForMeasureUnits = async (req, res) => {
  try {
    const measureUnits = [
      {
        name: "Lb",
      },
      {
        name: "Unidad",
      },
      {
        name: "Docena",
      },
      {
        name: "Paquete",
      },
      {
        name: "Arroba",
      },
      {
        name: "Quintal",
      },
    ];
    await MeasureUnit.insertMany(measureUnits);
    res.status(201).json({ message: "Measure Units created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const uploadDataForProducts = async (req, res) => {
  try {
    const products = [
      {
        name: "Arroz",
        description:
          "Arroz blanco de grano largo, de calidad orgánica, ideal para preparar en guisos, sopas y como acompañamiento de platillos. Se cultiva en terrenos preparados con técnicas de siembra en semilleros para garantizar su calidad.",
        price: 1.0,
        image:
          "https://bitworks-multimedia.azurewebsites.net/api/selectos/multimedia/3b7b6e06-b9e5-45f2-85f3-91496da6e014/content",
        category: "63858d4ea01d0a8c50903e60",
        measureUnit: "63858d57a01d0a8c50903e62",
        stock: 10,
        quantity: 1,
        grainVariety: "Japonica",
        quality: "organico",
        harvestYear: 2022,
        productionMethods: "Siembra en semilleros",
      },
      {
        name: "Maíz",
        description:
          "Maíz amarillo de variedad dentado, utilizado en la preparación de tortillas, sopas y otros productos de la canasta básica. Cultivado mediante siembra en línea o hileras para un rendimiento óptimo.",
        price: 0.8,
        image:
          "https://walmartsv.vtexassets.com/arquivos/ids/181045/Elote-Tierno-Unidad-1-110.jpg?v=637643138901230000",
        category: "63858d4ea01d0a8c50903e60",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 15,
        quantity: 1,
        grainVariety: "Dentado",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en línea o hileras",
      },
      {
        name: "Frijol",
        description:
          "Frijol negro, rico en proteínas y muy versátil, utilizado en una variedad de platos tradicionales. Su cultivo es realizado de manera orgánica, con siembra a voleo para asegurar la dispersión adecuada de las semillas.",
        price: 1.2,
        image:
          "https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/b1c8de6b-ff56-4e99-876e-620b820185f7/content",
        category: "63858d4ea01d0a8c50903e60",
        measureUnit: "63858d57a01d0a8c50903e62",
        stock: 8,
        quantity: 1,
        grainVariety: "Negro",
        quality: "organico",
        harvestYear: 2022,
        productionMethods: "Siembra a voleo",
      },
      {
        name: "Cebolla",
        description:
          "Cebolla blanca de sabor suave, ideal para sazonar platillos o acompañar ensaladas. Su cultivo se realiza mediante siembra a tresbolillo, asegurando un crecimiento equilibrado y una cosecha abundante.",
        price: 0.7,
        image:
          "https://bitworks-multimedia.azurewebsites.net/api/selectos/multimedia/57b0bf49-344e-41ed-9557-e7b43febfb9d/content",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 12,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2022,
        productionMethods: "Siembra a tresbolillo",
      },
      {
        name: "Tomate",
        description:
          "Tomate rojo, fresco y jugoso, ideal para ensaladas, salsas o acompañar cualquier platillo. Se cultiva con técnicas de siembra en hoyos o a chorrillo, lo que permite un riego adecuado para su desarrollo.",
        price: 0.9,
        image:
          "https://bitworks-multimedia.azurewebsites.net/api/selectos/multimedia/70e07a46-ee8b-4c0d-a579-c17435c4c771/content",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 20,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en hoyos o a chorrillo",
      },
      {
        name: "Pepino",
        description:
          "Pepino verde, fresco y crujiente, perfecto para ensaladas o consumir como botana. Su cultivo orgánico se realiza mediante siembra en semilleros, lo que asegura un mejor control del crecimiento y la calidad del producto.",
        price: 0.6,
        image:
          "https://www.gastronomiavasca.net/uploads/image/file/3406/w700_pepino.jpg",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 25,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra en semilleros",
      },
      {
        name: "Almendra",
        description:
          "Almendra cruda de calidad orgánica, ideal para consumir como snack o utilizar en repostería. Se cultiva en línea o hileras, lo que permite una cosecha ordenada y eficiente.",
        price: 2.5,
        image:
          "https://bitworks-multimedia.azurewebsites.net/api/selectos/multimedia/0f5d31ce-876b-4125-b02b-bd21079084fc/content",
        category: "63858d4ea01d0a8c50903e60",
        measureUnit: "63858d57a01d0a8c50903e62",
        stock: 50,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra en línea o hileras",
      },
      {
        name: "Acelga",
        description:
          "Acelga verde, rica en nutrientes y excelente para ensaladas y sopas. Cultivada de forma orgánica mediante siembra a voleo, lo que permite un crecimiento natural de las plantas.",
        price: 0.95,
        image:
          "https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/23109aab-18cb-4f97-9f35-95af601f0a4a/content",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 18,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra a voleo",
      },
      {
        name: "Zanahoria",
        description:
          "Zanahoria naranja, fresca y crujiente, ideal para ensaladas, jugos o sopas. Se cultiva mediante siembra a tresbolillo, lo que permite que las zanahorias se desarrollen de forma óptima.",
        price: 0.75,
        image:
          "https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/f1f8b812-f1b1-4449-bd06-263347eda281/content",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 22,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en tresbolillo",
      },
      {
        name: "Lechuga",
        description:
          "Lechuga romana, ideal para ensaladas frescas. Cultivada orgánicamente mediante siembra en semilleros, lo que garantiza un crecimiento saludable y libre de químicos.",
        price: 1.1,
        image:
          "https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/9bbf350d-ba2e-4afe-990c-60dee4bbffb0/content",
        category: "63858d4ea01d0a8c50903e5b",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 15,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra en semilleros",
      },
      {
        name: "Pera",
        description:
          "Pera de agua, fruta fresca, jugosa y de sabor dulce. Perfecta para consumirla sola o en ensaladas.",
        price: 1.5,
        image:
          "https://lavaquita.co/cdn/shop/products/4862b309-63db-4a89-9c91-96ff13354098_700x700.png?v=1622197530",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 25,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra a voleo",
      },
      {
        name: "Durazno",
        description:
          "Durazno rojo, fruta dulce con una textura suave y jugosa, ideal para postres o batidos.",
        price: 1.8,
        image:
          "https://www.grupoalta.com/wp-content/uploads/2018/03/Productos_06.png",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 30,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en hoyos o a chorrillo",
      },
      {
        name: "Aguacate",
        description:
          "Aguacate Hass, una variedad rica en grasas saludables y muy sabrosa, ideal para guacamole o ensaladas.",
        price: 2.0,
        image:
          "https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/7f4e36d5-bb41-45a3-a4da-5c42f1d09493/content",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 35,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra en semilleros",
      },
      {
        name: "Sandía",
        description:
          "Sandía roja, refrescante y de sabor dulce, ideal para consumir en los días calurosos.",
        price: 1.2,
        image: "https://5aldia.cl/wp-content/uploads/2018/03/sandia.jpg",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 40,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en línea o hileras",
      },
      {
        name: "Papaya",
        description:
          "Papaya hawaiana, de pulpa dulce y suave, excelente para batidos o comer sola.",
        price: 0.85,
        image:
          "https://www.melissas.com/cdn/shop/products/image-of-tai-nung-papaya-fruit-30308078125100_592x592.jpg?v=1652479332",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 28,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra a tresbolillo",
      },
      {
        name: "Fresa",
        description:
          "Fresa roja, de sabor dulce y ligeramente ácido, perfecta para comer sola o en postres.",
        price: 1.3,
        image:
          "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e65",
        stock: 18,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "organico",
        harvestYear: 2023,
        productionMethods: "Siembra a voleo",
      },
      {
        name: "Mango",
        description:
          "Mango Ataulfo, una variedad suave, dulce y jugosa, perfecta para comer solo o en ensaladas.",
        price: 1.6,
        image:
          "https://orchardfruit.com/cdn/shop/files/Mango-Whole-The-Orchard-Fruit-72136115_2048x.jpg?v=1722937809",
        category: "63858d4ea01d0a8c50903e5a",
        measureUnit: "63858d57a01d0a8c50903e63",
        stock: 12,
        quantity: 1,
        grainVariety: "No aplica",
        quality: "convencional",
        harvestYear: 2023,
        productionMethods: "Siembra en hoyos o a chorrillo",
      },
    ];
    await Product.insertMany(products);
    res.status(201).json({ message: "Products created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
