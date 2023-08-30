//* Arreglos de propiedades

const arrSalesProperties = [
    {
        title: "Encantadora casa de campo junto al río",
        src: "https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_640.jpg",
        description: "Acogedora casa de campo rodeada de naturaleza y con un río cristalino a pocos pasos. Perfecta para escapadas relajantes.",
        location: "Calle de los Pájaros Azules, N° 123, Pueblo Tranquilo",
        bedrooms: 2,
        bathrooms: 4,
        price: 2500,
        smoke: true,
        pets: false,
    },

    {
        title: "Mansión privada en la colina con piscina infinita",
        src: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg",
        description: "Lujosa mansión con amplias habitaciones, decoración de lujo y una piscina infinita que se funde con el paisaje montañoso.",
        location: "Avenida Metrópolis, N° 456, Ciudad Moderna",
        bedrooms: 3,
        bathrooms: 2,
        price: 6500,
        smoke: true,
        pets: true,
    },
    {
        title: "Refugio moderno en el bosque con spa privado",
        src: "https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_640.jpg",
        description: "Refugio contemporáneo rodeado de árboles, con un spa privado al aire libre para relajarse mientras se disfruta de la naturaleza.",
        location: "Camino de las Colinas, N° 789, Colina Serena",
        bedrooms: 1,
        bathrooms: 1,
        price: 4500,
        smoke: false,
        pets: false,
    },

    {
        title: "Loft industrial en un antiguo almacén",
        src: "https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_640.jpg",
        description: "Loft espacioso con elementos industriales, techos altos y mucha luz natural en un almacén reconvertido en un espacio único.",
        location: "Camino de las Vides, N° 111, Valle Vinícola",
        bedrooms: 1,
        bathrooms: 1,
        price: 4500,
        smoke: true,
        pets: true,
    },

    {
        title: "Loft industrial en un antiguo almacén",
        src: "https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_640.jpg",
        description: "Loft espacioso con elementos industriales, techos altos y mucha luz natural en un almacén reconvertido en un espacio único.",
        location: "Camino de las Vides, N° 111, Valle Vinícola",
        bedrooms: 1,
        bathrooms: 1,
        price: 4500,
        smoke: false,
        pets: false,
    },

    {
        title: "Loft industrial en un antiguo almacén",
        src: "https://cdn.pixabay.com/photo/2017/06/16/13/40/new-home-2409165_640.jpg",
        description: "Loft espacioso con elementos industriales, techos altos y mucha luz natural en un almacén reconvertido en un espacio único.",
        location: "Camino de las Vides, N° 111, Valle Vinícola",
        bedrooms: 4,
        bathrooms: 5,
        price: 4500,
        smoke: true,
        pets: true,
    }
];

const arrRentProperties = [
    {
        title: "Elegante residencia urbana con vistas panorámicas",
        src: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_640.jpg",
        description: "Moderna residencia en el centro de la ciudad con ventanas de piso a techo que ofrecen vistas impresionantes del horizonte urbano.",
        location: "Calle del Mar, N° 101, Costa Dorada",
        bedrooms: 3,
        bathrooms: 3,
        price: 6500,
        smoke: false,
        pets: false,
    },

    {
        title: "Casa costera con acceso directo a la playa",
        src: "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_640.jpg",
        description: "Espaciosa casa a pasos de la playa, con una terraza privada que ofrece vistas inigualables del océano y acceso directo a la arena.",
        location: "Sendero del Bosque, N° 234, Bosque Encantado",
        bedrooms: 2,
        bathrooms: 2,
        price: 3200,
        smoke: true,
        pets: true,
    },

    {
        title: "Residencia histórica en el corazón del casco antiguo",
        src: "https://cdn.pixabay.com/photo/2017/06/17/12/59/luxury-home-2412145_640.jpg",
        description: "Elegante casa con detalles arquitectónicos históricos y comodidades modernas, ubicada en el encantador casco antiguo de la ciudad.",
        location: "Plaza de la Historia, N° 567, Casco Antiguo",
        bedrooms: 5,
        bathrooms: 3,
        price: 10000,
        smoke: false,
        pets: true,
    },

    {
        title: "Casa de estilo colonial en un pueblo pintoresco",
        src: "https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_640.jpg",
        description: "Encantadora casa de estilo colonial en un pueblo tranquilo, con calles adoquinadas y una plaza central llena de historia.",
        location: "Calle del Equilibrio, N° 890, Barrio Zen",
        bedrooms: 10,
        bathrooms: 4,
        price: 8000,
        smoke: true,
        pets: true,
    },

    {
        title: "Casa de estilo colonial en un pueblo pintoresco",
        src: "https://cdn.pixabay.com/photo/2013/07/18/20/24/mansion-164866_640.jpg",
        description: "Encantadora casa de estilo colonial en un pueblo tranquilo, con calles adoquinadas y una plaza central llena de historia.",
        location: "Calle del Equilibrio, N° 890, Barrio Zen",
        bedrooms: 5,
        bathrooms: 3,
        price: 5600,
        smoke: false,
        pets: true,
    },

    {
        title: "Casa de estilo colonial en un pueblo pintoresco",
        src: "https://cdn.pixabay.com/photo/2016/07/25/17/05/new-home-1540875_640.jpg",
        description: "Encantadora casa de estilo colonial en un pueblo tranquilo, con calles adoquinadas y una plaza central llena de historia.",
        location: "Calle del Equilibrio, N° 890, Barrio Zen",
        bedrooms: 1,
        bathrooms: 1,
        price: 7500,
        smoke: false,
        pets: false,
    }

];


//* Generador del template
const templateGenerator = (arrData, cards = arrData.length) => {

    let newTemplate = "";

    for (let i = 0; i < cards; i++) {

        newTemplate +=
            `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${arrData[i].src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">
                    ${arrData[i].title}
                    </h5>
                    <p class="card-text">
                    ${arrData[i].description}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${arrData[i].location}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${arrData[i].bedrooms} Habitaciones | 
                        <i class="fas fa-bath"></i> ${arrData[i].bathrooms} Baños
                    </p>
                    <p>
                    <i class="fas fa-dollar-sign"></i> ${arrData[i].price}
                    </p>
                    <p class= "${arrData[i].smoke ? "text-success" : "text-danger"}">
                    <i
                        class="fas ${arrData[i].smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> ${arrData[i].smoke ? "Permitido fumar" : "No se permite fumar"}
                    </p>
                    <p class="${arrData[i].pets ? "text-success" : "text-danger"}">
                        <i class= "${arrData[i].pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i>
                        ${arrData[i].pets ? "Mascatoras permitidas" : "No se permiten mascotas"}
                    </p>
                </div>
            </div>
        </div>
    `;

    }
    return newTemplate;
}

//* Elementos HTML - DOM

const salesElement = document.querySelector('#venta > .row');
const rentElement = document.querySelector('#alquiler > .row');

//* Condicionando en renderizado de elementos

const currentPage = location.pathname;

switch (currentPage) {
    case "/index.html":
        rentElement.innerHTML = templateGenerator(arrRentProperties, 3);
        salesElement.innerHTML = templateGenerator(arrSalesProperties, 3);
        break;

    case "/propiedades_alquiler.html":
        rentElement.innerHTML = templateGenerator(arrRentProperties);
        break;

    case "/propiedades_venta.html":
        salesElement.innerHTML = templateGenerator(arrSalesProperties);
        break;
    default:
        console.error("Página no reconocida:", currentPage);
        break;
}
