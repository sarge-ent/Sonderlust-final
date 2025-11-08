function ArtGallerySection({ title, items }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = items.map(item => item.image);
    const links = items.map(item => item.link);

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
        
        {links[currentIndex] && (
          <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
            <p className="text-lg leading-relaxed">
              <a 
                href={links[currentIndex]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--primary-color)] underline hover:text-[var(--secondary-color)]"
              >
                Source
              </a>
            </p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('ArtGallerySection error:', error);
    return null;
  }
}

function ArtApp() {
  try {
    const physical = [
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/aa40a527-0f97-40ac-88e4-52c9d467d1b5.jpeg', link: 'https://www.pinterest.com/pin/476255729365850339/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6a4a6ab1-7e73-4cc0-b718-a3568241ea02.jpeg', link: 'https://www.pinterest.com/pin/476255729365850321/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6808f27c-3ed3-41d2-a7f2-12f4684505e2.jpeg', link: 'https://www.pinterest.com/pin/476255729365850341/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6569f7ab-f36a-4941-8e82-ab70080c2e35.jpeg', link: 'https://www.pinterest.com/pin/476255729365850315/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d4132039-6bed-469c-9057-70f8ace4907d.jpeg', link: 'https://www.pinterest.com/pin/476255729365850343/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3cdf33ba-1af4-4c0a-b2fc-61cf9e323030.jpeg', link: 'https://www.pinterest.com/pin/476255729365850320/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/27bec8c7-cf33-4aee-b598-78750959e409.jpeg', link: 'https://www.pinterest.com/pin/476255729365850354/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/147fed7c-88a6-43b0-8710-477415e313a4.jpeg', link: 'https://www.pinterest.com/pin/476255729365850332/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/32ce1ddb-5473-4735-9b07-37e24857d013.jpeg', link: 'https://www.artsy.net/artist/ralph-fleck' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d5406eb8-f560-4855-a24d-4784b286bc8a.jpeg', link: 'https://www.pinterest.com/pin/476255729365830565/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f659f1d8-92d2-4060-b772-37f0cfae01a4.jpeg', link: 'https://peakradar.com/public-art/we-are-in-this-together/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/610beade-2638-4da0-bffc-522e31598b31.jpeg', link: 'https://www.pinterest.com/pin/476255729365834117/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1092b5a9-465c-4eab-a34b-6bbc917e56a2.jpeg', link: 'https://www.pinterest.com/pin/476255729365834115/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/99401061-7cd4-451d-8d95-61249af24a5d.jpeg', link: 'https://www.pinterest.com/pin/476255729365834113/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5828e487-ac7e-4190-b3f1-847832b762f1.jpeg', link: 'https://www.pinterest.com/pin/476255729365834112/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f5becf22-70af-4bd2-8260-e01cdcbf1670.jpeg', link: 'https://www.pinterest.com/pin/476255729365830544/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4d3f98b0-1e44-4fa4-9e02-43c9cf49d5ba.jpeg', link: 'https://www.pinterest.com/pin/476255729365830572/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5a9c54d8-b3f8-4b60-969d-e5c7cc21a526.jpeg', link: 'https://www.pinterest.com/pin/476255729365830577/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/56825680-b3b8-42c6-92ec-f9f603befc35.jpeg', link: 'https://www.pinterest.com/pin/476255729365830570/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/e6ebb60b-9a6c-4f8c-bb02-2d16db5a453f.jpeg', link: 'https://www.pinterest.com/pin/476255729365830568/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f40d5960-c9ef-4025-a74d-2ceb9ec5810f.jpeg', link: 'https://www.pinterest.com/pin/476255729365830543/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f2658977-388e-4a1d-82a2-e4d294a110a4.jpeg', link: 'https://www.pinterest.com/pin/476255729365830553/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/afc9ff2f-8e43-4f8c-919b-bae1a015f437.jpeg', link: 'https://www.pinterest.com/pin/476255729365830569/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ff8249b6-1efd-4abe-a8d6-9e223cffdb8e.jpeg', link: 'https://www.pinterest.com/pin/476255729365830459/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ac0e52f9-ffaa-4513-a12c-2e6621081167.jpeg', link: 'https://www.pinterest.com/pin/476255729365834133/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f150415c-7f1d-4b12-8c2d-6e7e65939c89.jpeg', link: 'https://en.wikipedia.org/wiki/Chris_Reccardi' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4295d158-1ed2-42b8-89a5-a3fed13f412e.jpeg', link: 'http://www.brechtevens.com/' }
    ];

    const digital = [
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d87ad5d0-343b-44c6-940f-f1297391bd9e.png', link: 'https://www.instagram.com/linearcollages?igsh=MWVscGR4eTMwYWxuMA==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9326d849-720a-48db-b85c-b7c05cdb415e.png', link: 'https://www.instagram.com/linearcollages?igsh=MWVscGR4eTMwYWxuMA==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/bfc7d55f-a48d-4f5d-b833-c61e930b9fe6.png', link: 'https://www.instagram.com/linearcollages?igsh=MWVscGR4eTMwYWxuMA==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c37fc446-bed9-4493-bce3-9ef0434e27ed.jpeg', link: 'https://x.com/tobyfox' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/8042ff47-db62-4c23-b156-f3b92afeefba.png', link: 'https://www.instagram.com/stephanie.stalvey.artist?igsh=MTM1dGc1ZWswcTF1NQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c1ac2568-0d11-4a34-b41b-1654d28f251d.jpeg', link: 'https://www.reddit.com/r/plushies/comments/1abztlv/years_ago_i_posted_a_photo_of_my_wifes_well_loved/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/837ed15d-bef3-4eef-936c-36f244a45586.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cf865930-9e78-4322-9d24-ff20af5adfd2.png', link: 'https://www.youtube.com/channel/UC2Xp5JeeO9sP6bhc-9yD1xA' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f4d5eb37-b9aa-43a6-88a4-3c6da990799e.png', link: 'https://www.instagram.com/stephanie.stalvey.artist?igsh=MTM1dGc1ZWswcTF1NQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b6b858e0-4ff3-4ec6-8b0d-a2c010ed39bc.png', link: 'https://www.instagram.com/stephanie.stalvey.artist?igsh=MTM1dGc1ZWswcTF1NQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/99e227fd-9f77-4088-958b-cd64fc98a6d5.jpeg', link: 'https://www.instagram.com/_bigonionhead?igsh=MWZyY25kMnB1bWIzeA==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0ef9b3e9-cf90-4d3a-82fd-cfd403e46e3b.jpeg', link: 'https://www.instagram.com/colleenen?igsh=MTEydmIzc215a24xaQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ef2c7399-957c-4aa0-ac2a-87c996531a19.jpeg', link: 'https://www.instagram.com/itsemimii?igsh=MTR2ODVlOHFiOTc0dQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/96cb37e0-8591-4c5c-98ec-ccb4a29fb457.png', link: 'https://www.instagram.com/stephanie.stalvey.artist?igsh=MTM1dGc1ZWswcTF1NQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/37bf4485-bf7f-4abb-84d6-66e600c943df.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/65d3410e-fd92-47e1-b6ff-06e54372ef4b.png', link: 'https://www.instagram.com/swagvoid?igsh=NHZsenp2dTltNXlq' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d7bee820-28c5-44d1-9545-14c8533aba52.jpeg', link: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/48d18798-a61e-41cf-8a15-8afef6ab9154.png', link: 'https://www.instagram.com/swagvoid?igsh=NHZsenp2dTltNXlq' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ee7f45d3-b4a8-40a7-8467-c51f8c4a8683.png', link: 'https://www.instagram.com/beeillustrates?igsh=MTYwd3RxcXp3M2FsNQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3bd12aa8-6ffc-4f59-b37e-4e14ae1449c6.png', link: 'https://www.instagram.com/stephanie.stalvey.artist?igsh=MTM1dGc1ZWswcTF1NQ==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fdb27165-e9fe-4c4b-a90f-f3d43d463ac8.png', link: 'https://www.instagram.com/campdopamine?igsh=YzdzaDBmYjdybnN4' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/aad67d1e-3ffe-4516-bbcc-6a2feb4722e6.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/63744d4f-49f1-4a95-9eab-77b765df2b43.jpeg', link: 'https://www.instagram.com/gardenfullofslugs?igsh=MW1reWRtdmFlajExbA==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d4a018f0-aed9-4fc8-a37a-0aa28d0eee0e.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ff21e3ea-f4af-45c0-9b6d-a298d33c705d.png', link: 'https://www.instagram.com/brenna_quinlan?igsh=cTNqZHd5Y2Z4bXBl' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3f51e934-27e7-4c06-a7d5-fa804a74e0f3.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ee3be81b-d909-4f59-b9a6-be2cda87253c.png', link: 'https://www.instagram.com/basil_mage?igsh=MWJiZzV2aXB1emlmZg==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2f2f2c79-6130-4336-b6e8-bce0edb4e7cc.png', link: 'https://www.instagram.com/liberaljane?igsh=YjYxd2trczFkMGJk' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/142a1573-8172-4280-a6a5-03ad032f8798.png', link: 'https://www.instagram.com/livinglunacreations?igsh=YnQzeGZvZWprNmNt' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9ba02b16-2b3c-46ef-95f8-1718d9b4d640.png', link: 'https://www.instagram.com/oatmilklady?igsh=ajlvcjl5ZHc5ODgw' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/bd4ebe27-95bc-4a1c-8938-8a07523d7009.png', link: 'https://www.instagram.com/yaeljamina?igsh=MW8zbWY0cnYzaTM1cw==' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7c28ed68-a30f-4b9e-88b6-34e71a85e8fc.jpeg', link: '' }
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Art
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Both physical pieces and digital pieces, from a wide array of different artists. Some are explicitly direct for the subject, and some may take a bit of reflection. Human creation is our greatest form of connection. From handprints to graffiti, it all says the same thing- "I was here, I will be here, I am here still."
            </p>
          </div>

          <ArtGallerySection title="Physical" items={physical} />
          <ArtGallerySection title="Digital" items={digital} />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('ArtApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArtApp />);