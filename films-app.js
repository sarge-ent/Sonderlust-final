function FilmGallerySection({ title, items }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = items.map(item => item.image);
    const titles = items.map(item => item.title);
    const descriptions = items.map(item => item.description);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="retro-panel p-6 rounded-lg mb-6">
        <h3 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
          {title}
        </h3>
        
        <div className="bg-[#2C1810] p-4 rounded border-4 ridge mb-4 relative" style={{borderColor: 'var(--border-color)'}}>
          <img 
            src={images[currentIndex]} 
            alt={`${title} ${currentIndex + 1}`}
            className="w-full h-96 object-contain"
          />
          
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 retro-button px-2 py-1 rounded z-10"
            title="Previous"
          >
            <div className="icon-chevron-left text-sm text-white"></div>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 retro-button px-2 py-1 rounded z-10"
            title="Next"
          >
            <div className="icon-chevron-right text-sm text-white"></div>
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 border-3 rounded overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'border-[var(--primary-color)] scale-110' 
                  : 'border-[var(--secondary-color)] opacity-70 hover:opacity-100'
              }`}
              style={{borderWidth: '3px'}}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
        
        {(titles[currentIndex] || descriptions[currentIndex]) && (
          <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
            {titles[currentIndex] && (
              <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">{titles[currentIndex]}</h4>
            )}
            {descriptions[currentIndex] && (
              <p className="text-lg leading-relaxed">{descriptions[currentIndex]}</p>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('FilmGallerySection error:', error);
    return null;
  }
}

function FilmsApp() {
  try {
    const films = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/983cd533-cdcb-4bd1-bca2-1aad41718062.jpeg', 
        title: 'Fantastic Mr. Fox',
        description: 'Major themes are the connection between identity and responsibility, family and individualism, and community and acceptance. This film explores the wildness of identity and how it is crucial to your being, but may also isolate you from those you love. It encourages the acceptance of everyone as they are, and shows that the "weird" are still human. Its ultimate takeaway is being yourself in a world of diversity, and supporting others in the same venture- and find strength in imperfection.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5082b63a-9dbf-4220-a355-a8897add369d.png', 
        title: 'Dead Poets Society',
        description: 'Major themes of seizing the day, addressing the concept of conformity versus rebellion, and individualism. This film emphasizes how crucial freedom of thought is, and brings light to the necessity of intimacy of every kind with others.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6c4d3abc-4995-429f-9896-3f093f4954db.jpeg', 
        title: 'Everything Everywhere All at Once',
        description: 'Major themes of potential, accepting yourself in the life that you lead, contentment with who you are, and finding meaning. This film presents a multi-faceted approach to identity, and encourages you to find meaning through kindness. The ultimate message it delivers is that love and choosing to be good to others and ourselves is what gives us purpose.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d5528dd0-bf83-4a80-9f88-9c7893d5b831.jpeg', 
        title: 'The Art of Racing in the Rain',
        description: 'Major themes of love, loss, coming to know one another, and the human condition. This film captures the discovery of knowledge that pertains to the nature of humanity, as well as philosophy and trust in each other.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1111b11d-7d23-4389-ac81-46706e7b3fd6.jpeg', 
        title: 'Freak the Mighty',
        description: 'Major themes of aiding others in overcoming their shortcomings, not judging each other, and bypassing first impressions based on appearance. This film emphasizes how crucial friendship and supportive bonds are between people, and how equity in how we treat each other is necessary.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fa2b3b49-d0d4-4503-975d-f64007731803.jpeg', 
        title: 'Edward Scissorhands',
        description: 'Major themes of accepting everyone as they are, supporting others without question, and bypassing preconceived notions. This film encourages you to exist as you are, be unapologetically yourself, and appreciate your unique talents.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5595fddc-e59a-4349-b74e-7530ac02f83c.jpeg', 
        title: 'Chemical Hearts',
        description: 'Major themes of loving yourself and overcoming trauma or bad history from your own timeline in order to come into your own. This film compares love and tragedy, as well as the difficulty of opening up and getting to truly know someone- or put yourself in their shoes.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3eba8c2b-9a81-404e-bb74-0a987b85bc94.png', 
        title: 'Beetlejuice',
        description: 'Major themes of accepting what makes you different, having acceptance for those around you, and finding connection with others. This film emphasizes everyone being able to accept themselves and each other despite their quirks, and exist on the same level.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7eae2d23-cbd3-4bbe-b6c2-02f48819aa66.jpeg', 
        title: 'Perks of Being a Wallflower',
        description: 'Major themes of celebrating inclusivity and tolerance, demonstrates how people can grow when they are supported in themselves. This film discusses the dark parts of being human as well as discovering belonging in multiple facets of the world.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/757f14af-583b-4690-a4a0-148faec45d2e.jpeg', 
        title: 'The Last Unicorn',
        description: 'Major themes of coming into mortality, and the transferring of going from being vain and self-involved to realizing the existence and condition of those around you. This film touches upon interacting with others through new lenses and ending up never the same, for the better. It delves into experiencing real connection for the first time and perpetuating it into the rest of your life.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6dbdb486-a85a-436e-86a5-ce6285356ea4.webp', 
        title: 'My Life as a Zucchini',
        description: 'Major themes of how human kindness, while sometimes unlikely, is never impossible- as well as finding connection even at your lowest, overcoming your own preconceived notions of yourself, and believing that you can move forward as who you are. This film overcomes the lowest, and encourages you to remain strong even when uncertainty may seem domineering.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/71d5e483-982b-4df4-b294-b587196f6d4a.png', 
        title: 'Memoir of a Snail',
        description: 'Major themes of living forward despite life\'s tragedies, believing in yourself no matter where you end up, and that you don\'t need the validation of others to be your own whole person. This film takes a gritty air on self-discovery, recovering from downfalls, and learning to live through change and remain yourself at your core.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f302f6b9-e623-4ca7-a8ea-9a83f513f721.jpeg', 
        title: 'The Wild Robot',
        description: 'Major themes of acceptance, finding community as you move through life into new places, and fighting to be allowed to be yourself. This film encourages breaking free of the mold, living outside the box, and existing differently from the norm. It tells you to live how you feel suits you, rather than what others want you to be.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/616297f6-d804-450c-8f95-b4d2a7bdffe0.jpeg', 
        title: 'Ratatouille',
        description: 'Major themes of criticizing others based on stereotypes, assuming how someone may act based on how they look, and believing in yourself even when the societal norms don\'t suit you. This film encourages you to look past initial impressions, past how someone looks, and value yourself and others for who they are, as well as what they can do.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9ac4cd7b-59f4-48ac-9eba-348e554a8409.jpeg', 
        title: 'Home',
        description: 'Major themes of not judging a book from its cover, and that intentions and qualities can change. This film delves into how someone may start out with skewed values, learned judgement, and potentially harmful perception of self-identity, but that the journey of self-discovery is possible for everyone- especially with outside support.'
      }
    ];

    const shows = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/00f7c67a-dd7c-4a12-b3ab-6fbd18704ac1.jpeg', 
        title: 'The Good Place',
        description: 'Major themes of the nature of morality, redemption, necessity of others, and the meaning of a good life. This show builds itself upon the notion that everyone is inherently good, and if given the opportunity and support to improve, they will. It emphasizes that we need other people in our lives to achieve things and teach us the factors we otherwise would not learn. It forces you to consider your own morality, the way you treat others, and what you truly want from your life. It embodies the essence of humanity at its core; its most raw, visceral, and heart-wrenching. Its ultimate message comes through as this: "we are what we owe to each other."'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/aef547f1-2f4a-4535-8246-bc007d735da5.jpeg', 
        title: 'Bojack Horseman',
        description: 'Major themes of our relations with other people and how they change, reliance, depending on each other, and overcoming flaws and problems within ourselves. This show prefaces itself with mortality and the dark parts of being human, but ultimately centers on the fact that at the core of everything, we need each other. It explores how we rely and depend on each other as people, and how supporting other people shouldn\'t come at the cost of our own wellbeing. It touches on how self-actualization requires criticism to find its ground, and that we must be able to be stable within ourselves before we branch out to others.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/8fc7c3a9-05ca-46d0-b6ae-c04f0c4fb8a0.jpeg', 
        title: 'Adventure Time',
        description: 'Major themes of positivity, accepting change, and coexisting with each other regardless of differences or quirks. This show is heavily based upon connections with the world and those around us, as well as embracing ourselves as we change over time.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3903872a-3447-4827-95e9-382839fb1b90.jpeg', 
        title: 'Evangelion',
        description: 'Major themes discuss that connecting to others hurts and is ultimately difficult, but it is worthwhile and something to pursue. This show encourages you to find hope and value in the facets of life despite the inevitable negatives, and relies heavily on accepting oneself and connecting with others in spite of the risk.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/62c2d119-9084-46bc-84fe-464eea956dbb.jpeg', 
        title: 'Mob Psycho 100',
        description: 'Major themes of how no one is any better or worse than anyone else, but everyone can always change and work to be who they want to be. This show discusses how no one is inherently more special than everyone else, and focused on how all people are equal in their humanity despite who they are.'
      }
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Films and Videos
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              A media pairing of films and TV shows that I find invoke the feeling of sonder or exploring what it is to be human. While this page provides descriptions and themes for each, I encourage that you explore into them further in your own time.
            </p>
          </div>

          <FilmGallerySection title="Films" items={films} />
          <FilmGallerySection title="Shows" items={shows} />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('FilmsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilmsApp />);
