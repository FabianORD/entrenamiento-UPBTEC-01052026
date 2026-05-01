let continuar = true;

let biblioteca = {
  libros: [
    {
      titulo: "cien años de soledad",
      autor: "gabriel garcia marquez",
      año: 1967,
      categorias: ["novela", "realismo magico"],
      disponible: true
    },
    {
      titulo: "el principito",
      autor: "vladimir",
      año: 1943,
      categorias: ["infantil", "fantasia"],
      disponible: true
    },
    {
      titulo: "1984",
      autor: "george orwell",
      año: 1949,
      categorias: ["distopia", "politica"],
      disponible: true
    }
  ]
};

// funciones
function mostrarLibros() {
  console.log("\nlista de libros:");
  biblioteca.libros.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} - ${libro.año}`);
    console.log(`categorias: ${libro.categorias.join(", ")}`);
    console.log(`disponible: ${libro.disponible}`);
    console.log("----------------------");
  });
}

function agregarLibro() {
  let titulo = prompt("ingrese el titulo: ");
  let autor = prompt("ingrese el autor: ");
  let año = parseInt(prompt("ingrese el año: "));
  let categorias = prompt("ingrese categorias separadas por coma: ").split(",");

  biblioteca.libros.push({
    titulo: titulo,
    autor: autor,
    año: año,
    categorias: categorias,
    disponible: true
  });

  console.log("libro agregado");
}

function filtrarPorCategoria() {
  let categoriaBuscar = prompt("ingrese la categoria: ");

  let filtrados = biblioteca.libros.filter(libro =>
    libro.categorias.includes(categoriaBuscar)
  );

  if (filtrados.length === 0) {
    console.log("no se encontraron libros");
  } else {
    filtrados.forEach(libro => {
      console.log(`${libro.titulo} - ${libro.autor}`);
      console.log(`${libro.año} - ${libro.categorias}`);
    });
  }
}

function cambiarDisponibilidad() {
  let tituloBuscar = prompt("ingrese el titulo del libro: ");

  let libro = biblioteca.libros.find(l => l.titulo === tituloBuscar);

  if (!libro) {
    console.log("libro no encontrado, por favor degite otro libro");
  } else {
    libro.disponible = !libro.disponible;
    console.log("estado actualizado. muchas gracias por usar el programa");
  }
}
function salir() {
  console.log("saliendo del programa");
  continuar = false;
}
function borrarLibro() {
  let titulo = prompt("digita el título del libro: ").toLowerCase();
  let indice = biblioteca.libros.findIndex(libro =>
    libro.titulo.toLowerCase() === titulo
  );
  if (indice !== -1) {
    biblioteca.libros.splice(indice, 1); // 🔥 elimina del mismo array
    console.log("libro eliminado");
  } else {
    console.log("libro no encontrado");
  }
  biblioteca.libros.forEach((libro, index) => {
  console.log(`${index + 1}. ${libro.titulo}
  Autor: ${libro.autor}
  Año: ${libro.año}
  Categorías: ${libro.categorias.join(", ")}
-------------------------
  `);
});
  //console.log(biblioteca.libros); // muestra el mismo array actualizado
}

// menu
function menu() {
  console.log("\nmenu");
  console.log("1. mostrar libros");
  console.log("2. agregar libro");
  console.log("3. filtrar por categoria");
  console.log("4. cambiar disponibilidad");
  console.log("5. borrar libro");
  console.log("6. salir");

  let opcion = prompt("elige una opcion: ");

  switch (opcion) {
    case "1":
      mostrarLibros();
      break;

    case "2":
      agregarLibro();
      break;

    case "3":
      filtrarPorCategoria();
      break;

    case "4":
      cambiarDisponibilidad();
      break;
    
    case "5":
      borrarLibro();
      break;
      
    case "6":
      salir();
      /*console.log("saliendo del programa");
      continuar = false;
      break;*/

    default:
      console.log("opcion no valida");
  }
}

// ciclo principal
while (continuar) {
  menu();
}


// console.log(biblioteca.libros); // muestra el mismo array actualizado

function buscarPorAutor() {
  let autorBuscar = prompt("Ingrese el nombre del autor: ").toLowerCase();
  
  // Usamos filter y toLowerCase para que la búsqueda sea flexible
  let librosAutor = biblioteca.libros.filter(libro => 
    libro.autor.toLowerCase().includes(autorBuscar)
  );

  if (librosAutor.length === 0) {
    console.log(`No se encontraron libros del autor: ${autorBuscar}`);
  } else {
    console.log(`\nLibros encontrados de "${autorBuscar}":`);
    librosAutor.forEach(libro => {
      console.log(`- ${libro.titulo} (${libro.año}) [${libro.disponible ? "Disponible" : "Prestado"}]`);
    });
  }
}

function generarReporte() {
  let total = biblioteca.libros.length;
  let disponibles = biblioteca.libros.filter(l => l.disponible).length;
  let prestados = total - disponibles;

  console.log("\n====== REPORTE DE BIBLIOTECA ======");
  console.log(`Total de ejemplares: ${total}`);
  console.log(`Libros en estantería: ${disponibles}`);
  console.log(`Libros en préstamo: ${prestados}`);
  console.log("===================================");
}

// --- ACTUALIZACIÓN DEL MENÚ ---
// (Reemplaza tu función menu actual con esta para incluir las nuevas opciones)

function menu() {
  console.log("\n--- SISTEMA DE GESTIÓN BIBLIOTECARIA ---");
  console.log("1. Mostrar todos los libros");
  console.log("2. Agregar nuevo libro");
  console.log("3. Filtrar por categoría");
  console.log("4. Buscar por autor (NUEVO)");
  console.log("5. Cambiar disponibilidad (Préstamo/Devolución)");
  console.log("6. Borrar libro");
  console.log("7. Reporte de inventario (NUEVO)");
  console.log("8. Salir");

  let opcion = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1": mostrarLibros(); break;
    case "2": agregarLibro(); break;
    case "3": filtrarPorCategoria(); break;
    case "4": buscarPorAutor(); break;
    case "5": cambiarDisponibilidad(); break;
    case "6": borrarLibro(); break;
    case "7": generarReporte(); break;
    case "8": salir(); break;
    default: console.log("Opción no válida, intente de nuevo.");
  }
}