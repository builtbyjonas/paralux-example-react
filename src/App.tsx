import { ParaluxProvider, Parallax, useParalux } from "paralux/react";
import { createPortal } from "react-dom";
import "./App.css";

function ScrollWatcher() {
  const { scrollY, velocity, progress } = useParalux();
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: 10,
        borderRadius: 8,
        zIndex: 100,
      }}
    >
      <p style={{ margin: 0 }}>Scroll: {Math.round(scrollY)}px</p>
      <p style={{ margin: 0 }}>Speed: {Math.round(velocity)}</p>
      <p style={{ margin: 0 }}>Progress: {(progress * 100).toFixed(2)}%</p>
    </div>,
    document.body,
  );
}

function App() {
  return (
    <ParaluxProvider
      options={{
        smooth: true,
        virtualScroll: true,
        physics: "lerp",
        inertia: 0.07,
        stiffness: 110,
        damping: 14,
        mass: 1.2,
      }}
    >
      <ScrollWatcher />
      <div
        style={{
          minHeight: "400vh",
          padding: "50px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Parallax speed={-1.85} axis="y">
              <div
                style={{
                  width: 200,
                  height: 200,
                  background: "dodgerblue",
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Reverse
              </div>
            </Parallax>
          </div>
          <Parallax speed={0.5} axis="y">
            <h1 style={{ fontSize: "4rem" }}>Welcome to Paralux + React</h1>
          </Parallax>
        </div>

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Parallax speed={0.9} axis="y">
            <div
              style={{
                width: 200,
                height: 200,
                background: "tomato",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Fast
            </div>
          </Parallax>
          <Parallax speed={0.15} axis="y">
            <div
              style={{
                width: 200,
                height: 200,
                background: "mediumseagreen",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Slow
            </div>
          </Parallax>
        </div>

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Parallax speed={0.35} axis="y">
            <h2 style={{ fontSize: "3rem" }}>Keep Scrolling...</h2>
          </Parallax>
        </div>

        <div style={{ minHeight: "60vh" }} />

        <div
          style={{
            minHeight: "120vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Parallax speed={0} axis="y">
            <h2>The End</h2>
          </Parallax>
        </div>
      </div>
    </ParaluxProvider>
  );
}

export default App;
