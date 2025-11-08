class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center retro-panel p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="retro-button px-6 py-3 rounded">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [guestbookEntries, setGuestbookEntries] = React.useState([]);

    return (
      <div className="min-h-screen p-4 md:p-8" data-name="app" data-file="app.js">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="mb-6">
            <a 
              href="special.html"
              className="block retro-button rounded overflow-hidden hover:opacity-90 transition-opacity max-w-md mx-auto"
            >
              <img 
                src="https://app.trickle.so/storage/public/images/usr_170d739758000001/66e3e313-12c9-4ab2-a147-f9f6ecdb649f.jpeg" 
                alt="Special Page"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Everyone is welcome, and everyone belongs.
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              This is a media pairing for the 2025 YDA film Sonderlust. Here is a collective of human creation to aid in continuing your curiosity. Thank you for wondering- that love is enough to keep us real. That's all I'll ever ask of you. Stay curious; and love what it is to be real, regardless of what it may look like.
            </p>
            <Counter />
          </div>
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              What does Sonder mean?
            </h2>
            <p className="mb-3 text-lg leading-relaxed">
              "Sonder. You are the main character—the protagonist—the star at the center of your own unfolding story. You're surrounded by your supporting cast: friends and family hanging in your immediate orbit.
            </p>
            <p className="mb-3 text-lg leading-relaxed">
              Scattered a little further out, a network of acquaintances who drift in and out of contact over the years.
            </p>
            <p className="mb-3 text-lg leading-relaxed">
              But there in the background, faint and out of focus, are the extras. The random passersby. Each living a life as vivid and complex as your own.
            </p>
            <p className="mb-3 text-lg leading-relaxed">
              They carry on invisibly around you, bearing the accumulated weight of their own ambitions, friends, routines, mistakes, worries, triumphs and inherited craziness.
            </p>
            <p className="mb-3 text-lg leading-relaxed">
              When your life moves on to the next scene, theirs flickers in place, wrapped in a cloud of backstory and inside jokes and characters strung together with countless other stories you'll never be able to see. That you'll never know exists.
            </p>
            <p className="text-lg leading-relaxed">
              In which you might appear only once. As an extra sipping coffee in the background. As a blur of traffic passing on the highway. As a lighted window at dusk." (Dictionary of Obscure Sorrows)
            </p>
          </div>

          <GuestbookEntry entries={guestbookEntries} setEntries={setGuestbookEntries} />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);