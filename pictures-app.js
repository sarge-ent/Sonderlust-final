function PictureGallerySection({ title, items, description }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = items.map(item => item.image);
    const descriptions = items.map(item => item.description);
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
        <h3 className="text-2xl font-bold mb-2 text-shadow-retro text-[var(--primary-color)]">
          {title}
        </h3>
        {description && (
          <p className="mb-4 text-lg leading-relaxed">{description}</p>
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
        
        {(descriptions[currentIndex] || links[currentIndex]) && (
          <div className="bg-[#FFFAF0] p-4 rounded border-2 border-[var(--border-color)]">
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
                  Source
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('PictureGallerySection error:', error);
    return null;
  }
}

function PicturesApp() {
  try {
    const pictures = [
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/496f7701-3c9c-493e-9468-246f79392b53.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830461/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0ab734c7-c486-4633-9ffb-7b082a30a74b.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830455/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ff2ece3d-6e3b-4b20-83fe-58e22c7b7f0f.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830453/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d9c2f8dc-eb75-4fc0-a871-f5870da61de5.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830456/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/deedd4bc-6d60-46b8-aa57-4932c6271235.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830457/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6ddb3da7-bd06-44a2-beef-6cba5640c77b.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830463/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1dbade91-1d17-475f-a2fb-82486db8ef54.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830462/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/922c6a26-e738-4e63-b736-e2f101a1f23d.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830464/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fd706f1b-fea2-4269-a029-bff8b174bb15.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830468/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/61ff8c4a-38a1-4876-a284-2badda584dfe.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830470/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/350d4ac6-ae66-4bc4-a0ec-4030b6560c84.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830465/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cf228e40-acce-4e5e-9ac7-cf7b49681788.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830476/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ca0d920b-474d-40ea-b5d8-1a179c95bc4c.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830474/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cd79a45f-8dca-4df1-86d7-739d5e76afd3.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830478/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/aa642975-e8f4-437e-b351-6b52b1aea115.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830480/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/093d9a40-8c1b-480d-84cf-fd2b64694ccd.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830481/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4c5a8ce8-e81b-4b57-a6aa-c9f4fd401a50.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830486/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c47c8ff8-a45e-4dd8-98b2-384f15f22069.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830483/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f9cf5c6e-4721-414a-8db8-f79f81ebc5c6.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830485/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2b507e03-4346-484e-b355-44eb49fce358.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830487/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/74468622-fb62-4a59-8f2a-970776cae977.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830490/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1de9d065-75c8-4aa6-a4c1-33b43a9c2108.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830488/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/56296ee2-02e0-43bf-8144-df10f3db9719.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830491/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5716cb1e-7da9-4bb3-ac4a-b2a0ee20773f.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830498/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/8b719885-782b-473c-9df6-fd6a578a5843.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830496/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/a476e573-0cba-4d43-8c45-f9aae8d897de.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830492/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0a51c812-98ed-4749-9fe3-0c4141bfa61f.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830505/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ad75c646-f50f-4b5b-90d4-e2fa8b0c8ae7.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830504/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0b391fd3-4931-40eb-b509-86623907b264.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830518/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/bc7d68b3-6b85-422f-bca7-e098f790b86e.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830521/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9a6d5673-c785-4bf1-b30d-1dc646e27c47.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830516/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/460a5884-b4db-4892-90a4-98ea9e3edc0f.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365833809/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ab07b7f4-571b-4b67-8f43-405847ed99d5.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830519/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d0a65f27-63c0-4c2d-a304-d9e32a496eed.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830522/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9ca9a583-1cce-44fd-9bbb-492105145152.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830524/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4766c3d1-d5e5-469a-9c77-8ffcd6e10a4b.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830523/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7b84338b-102b-4db7-b856-b687a0126ab9.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830528/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7ecf656f-8bee-4a8f-a205-3cd9fae22c3c.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830532/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/32d6d2c1-33ac-4c3a-999f-3575a613a349.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830530/' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d699b45b-569e-406b-ae9c-adfefe5e9003.jpeg', description: '', link: 'https://www.pinterest.com/pin/476255729365830540/' }
    ];

    const personalPhotos = [
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fde9a0c3-f62b-46f2-9f2d-c12f52e9f145.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6c89173d-5a4d-4489-aaf5-664e52652aee.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/02919fa4-40e1-4cdb-bac0-d930171591e0.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/37b460cf-98d3-4c84-ba81-95b442e5a5df.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d0b17902-34d6-417d-ada8-91441242e7ef.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/bc376f3c-7f21-4b37-9edc-24c76fc92664.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/88a956c2-98a5-4840-8b3e-bc9f47297ea3.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cc879185-5e50-4988-b61d-bac50eff0973.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4b3f45f0-e6e0-41ac-b314-53e5600f00ef.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/899fa69e-e31e-4dec-b72a-07bff0ad0f2a.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2a04b905-b990-4e16-ab67-6596ddc9244e.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/53f5548e-a484-499f-a97c-5ce8e36a098a.png', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/2d935dc4-dfc9-43cf-a87c-2eff58cc6abc.png', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/51c0977c-757e-4ef4-bee2-24a06d7312f4.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/7e812e6f-0373-44be-a806-9f04e7dab45e.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/6a61bc7e-055d-4f3b-aefe-c05f941f6dde.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/cfb526b9-c0ac-46bf-9965-acec8e40532f.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9cdb8b01-8e84-4953-a83b-402373826271.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ca6e978e-a5e9-4d26-ba6b-e4bc897aa16e.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/373e3178-9df2-41a2-90f5-7cbacb8cd8fc.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3bec4df1-7729-4e33-b61f-a7169f427ed4.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d93979e5-2855-4f3e-b011-2af39b236cc5.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/1ffc1157-951b-4e9c-8141-8ada6e6b1202.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/72d26651-5bb7-4379-b687-61197f3a3a3a.webp', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/bc574829-9ac8-4c6a-97e0-7a4ae39c416d.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d360090a-563a-4c1b-9f1c-6f7a5e342f70.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/e23649ae-eb60-4791-a7c7-5a9c5bec5726.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fbe95ad9-e11f-4650-a87a-6898ca7c6b2d.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/3542c23a-6cdb-4e54-8ff5-7a8359143fc2.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/c885bc31-0e42-4757-9822-131484ac27ed.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/43749f83-6478-4836-8f7b-4611dbd9b823.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fad6e609-2d30-454a-a52c-23e3b1f424ee.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/ca7599db-fb4a-46b3-8d0e-41088853a70f.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/e3a20175-8278-4c8c-b4c3-282ccde10058.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f50f01f1-0a70-45bd-a8e9-f557ae20c875.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b8ad66f4-0ff0-4c61-b1cf-006cbcb397c3.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/a55be09e-0a95-4d04-87bb-3fccadcbbb17.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/5d22a153-e264-47b8-b247-43c259d90b62.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/05dd5db9-5ee1-476b-99a8-5b088f849125.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f12c9f71-47ed-4ba6-aa97-cf06fbe6e443.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/f5537675-302f-42d1-b014-08b85cc415eb.png', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/e4604e1a-4f9b-4182-9f38-c1d84e0e0c4a.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/d5e1633a-116a-4f85-9e55-010882c135cb.webp', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/b15fdc7a-37dd-438e-a620-9a663b614b55.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/9752c124-569f-4379-b953-e69b828eb0b6.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/0d096eff-fc30-4051-b50f-6d4aa2eef951.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/dcac61bc-193f-4954-9983-856f93b386ca.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/fbc71a45-427e-4aab-80b2-7803ef245bf5.jpeg', description: '' },
      { image: 'https://app.trickle.so/storage/public/images/usr_170d739758000001/4d7dd557-3085-435a-a575-9231de5d6f63.jpeg', description: '' }
    ];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <Navigation />
          
          <div className="retro-panel p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-shadow-retro text-[var(--primary-color)]">
              Pictures
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Pairings of photography, a few creative aspects, and my own personal photos. These are intended to serve as glimpses into a variety of other lives.
            </p>
          </div>

          <PictureGallerySection title="Pictures" items={pictures} />
          <PictureGallerySection 
            title="Personal Photos" 
            items={personalPhotos}
            description="Personal photographs from my little youth to now, featuring a great many people I have loved, known, and lost."
          />
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('PicturesApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PicturesApp />);