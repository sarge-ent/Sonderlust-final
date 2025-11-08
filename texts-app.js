function GallerySection({ title, items, linkText }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = items.map(item => typeof item === 'string' ? item : item.image);
    const titles = items.map(item => typeof item === 'object' ? item.title : null);
    const descriptions = items.map(item => typeof item === 'object' ? item.description : null);
    const links = items.map(item => typeof item === 'object' ? item.link : null);

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
      <div className={title ? "retro-panel p-6 rounded-lg mb-6" : "mb-6"}>
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
            {title}
          </h3>
        )}
        
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
        
        {(titles[currentIndex] || descriptions[currentIndex] || links[currentIndex]) && (
          <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
            {titles[currentIndex] && (
              <h4 className="text-xl font-bold mb-2 text-[var(--primary-color)]">{titles[currentIndex]}</h4>
            )}
            {descriptions[currentIndex] && (
              <p className="text-lg leading-relaxed mb-2">{descriptions[currentIndex]}</p>
            )}
            {links[currentIndex] && (
              <p className="text-lg leading-relaxed">
                <a 
                  href={links[currentIndex]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
                >
                  {linkText || links[currentIndex]}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('GallerySection error:', error);
    return null;
  }
}

function TextsApp() {
  try {
    const poetryItems = [
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/beea718e-cc20-44e4-8cf3-e492259c1341.png', link: 'https://www.reddit.com/r/copypasta/comments/blvphv/the_entire_minecraft_end_poem/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7cf3de10-f658-44b6-bd1d-894ea36022cd.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f76c4c84-3755-49cf-813b-22b5dd4330a2.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6b82a78d-d765-4d54-af9f-06aa3ec69e45.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/8c8fac46-3e15-47a4-98fd-435ebe03dc3d.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ffefcd07-befe-4a02-8894-4131e3f5399e.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/de8638cf-bd9d-487d-a915-b88e9f74caee.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0380012d-ac83-4324-a485-1acb2611aa3b.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d7d9a838-c50b-4db3-914d-8d97fd8a07fe.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/461659e6-76f9-4c0e-917e-6e02e333d8cc.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/e91a557f-7aff-4e67-9e2b-902a119630ef.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/90325c21-ac6b-4e97-bf83-5f2645761513.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1f608e40-3591-4fbf-bc2c-ffa2cc824ba6.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b3102c2d-022b-467b-88b3-7df0a6c7ef09.jpeg', description: 'Written by me/Sarge Graham' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c844a348-1c61-4d5e-84b3-95b217fe997c.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7b67709b-16e0-4486-9ff3-be10d271cc7f.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0f1565db-b8ce-4028-9315-286b36ca8bd5.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fe26e25f-c3c4-4838-b61c-5c4e5a680da3.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/28aabad6-f375-4d6d-ac93-dd36d96238cf.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b6a7aae8-ce7e-473e-9cf6-9cdd85066a18.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/10ef55ab-83b6-47b6-9d5d-2d6b62d0841d.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/50eadd6b-623b-4f62-9a76-ed5907f4773f.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fe38c9e6-94e3-4c8c-8026-087d3a7ec116.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9a371bc1-31c3-448c-8007-0577c42ff9c8.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/841d2ad3-62e0-4e5a-8cad-953ef2e7485c.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2ee441f6-9f5f-4e0e-8739-4c0dcb16c4be.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5c319f5d-8516-475f-a9e1-41425fa6e389.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0278da46-1e79-4efb-b1e7-a9a8df098d33.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/69a1623a-9993-4f88-bf52-da1f805f463a.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/eed2e399-54e5-4535-97ef-1a6d81ed894b.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6b5f73bb-b3ef-462e-a9f5-a6c02e681ced.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b5e85d66-8ce7-4b23-8aa6-394dea65e4df.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2ae49228-2a96-429e-94c4-754fdfa95f0e.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/a50cf83a-44b7-4ba6-a0ea-31c3fd836017.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9ba75f6c-568f-4465-8cd0-bd5e6de796d6.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/a3a87b45-b748-4062-a26a-3592c4f1a203.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/02a2098e-c047-4e0c-b5bc-1865c1086cbd.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/da143ccd-1b1c-4c10-bf55-498f9db9a629.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9f7139be-f21d-4262-8da8-675826f492a9.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cf6cc492-9d8d-45be-8083-a58dbe251146.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/20be9797-0938-4c88-b67c-ef5a6da2cfd3.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/762b7aa5-4c54-4c5f-943c-f15c39b01197.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/80577661-786b-41fb-b95d-f97a8dc20c8a.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0b6e0ce8-b075-4d3f-8050-29fb8bde44bd.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f8ae2b9f-2a4e-4311-830e-d203404b1ed1.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/121810f4-7e55-4254-80d4-239742cfd518.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f4d142c4-51be-48c1-8ba0-a0018de55349.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/14e9d975-5557-42bd-bf4a-8e7282d1f2d7.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/068a9a37-f531-4914-be8f-6bb34f589096.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/02942109-c5a8-497d-b08c-ad7d8f6aff85.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b0b25d06-70e4-4521-8f0b-326a508df0e7.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ba24378d-0845-4986-8ee2-1222f004662c.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/46ffd9d2-0bdc-45b0-ae77-50a2c16ff3c5.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0ed03032-9844-49c4-b0a0-9b7e4f28fad6.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7faf63d0-8071-496d-96bf-d6a77487056c.jpeg' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6ec72c76-69f6-4959-b4dd-eed2339305d5.png' }
    ];

    const literatureItems = [
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2269aa14-4369-4a44-9ba9-97ca9c64cbd7.jpeg',
        title: 'The Miraculous Journey of Edward Tulane - Kate DiCamillo',
        description: 'Major themes of loss and recovery, kindness and compassion for others, and the journey of self discovery. This book details learning how to be loved and love others, how to accept help, and how to exist in the space of others with care and respect. It takes on a strong notion of moving through life trying to discover the facets of yourself while also holding space for those you come in contact with. In sum, it tells us: "If you have no intention of loving or being loved, then the whole journey is pointless."'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/06d866ac-edbf-4818-86b4-08ecbe504e9b.jpeg',
        title: "I'll Give You the Sun - Jandy Nelson",
        description: 'Major themes of art and self-expression, acknowledging change and self-acceptance despite it, discovering identity and one\'s place in the world, paths crossing, and people heading the same direction. This book discusses the difficulties of going through changes and piecing your lives back together with those around you after they happen. It tells you that comparison is a thief of individualism, creation, and unique bonds. It relies heavily on the crossing of paths repeatedly, and relations with others remain a prominent necessity. It tells you; "... maybe some people are just meant to be in the same story."'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/dbfe9df0-b59d-4947-a8d4-d6c7d3d3e183.jpeg',
        title: 'The Outsiders - S.E. Hinton',
        description: 'Major themes of the importance of bonds with others, maintaining self identity, and putting yourself out there for attempted connection. This book informs on how people are more similar than they are different, and that things like social class divisions are divisive and harmful. It details how, despite everyone coming from vastly different places, we are all still human and still mortal.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7f86f509-8bf5-45c7-8e46-958628b32702.jpeg',
        title: 'House of Leaves - Mark Z. Danielewski',
        description: 'Major themes of the nature of objective truth, how people see things is subjective, and how things shift depending on perception. This book discusses how stories inspire others in their own unique and subjective manners, and how we each have our own narratives that consume us and change based on how we see them.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/39611614-f5b4-4cf4-be03-368741616262.jpeg',
        title: 'On Earth We\'re Briefly Gorgeous - Ocean Vuong',
        description: 'Major themes of how life is both painfully harsh and stunningly beautiful, and while both of these things are fleeting it is crucial to accept them as they come and cherish what you have. This book tells us that the shortcomings of our lives contribute to making us who we are, and emphasizes our relationships as a source of reliability and communication.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c41e328e-957a-4dc3-b755-57f9bab4f2cc.jpeg',
        title: 'Spoon River Anthology - Edgar Lee Masters',
        description: 'Major themes of the contrast between public appearance and private reality, mortality as a form of social equalization, and the human condition. This book contains a collection of mock epitaphs each told by a different individual posthumously, and develops a rich and complex spread of crossing narratives.'
      },
      { 
        image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d0c59211-e98a-46f3-928c-5be980d763de.jpeg',
        title: 'A Man Called Ove - Fredrik Backman',
        description: 'Major themes of everyone having a story, how even those who feel truly lost can find new purpose and community through connections with others, and subsequently that kindness and a sense of purpose are essential to life. This book\'s core factors are that everyone has a story, and that judging by first impressions is a mistake.'
      }
    ];

    const messagesImages = [
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/073bf46b-e64e-4804-be32-4f0e11f4856c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/005b62fb-20b0-4111-991e-793b4928c4c0.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/42b2c61c-ba0d-40c3-97c5-16bb79e6b249.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ed014e20-d406-4668-8946-111f12c001af.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/50f470c1-52b1-4802-8d97-110219550f14.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/b18b8e58-9a6e-42ff-b3fa-6990133ac815.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/bab560b6-0110-44d3-afdb-278537753dcc.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ca9d6ae8-3ddb-479a-8206-03909cfa3e6d.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/559ed900-e8a5-4bff-b2e0-788051934bdb.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/e411d26c-6373-4a8a-8de8-03882cbd817c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/a0b098b7-778d-479c-97c6-b85565b5c796.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/92cb597e-ddc3-4a83-80b2-d984d494220e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/c8050d23-5f63-4c3a-ac41-2dc42ef99a1e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/fb72f11c-f0bf-4fd2-a94a-adc562f98525.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/a078cfc1-a287-4f22-af30-88f24db592e3.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/36aaaa14-3fb7-4c74-b753-64ccbaca1c78.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/0dcc5619-762c-4a74-85c4-b3bccfc4c6f5.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/eddf47e6-6adb-4f11-a4f5-1decdb26634c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/62ab144e-3fed-4dfc-8a9a-d181df5a8e54.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/f8f8329c-3ad2-4f0a-a6a1-e0ac1db7b344.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/57cfb450-017e-489c-b70c-aa8346da1cdd.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/772fb993-b747-444c-b339-ff3f766b9065.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/ee6410c3-dad2-4481-bf7a-068b8b507e40.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/fe758469-d037-469f-9f06-ad4a3daecbd1.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/d81aae6b-4e0a-45b1-9014-1af50597db98.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/258154fc-f0e7-4c44-9673-0aaadef1ea78.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/313b21f0-9e86-46af-b4c9-fca8fd235225.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/c5522790-d014-4b34-80c9-b9e80f0a2871.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/4a70fa5e-40ad-4a59-910d-42eae7254ab2.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/74438389-0414-42fc-8af9-7f33ea1bc01a.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/9d4b7540-a2a3-4cd7-8fb5-4754a57af75e.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/78fcbd08-c2d1-4b4f-bd53-05996caede61.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/f518c19a-f2ca-49d4-83ab-1046180cf3e3.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/6822f93e-ac24-4e6e-a494-2c57da2b337c.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/9457f0ee-c5fe-4a8a-84d9-89beb8357d81.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/443278ae-d1d1-4be3-aea0-8fdff98aa0c4.png',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/1fddfb47-89f4-4a5f-a01c-b5dddf1745cb.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/fe2e5daf-18d8-4eca-9177-912ac724c845.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/74e36fac-1ab6-4a51-a2fb-49257973c4d6.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/1990d793-706d-4cb6-a2d3-24431f80a121.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/bd5254a7-a69b-4ddc-9c9e-7f386392ea61.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/34e084c2-4747-4791-9e29-64bc5c240e4d.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/212fdde1-825b-4d47-9feb-2c84e4beec18.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/17497672-102a-4f12-98ca-529ced4c08f9.jpeg',
      'https://app.trickle.so/storage/public/images/usr_170d739758000001/bb4aeec2-f2d3-4f96-a792-0ba10607c760.jpeg'
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Texts
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Poetry, literatures, and messages- Many recommended from someone I love, or wish I could've loved more. Each connects to individualism and humanity in its own unique way. Words are by far one of our strongest forms of art.
            </p>
          </div>

          <div className="retro-panel p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Poetry
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              A collection of various poems. What I consider "poetry" is quite different from the standard, so these may not stick out to you as poems immediately. I believe that if it speaks to your being, it qualifies. And in this, I operate on the principle that <em>anything</em>, and, in tandem, <em>everything</em>, can be a poem.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              For all poems written by me; zooming in is recommended.
            </p>
            <GallerySection title="" items={poetryItems} linkText="Full poem" />
          </div>
          <GallerySection title="Literature" items={literatureItems} />
          <div className="retro-panel p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-2 text-shadow-retro text-[var(--primary-color)]">
              Messages
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              A collection of various messages from people I've loved that I have saved for one reason or another over the years.
            </p>
            <GallerySection title="" items={messagesImages} />
          </div>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('TextsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextsApp />);
