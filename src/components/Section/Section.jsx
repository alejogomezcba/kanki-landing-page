import React, { useRef, useState, useEffect } from "react";

const Section = ({ id, title, content }) => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    console.log('observer', observer);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        backgroundColor: "#f5f5f5",
        margin: "20px 0",
        padding: "40px",
      }}
    >
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Section;
