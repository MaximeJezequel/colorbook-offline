import { useState } from "react";
import eraser from "./assets/eraser.png";
import goback from "./assets/back.png";
import { Esp } from "./components/Esp";
import { Home } from "./components/Home";
import { Palette } from "./components/Palette";
import { Rocket } from "./components/Rocket";
import { MonaLisa } from "./components/MonaLisa";
import "./styles/main.scss";

function App() {
  const [fillColors, setFillColors] = useState(Array(5).fill("white"));
  const [currentColor, setCurrentColor] = useState("white");
  const colors = ["#C31BE0", "#007DFE", "#2FCE29", "#FCF506", "#F60C0D"];
  const [choice, setChoice] = useState(0);

  const onFillColor = (i: number) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };

  const goToHome = () => {
    location.reload();
  }

  return (
    <div>
      {choice == 0 && <Home setChoice={setChoice} />}
      {(choice == 1 || choice == 2 || choice == 3) && (
        <div>
          <div className="svgContainer">
            {choice == 1 && (
              <Esp fillColors={fillColors} onFill={onFillColor} />
            )}
            {choice == 2 && (
              <Rocket fillColors={fillColors} onFill={onFillColor} />
            )}
            {choice == 3 && (
              <MonaLisa fillColors={fillColors} onFill={onFillColor} />
            )}
            <div
              className="eraser"
              onClick={() => {
                setCurrentColor("white");
              }}
            >
              <img className="color-swatch small" src={eraser} />
            </div>
            <div
              className="goback"
              onClick={() => {
                goToHome();
              }}
            >
              <img className="color-swatch small" src={goback} />
            </div>
          </div>
          <div className="color-swatch-container">
            {colors.map((color) => {
              return (
                <Palette
                  key={color}
                  currentColor={currentColor}
                  changeColor={setCurrentColor}
                  color={color}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
