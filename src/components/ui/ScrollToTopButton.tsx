import { useEffect, useState } from "react";
import { Button } from "./button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px 15px",
            borderRadius: "50%",
            backgroundColor: "#EA580C",
            color: "#fff",
            fontSize: "20px", // Increase font size for visibility
            fontWeight: "bold", // Make the arrow bold

            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1E1B4B")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          ↑
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
