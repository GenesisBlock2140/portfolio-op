import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ToolsItem from "./components/ToolsItem";
import ProjectItem from "./components/ProjectItem";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />

      <Container>
        <div className="block sm:flex w-full h-full md:h-[700px] justify-center items-center">
          <div className="w-full sm:w-1/2">
            <h1 className="text-6xl mb-6 font-bold">
              Développeur front-end React
            </h1>
            <p>
              Hello, moi c'est Nathan, développeur front-end autodidacte basé
              dans le Sud de la France, acutellement en Alternance avec OpenClassRoom. Je suis constamment en quête de
              nouvelles opportunités d'apprentissage pour améliorer mes
              compétences en développement et relever des défis passionnants.
            </p>
            <a href="#contact">
              <button className="text-xl text-white font-bold px-8 py-4 my-10 bg-[color:--primary] rounded-lg">
                👉 Prendre contact
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <div className="w-[300px] h-[300px] bg-gray-300 rounded-full show-from-bottom bg-[url('/avatarnc.jpg')] bg-center bg-cover" />
          </div>
        </div>
      </Container>

      <section id="stack-outils">
        <Container className="bg-[color:--bg--darker] py-20">
          <h2>Outils</h2>
          <p>
            Liste des outils principaux que j'utilise au quotidien.
          </p>
          <div className="w-[90%] flex gap-6">
            <div className="w-1/2">
              <ToolsItem title="Figma" desc="Design d'interface graphique." svg="../src/assets/figma.svg" />
              <ToolsItem title="ChatGPT" desc="Gains de temps, corrections, idées, ..." svg="../src/assets/openai.svg" />
              <ToolsItem title="API OpenAI" desc="Interaction API avec les modèles d'OpenAI" svg="../src/assets/openai.svg" />
            </div>
            <div className="w-1/2">
              <ToolsItem title="Slack" desc="Plateforme de communication" svg="../src/assets/slack.svg" />
              <ToolsItem title="Trello" desc="Outil de gestion de projet" svg="../src/assets/trello.svg" />
              <ToolsItem title="VSCode" desc="Editeur de code" svg="../src/assets/vscode.svg" />
            </div>
          </div>
        </Container>

        <Container className="py-20">
          <h2>Stack technique</h2>
          <p>
            Liste des principales technologies que je maîtrise, je suis toujours enthousiaste à l'idée d'en apprendre de nouvelles.
          </p>
          <div className="w-[90%] flex gap-6">
            <div className="w-1/2">
              <ToolsItem title="React" desc="Bibliothèque Javascript pour le front-end" svg="../src/assets/react.svg" />
              <ToolsItem title="Javascript" desc="Langage de programmation" svg="../src/assets/javascript.svg" />
              <ToolsItem title="Typescript" desc="Surcouche de typage pour Javascript" svg="../src/assets/typescript.svg" />
            </div>
            <div className="w-1/2">
              <ToolsItem
                title="Node"
                desc="Création de back-end en Javascript"
                svg="../src/assets/node.svg"
              />
              <ToolsItem
                title="Express"
                desc="Création de serveur sous Node.js"
                svg="../src/assets/express.svg"
              />
              <ToolsItem
                title="Tailwind"
                desc="Framework CSS"
                svg="../src/assets/tailwind.svg"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="projets">
        <Container className="bg-[color:--bg--darker] py-20">
          <h2>Mes projets</h2>
          <p>
            Quelques-uns de mes projets personnels ainsi que certains réalisés dans le cadre de ma formation chez OpenClassrooms.
          </p>
          <ProjectItem
            title={"Application de Flashcard"}
            desc={
              "Cette application permet à n'importe qui de se connecter/s'inscrire en moins de 10 secondes en utilisant son compte Google ou Github afin de créer des flashcards pour apprendre/réviser des sujets intelligemment."
            }
            website={"https://flashcard-fullstack.vercel.app/"}
            sourceCode={"https://github.com/GenesisBlock2140/flashcard-fullstack"}
            imgUrl={"fullstackflashcard.png"}
            imgAlt={"Flashcard project image"}
          />
        </Container>

        <Container className="py-20">
          <ProjectItem
            title={"E-Commerce Brocante en ligne"}
            desc={
              "Cette application est une boutique e-commerce développée avec Next.js, plus précisément un site de brocante en ligne permettant de consulter les informations des produits, parcourir les categories, filtrer, ajouter au panier ..."
            }
            website={"https://brocante-nextjs.vercel.app/"}
            sourceCode={"https://github.com/GenesisBlock2140/ecommerce-nextjs"}
            imgUrl={"ecomnextjs.png"}
            imgAlt={"Ecom project image"}
          />
        </Container>

        <Container className="bg-[color:--bg--darker] py-20">
          <ProjectItem
            title={"Nina Carducci"}
            desc={
              "Correction, optimisation et débogage du site de la photographe bordelaise Nina Carducci dans le cadre du parcours Développeur Web d'OpenClassrooms."
            }
            website={"https://genesisblock2140.github.io/nina-carducci-website/"}
            sourceCode={"https://github.com/GenesisBlock2140/nina-carducci-website"}
            imgUrl={"ninawebsite.png"}
            imgAlt={"NinaWebsite project image"}
          />
        </Container>

        <Container className="py-20">
          <ProjectItem
            title={"Kasa"}
            desc={
              "Correction, optimisation et débogage du site de la photographe bordelaise Nina Carducci dans le cadre du parcours Développeur Web d'OpenClassrooms."
            }
            website={"#"}
            sourceCode={"https://github.com/GenesisBlock2140/kasa"}
            imgUrl={"kasaopenclassroom.png"}
            imgAlt={"Kasa project image"}
          />
        </Container>

      </section>

      <Container className="py-20">
        <ContactForm />
      </Container>

      <Footer />

    </Layout>
  );
}

export default App;
