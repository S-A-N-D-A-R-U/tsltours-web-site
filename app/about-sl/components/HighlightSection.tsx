import React from 'react';

const HighlightCard = ({ title, description, images }: {
  title: string;
  description: string;
  images: { src: string; alt: string; }[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg w-full h-48 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

const HighlightSection = () => {
  const highlights = [
    {
      title: "A Treasure Trove of Natural Splendor",
      description: "Sri Lanka is a paradise for nature lovers and adventure seekers, offering unparalleled biodiversity and geographical diversity. Its lush green fields and rich ecosystems thrive in rainforests like the UNESCO-protected Sinharaja, while iconic wildlife sanctuaries such as Yala, Wilpattu, and Udawalawe provide thrilling encounters with majestic elephants, leopards, and countless bird species. From the misty peaks of Knuckles and Pidurutalagala to the serene plains of Horton, Sri Lanka's landscapes are truly mesmerizing. Golden beaches like Negombo, Unawatuna, Nilaveli, and Pasikuda frame the island with idyllic spots for relaxation and water sports. The vibrant flora of botanical gardens such as Peradeniya and Hakgala, along with natural attractions like hot springs, fountains, and spectacular waterfalls including Dunhinda, Diyaluma, and Bopath Ella, make Sri Lanka an ecological treasure trove.",
      images: [
        {
          src: "image4.jpg",
          alt: "Knuckles"
        },
        {
          src: "/image2.jpg",
          alt: "Diyaluma Falls"
        },
        {
          src: "/popular6.jpg",
          alt: "Yala National Park"
        },
        {
          src: "/image3.jpg",
          alt: "Nilaveli"
        },
      ]
    },
    {
      title: "A Legacy of Ingenuity and Spirituality",
      description: "Sri Lanka's rich history comes alive through its architectural and engineering marvels. The iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site, stands as a testament to ancient ingenuity with its stunning frescoes and intricate design. Sacred stupas like Ruwanwelisaya and Abhayagiriya showcase the spiritual devotion and craftsmanship of the Sinhalese people. The country's advanced hydro-engineering feats, such as Kalawawa, Parakrama Samudraya, and Yoda Ela, reflect centuries of self-sufficiency and agricultural innovation. Intricate wood and stone carvings at Ambekke and Gadaladeniya temples highlight the artistry of the past, while sacred landmarks like the Temple of the Tooth Relic, Sri Maha Bodhiya, and Dambulla Cave Temple continue to inspire pilgrims and travelers from around the world.",
      images: [
        {
          src: "/destination/kandy.jpg",
          alt: "Temple of the Tooth Relic"
        },
        {
          src: "/destination/sigiriya.jpg",
          alt: "Sigiriya Rock Fortress"
        },
        {
          src: "/destination/dambulla.jpeg",
          alt: "Dambulla Cave Temple "
        },
        {
          src: "/destination/anuradhapura.jpg",
          alt: "Ruwanwelisaya"
        },
      ]
    },
    {
      title: "A Vibrant Tapestry of Culture",
      description: "Sri Lanka is a harmonious blend of ethnicities, where Sinhala, Tamil, and Muslim communities coexist, enriching the island’s vibrant cultural fabric. While Sinhala serves as the primary language, Tamil and English are also widely spoken, showcasing the island’s inclusivity. Visitors can immerse themselves in the grandeur of Kandyan customs, the distinct artistry of the Low Country, and the rhythmic charm of Sabaragamuwa’s heritage, each contributing a unique hue to Sri Lanka’s cultural mosaic.",
      images: [
        {
          src: "/destination/kandy/2.jpg",
          alt: "Traditional Kandyan Dance"
        },
        {
          src: "https://erp.lakpura.com/images/LK94008887-05-E.JPG",
          alt: "Sri Lankan Cuisine"
        },
        {
          src: "/image5.jpg",
          alt: "Traditional Kandyan Dance"
        },
        {
          src: "image7.jpg",
          alt: "Sri Lankan Cuisine"
        }
      ]
    },
    {
      title: "A Beacon of Trade and Global Connection",
      description: "Historically known as Thambapanni, Sri Lanka has been a pivotal trade hub, linking East and West through ancient ports such as Trincomalee and Galle. Today, it continues to thrive on the global stage as an exporter of world-famous Ceylon tea, rubber, coconuts, spices like cinnamon, clove, and pepper, as well as exquisite gems, including sapphires and rubies.",
      images: [
        {
          src: "/destination/trinco.jpg",
          alt: "Traditional Kandyan Dance"
        },
        {
          src: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d",
          alt: "Sri Lankan Cuisine"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Sri Lanka</h2>
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default HighlightSection;