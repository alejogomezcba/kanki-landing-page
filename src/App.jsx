import React from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

const App = () => {
  const sections = [
    { id: "welcome", title: "Welcome", content: "This is the welcome section." },
    { id: "about", title: "About Us", content: "Learn more about us here." },
    { id: "services", title: "Services", content: "Discover our services." },
    { id: "contact", title: "Contact", content: "Get in touch with us." },
  ];

  return (
    <div>
      <Navbar sections={sections} />
      <main>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
