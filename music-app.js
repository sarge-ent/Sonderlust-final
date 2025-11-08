function MusicGallerySection({ title, items }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = items.map(item => item.image);
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
        
        {descriptions[currentIndex] && (
          <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
            <p className="text-lg leading-relaxed whitespace-pre-line">{descriptions[currentIndex]}</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('MusicGallerySection error:', error);
    return null;
  }
}

function MusicApp() {
  try {
    const albums = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0195991e-cbff-4a1f-8109-02ac9766da46.jpeg', 
        description: `How To Be A Human Being - Glass Animals

This album is the epitome of human collectiveness. Each song within it tells the story of a different real-life person, true tales from each individual life and experience. The songs are written specifically to detail and bring to life a different strain of humanity. It is through these songs that you experience the way other people have existed, and understand them through the lens they understood themself.

Recommended songs:
Life Itself
Youth
Take a Slice`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f46a78da-07e8-4f80-9971-4407a1157193.png', 
        description: `Stadium Arcadium - Red Hot Chili Peppers

This album is about connecting to people by way of music, through a lens of communicating for the universe, and in a way of honoring the universe. It discusses real and profound influences, human shifts and relationships as they alter life, and mortal aspects. The album is founded upon how music connects us to our humanity and the universe around us.

Recommended songs:
Turn it Again
We Believe
Make You Feel Better
If
Tell me Baby`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/12b0d2c8-9444-4a2f-a9a3-5ae6dbd36b26.jpeg', 
        description: `I'm Wide Awake, It's Morning - Bright Eyes

Major themes of finding hope amidst despair, how everyone has different methods of processing and places within the world, persevering in art even when you aren't sure what you're doing, and love despite it all. This album is world-weary but resilient, and tells of the raw humanity that comes with existing.

Recommended songs:
At The Bottom of Everything
We Are Nowhere and It's Now
Another Travelin' Song
Road to Joy`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d2471514-ab68-4f03-bd4b-e902d35457ad.jpeg', 
        description: `Reconstruction Site - The Weakerthans

Major themes of understanding the mortality of grief, loss, and regret as they shape us into who they are- but also how they lead to eventual hope. This album touches on the tangible nature of being human, and that our mortality makes everything more vulnerable, visceral, and real. It compounds over human experience, and emphasizes feeling real at your most uncertain.

Recommended songs:
The Reasons
Psalm For The Elks Lodge Last Call
Plea From a Cat Named Virtue
Time's Arrow`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/472ee6d9-4fa1-4083-885b-1bf96916dcf0.png', 
        description: `A Different Kind Of Human - AURORA

Major themes of humanism, changing your own life to positively affect the world, and finding inner strength. This album discusses being every kind of human all in one, the nature of existence, and change all the way through your time in this body.

Recommended songs:
The Seed
Apple Tree
A Different Kind Of Human`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7315183b-3ab5-4875-bcf4-9dbe99367848.png', 
        description: `(Un)commentary - Alec Benjamin

Major themes of touching in with the inner mind, exploring the human experience, progress through unforeseen lenses, the impacts of decisions on a human life, and reflection. This album tells a multitude of stories and names several different people, giving it distinct narratives.

Recommended songs:
Nancy Got a Haircut
One Wrong Turn
The Way You Felt`
      }
    ];

    const songs = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/75f2fbdf-507d-4d02-9dfe-65ee0266564e.jpeg', 
        description: `People - AJJ

"I said God, I love some people sometimes
Because people are the greatest thing to happen."

"And people are people regardless of skin
And people are people regardless of creed
People are people regardless of gender
People are people regardless of anything
I said people are people regardless of gender
People are people regardless of anything."

"And people are my religion, because I believe in them

And people are my enemies, and people are my friends
I have faith in my fellow man
And I only hope that he has faith in me."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ec7d427f-2171-43d4-8ac7-9056230fc805.png', 
        description: `I Lived - One Republic

"Hope when the moment comes, you'll say...

I, I did it all
I, I did it all
I owned every second that this world could give
I saw so many places, the things that I did
With every broken bone, I swear I lived."

"Hope that you spend your days, but they all add up
And when that sun goes down, hope you raise your cup."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/00c8cfbc-f619-43ec-b367-d82b417861f9.jpeg', 
        description: `Livin' On A Prayer - Bon Jovi

"She says, "We've gotta hold on to what we've got
It doesn't make a difference if we make it or not
We've got each other and that's a lot for love
We'll give it a shot" "

"Oh, we've gotta hold on, ready or not
You live for the fight when that's all that you've got."

"Take my hand and we'll make it, I swear."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b9ea7a02-a9ff-4275-a10e-047b5569e23e.jpeg', 
        description: `The Nights - Avicii

"He said, "One day, you'll leave this world behind. So live a life you will remember.""

"He said, "Go venture far beyond the shores. Don't forsake this life of yours.""

"When you get older, your wild heart will live for younger days."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b875b57b-33b9-442a-b522-fd410ce425ed.png', 
        description: `Colorful - Jukebox the Ghost

"Hey, yeah we're just getting started
Take your fears and let them go
For the lovers and the broken-hearted
Take a deep breath, make the world a little colorful."

"Wanna feel like a light in a dark place
Another color in a world of black and white
Wanna try to paint the world in a new way
Left home with a dream and a suitcase

Work hard, play hard, we don't have to grow up
Hide and seek, promise me that we'll never grow up."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d33f986a-7a52-4d00-8efc-6ebf9984fde0.jpeg', 
        description: `Incomprehensible - Big Thief

"Travelin' with some stuff I left when I was a kid
Mr. Bear and the wooden box I hid
Full of broken gadgets that mean nothin' now
The only thing I'll keep are the letters and the photographs."

"In two days it's my birthday and I'll be 33
That doesn't really matter next to eternity
But I like a double number, and I like an odd one too
And everything I see from now on will be somethin' new."

"So let gravity be my sculptor, let the wind do my hair
Let me dance in front of people without a care
Let me be naked alone with nobody there
With mismatched socks and shoes and stuff stuffed in my underwear

Incomprehensible, let me be
Incomprehensible."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c141a98e-4de0-4f6a-802a-f958bb507f52.jpeg', 
        description: `In the Aeroplane Over the Sea - Neutral Milk Hotel

"But for now we are young
Let us lay in the sun
And count every beautiful thing we can see
Love to be
In the arms of all I'm keeping here with me."

"What a curious life
We have found here tonight
There is music that sounds from the street
There are lights in the clouds."

"What a beautiful face
I have found in this place
That is circling all 'round the sun
And when we meet on a cloud
I'll be laughing out loud
I'll be laughing with everyone I see
Can't believe
How strange it is to be anything at all."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9c976776-25e8-4ed7-93fe-91e12936d9a4.jpeg', 
        description: `At the Bottom of Everything - Bright Eyes

"We must talk in every telephone, get eaten off the web
We must rip out all the epilogues from the books that we have read
Into the face of every criminal strapped firmly to a chair
We must stare, we must stare, we must stare."

"We must take all of the medicines too expensive now to sell
Set fire to the preacher who is promising us Hell
Into the ear of every anarchist that sleeps but doesn't dream
We must sing, we must sing, we must sing."

"We must blend into the choir, sing as static with the whole
We must memorize nine numbers and deny we have a soul
And in this endless race for property and privilege to be won
We must run, we must run, we must run."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fbfe1b5e-4f2d-481d-a94e-d1fd067d78ff.png', 
        description: `The Middle - Jimmy Eats World

"Hey, don't write yourself off yet
It's only in your head, you feel left out or looked down on
Just try your best, try everything you can
And don't you worry what they tell themselves when you're away."

"Hey, you know they're all the same
You know you're doin' better on your own (On your own), so don't buy in
Live right now, yeah, just be yourself
It doesn't matter if it's good enough (Good enough) for someone else."

"It just takes some time
Little girl, you're in the middle of the ride
Everything, everything will be just fine
Everything, everything will be all right, all right
It just takes some time."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1c156d36-bb23-43cd-99e8-b725b5aa762f.jpeg', 
        description: `The Reasons - The Weakerthans

"I know you might roll your eyes at this
But I'm so glad that you exist."

"How we waste our precious time
Marching in the picket lines
That surround those striking hearts
And the time is never now
And we know who we should love
But we're never certain how."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/12558268-7ebc-461a-bce9-eb7d3a4a45e0.png', 
        description: `Turn It Again - Red Hot Chili Peppers

"Some of us get a little and some, a lot
We got to make due with whatever we got
We get it hot, we cool it down and then we pass it around."

"Or you can dance for the sake of a golden day
Take a chance on getting rid of whatever's in your way
Next stop, big hop, it's turning night into day."

"I've come to love whatever time I can find to spend
Taking flight into whatever light we bend
Out in the street, I get a beat and then I turn it to ten."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5a8b4988-7dd6-4134-a3e1-4f4cbd379367.png', 
        description: `Sex, Drugs, Etc. - Beach Weather

"Bulletproof passengers
On the road to sex, drugs, etc.
Get out the dark and into the light."

"Half love, half regret
Dressing up for Polaroids and cigarettes
Socialize, romanticize the life."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/89d93d3e-e063-4081-a8b9-5170da003d46.png', 
        description: `Fever dream - mxmtoon

"I took the train, I took the call
I didn't know just where I'd fall
Or where it'd take me
Another step, another stair
I'll never know if I'll get there
But just maybe."

"Take your time, enjoy it
Every fleeting moment."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b8cbdfc1-82ce-425a-bb28-d72c0c468c8a.jpeg', 
        description: `It Can Feel So Good - Zammuto

"Let yourself feel your own heart
Beating and pumping
When you walk in warm water
Like they do in the summer when the sun is on them
You can feel so good."

"You know what a heart looks like
That good feeling is always there
You can feel so good."`
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/62352bd5-430f-4e06-8896-b9fb44b1c0a7.jpeg', 
        description: `Road to Joy - Bright Eyes

"I have my drugs, I have my woman
They keep away my loneliness
My parents they have their religion
But sleep in separate houses."

"So I'm drinking, breathing, writing, singing
Everyday I'm on the clock
My mind races with all my longings
But can't keep up with what I got."`
      }
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Music
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Here is a music pairing for the film. Directly below is the magnum opus, a collective playlist put together by a great many people from different times and different places. It contains music from the other recommendations mixed in, and serves as a complete masterlist of the music we all deemed near "sonder". Start here, if you want to, and listen with every part of you open.
            </p>
            <div className="text-center">
              <a 
                href="https://open.spotify.com/playlist/78xECwOccznUMup5Va9DLa?si=iPvS5QJ2QX-JtjJw5Oqe2w&pi=tXViXO2pSLO_o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block retro-button rounded overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_170d739758000001/615f1d59-7a68-4d2a-99e4-50c98e62bb1a.jpeg" 
                  alt="Listen to Playlist"
                  className="w-64 h-auto object-contain"
                />
              </a>
            </div>
          </div>

          <MusicGallerySection title="Albums" items={albums} />
          <MusicGallerySection title="Songs" items={songs} />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('MusicApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MusicApp />);