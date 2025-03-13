import { useState } from "react";
import componentsMenu from "./componentsMenu";
import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = componentsMenu.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="menu-container">
      {selectedComponent ? (
        <div className="component-view">
          <button
            className="back-button"
            onClick={() => setSelectedComponent(null)}
          >
            ← Назад в меню
          </button>
          <div className="component-content">{selectedComponent}</div>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Поиск по разделам..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <nav>
            {filteredMenu.map((section) => (
              <div key={section.title} className="menu-section">
                <h3 className="menu-title">{section.title}</h3>
                <h4 className="menu-description">{section.description}</h4>
                <div className="menu-card-container">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="menu-card"
                      onClick={() => setSelectedComponent(item.component)}
                    >
                      <div className="menu-card-title">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}

export default App;
