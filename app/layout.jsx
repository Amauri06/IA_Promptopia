import "@styles/globals.css";
import Navbar from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayaout = ({ children }) => {
  
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          {/* principal */}

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayaout;
