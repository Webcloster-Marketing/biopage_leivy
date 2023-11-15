import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("biodata", () => ({

  bio_name: "Leivy Diana Grueso",
  bio_posiiton: "Jefe de Contenido Digital, Producción y Animación.",
  bio_profile: {
    emoji: "👩‍💼🎥🎬🎨",
    description: "Soy una líder apasionada en la creación y producción de contenido digital y animación, con un historial comprobado de excelencia en la gestión y ejecución de proyectos visuales. Mi experiencia en el manejo de herramientas como Adobe Illustrator, After Effects y Premiere Pro, combinada con mi habilidad para dirigir equipos, me ha permitido guiar el equipo de Marketing de Webcloster S.A.S. través de la realización de proyectos creativos de alta calidad. Mi enfoque se centra en mantener una innovación constante, impulsando la eficiencia operativa y fomentando un entorno de trabajo colaborativo. Como líder en esta industria, estoy comprometida con el crecimiento profesional y el desarrollo continuo, impulsando el talento y la pasión hacia el éxito de mi empresa Webcloster S.A.S."
  },
  bio_socials: [
    {
      name: "facebook",
      icon: "facebook",
      link: "https://www.facebook.com/leidydiana.grueso1"
    },
    {
      name: "instagram",
      icon: "instagram",
      link: "https://www.instagram.com/leidydianagrueso"
    },
  ],

  // bio_whatsapp: "+573207359470",
  // replace by tapxter number
  bio_whatsapp: "+573185884480",

}));

Alpine.start();
