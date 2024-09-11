import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Img1 from "./mern.png";

const questions = [
  // Short Answer Questions
  {
    question: 'What is Matter?',
    answer: 'Matter is anything that occupies space and has mass.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/States_of_Matter.svg'
  },
  {
    question: 'Name the three states of matter.',
    answer: 'Solid, Liquid, and Gas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/States_of_Matter.svg'
  },
  {
    question: 'Define Solid.',
    answer: 'A solid has a definite shape and volume.',
    image: 'https://media.nationalgeographic.org/assets/photos/000/292/29241.jpg'
  },
  {
    question: 'What is the characteristic of a liquid?',
    answer: 'A liquid has a definite volume but no definite shape.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/States_of_matter_Liquid.png'
  },
  {
    question: 'What is gas?',
    answer: 'Gas has no definite shape or volume.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/States_of_matter_Gas.jpg'
  },
  {
    question: 'What is diffusion?',
    answer: 'Diffusion is the movement of particles from high concentration to low concentration.',
    image: 'https://www.sciencefacts.net/wp-content/uploads/2018/02/Diffusion.jpg'
  },
  {
    question: 'Define Evaporation.',
    answer: 'Evaporation is the process by which a liquid turns into vapor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Evaporation_diagram.png'
  },
  {
    question: 'What is melting point?',
    answer: 'The temperature at which a solid turns into a liquid is called the melting point.',
    image: 'https://www.thoughtco.com/thmb/O1AOpPPNZ_qf2fCmDkjvHP5iQ7k=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/melting-ice-cubes-56a4cde45f9b58b7d0da06c0.jpg'
  },
  {
    question: 'What is sublimation?',
    answer: 'The process where a solid directly changes into a gas is called sublimation.',
    image: 'https://www.scienceabc.com/wp-content/uploads/2019/12/Sublimation-Iodine.gif'
  },
  {
    question: 'Give an example of sublimation.',
    answer: 'Camphor sublimates on heating.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Sublimation-Experiment.jpg'
  },

  // Middle Answer Questions
  {
    question: 'Explain the process of condensation.',
    answer: 'Condensation is the process where gas changes into a liquid when cooled. This process is the opposite of evaporation. For example, water vapor in the air condenses to form water droplets on a cold surface.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Condensation.png'
  },
  {
    question: 'Describe the process of boiling with an example.',
    answer: 'Boiling is the process where a liquid turns into a gas by heating. For example, when water is heated, it starts boiling at 100°C and turns into steam.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Boiling_water_animated.gif'
  },
  {
    question: 'What happens to the speed of particles during evaporation?',
    answer: 'During evaporation, the speed of particles increases as they absorb energy. This energy helps particles to overcome the forces of attraction and escape into the air as vapor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Water_evaporation.svg/1200px-Water_evaporation.svg.png'
  },
  {
    question: 'What are the factors that affect evaporation?',
    answer: 'Factors affecting evaporation are: (1) Temperature: Higher temperature increases evaporation, (2) Surface Area: Larger surface area increases evaporation, (3) Humidity: Lower humidity increases evaporation, (4) Wind Speed: Higher wind speed increases evaporation.',
    image: 'https://www.vedantu.com/question/2a448539ceef8965e1bb54f8cf17d1b7fb3f4a5f.png'
  },
  {
    question: 'Why do we feel cool when sweat evaporates from our skin?',
    answer: 'When sweat evaporates, it absorbs heat from the skin, making us feel cool. This is an example of cooling by evaporation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Sweating.jpg'
  },
  {
    question: 'How does temperature affect the state of matter?',
    answer: 'Temperature affects the kinetic energy of particles. At higher temperatures, particles move faster and may change state, such as solid to liquid or liquid to gas. Lower temperatures reduce kinetic energy and may change gas to liquid or liquid to solid.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Matter_statediagram.jpg'
  },
  {
    question: 'How can we liquefy gases?',
    answer: 'Gases can be liquefied by lowering the temperature and increasing the pressure. This brings particles closer together and changes their state to liquid.',
    image: 'https://cdn.britannica.com/84/174284-050-D05FCB54/Liquefied-natural-gas-LNG-storage-terminal-plant.jpg'
  },

  // Long Answer Questions
  {
    question: 'Explain the interconversion of states of matter with the help of an example.',
    answer: 'Matter can change from one state to another by heating or cooling. For example, ice (solid) melts into water (liquid) when heated, and water vapor (gas) condenses into water (liquid) when cooled. The processes involved are melting, freezing, evaporation, condensation, and sublimation. Melting involves the absorption of heat, whereas freezing involves the release of heat. Similarly, evaporation requires heat energy, and condensation releases energy.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Water-cycles.gif'
  },
  {
    question: 'What is latent heat? Explain latent heat of fusion and latent heat of vaporization with examples.',
    answer: 'Latent heat is the heat energy required to change the state of a substance without changing its temperature. (1) Latent Heat of Fusion: The heat required to convert a solid into a liquid at its melting point. For example, ice melts into water at 0°C by absorbing heat. (2) Latent Heat of Vaporization: The heat required to convert a liquid into a gas at its boiling point. For example, water turns into steam at 100°C by absorbing heat.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Phase-change-diagram.svg'
  },
  {
    question: 'Why does temperature remain constant during a change of state?',
    answer: 'During a change of state, the temperature remains constant because the heat energy supplied is used to break the bonds between the particles rather than increasing the temperature. For example, during melting, the temperature remains at the melting point until all the solid is converted into liquid. Similarly, during boiling, the temperature remains constant until all the liquid turns into vapor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Temperature_during_melting_of_a_solid.svg'
  },
  {
    question: 'What is the effect of pressure on the boiling point of a liquid?',
    answer: 'The boiling point of a liquid increases with an increase in pressure. When the pressure on a liquid increases, the particles require more energy to escape into the gaseous state, which raises the boiling point. For example, water boils at a higher temperature in a pressure cooker because the pressure inside is higher than normal atmospheric pressure.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Boiling_point_vs_pressure.png'
  },
  {
    question: 'Explain the concept of Brownian motion with an example.',
    answer: 'Brownian motion is the random movement of particles in a fluid due to their collision with other particles. This motion can be observed under a microscope when fine particles of pollen are suspended in water. The pollen grains move randomly in all directions due to collisions with the water molecules. This proves that particles of matter are constantly moving.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Brownian_motion_large.gif'
  },
  {
    question: 'Why does a desert cooler cool better on a hot, dry day?',
    answer: 'A desert cooler cools better on a hot, dry day because the rate of evaporation is higher in dry conditions. Evaporation causes cooling, and since the air is dry, it can hold more moisture, allowing water to evaporate faster, leading to better cooling. On humid days, the air is already saturated with moisture, so the rate of evaporation and cooling is lower.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Evaporation_cooler.png'
  },
  {
    question: 'Describe the effect of surface area on evaporation with an example.',
    answer: 'The rate of evaporation increases with an increase in surface area. This is because more particles are exposed to the atmosphere, allowing faster escape of molecules into the gaseous state. For example, if water is spread over a large surface, like in a shallow tray, it evaporates faster compared to when it is kept in a deep container.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Effect_of_surface_area_on_evaporation.gif'
  }
];


function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
       Chemistry - Chapter 1 Questions
      </Typography>
      {questions.map((item, index) => (
        <QuestionAnswer
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
        />
      ))}
    </Container>
  );
}

const QuestionAnswer = ({ question, answer, image }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
        <img
          src={image || ""}
          alt="No image found"
          style={{ width: "100%", marginTop: "10px" }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default App;
