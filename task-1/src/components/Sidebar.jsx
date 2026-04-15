import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["A", "B", "C", "D"];
      const newActive = [];

      sections.forEach((sec) => {
        const el = document.getElementById(`section-${sec}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            newActive.push(sec);
          }
        }
      });

      setActive(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sidebar">
      {["A", "B", "C", "D"].map((sec) => (
        <div
          key={sec}
          className={`bullet ${active.includes(sec) ? "active" : ""}`}
        >
          Section {sec}
        </div>
      ))}
    </div>
  );
}