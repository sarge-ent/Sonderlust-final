function SpecialApp() {
  try {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              What is Sonderlust?
            </h2>
            <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
              <p className="text-lg leading-relaxed mb-4">
                Sonderlust is one of the 11 short documentaries made by Youth Documentary Academy students in the year of 2025.
              </p>
              <p className="text-lg leading-relaxed mb-2">
                It was an ambitious film, including 20 total interviews and a cumulative many hours of footage. The film uses footage from as far back as 2011, and contains over 40 people in total throughout all b-roll and shots.
              </p>
              <p className="text-lg leading-relaxed">
                Learn more about the process of making this film and the Youth Documentary Academy here:{' '}
                <a 
                  href="https://www.youthdocumentary.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
                >
                  https://www.youthdocumentary.org/
                </a>
              </p>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('SpecialApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpecialApp />);