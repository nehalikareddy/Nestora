const sampleListings = [
  
  // Category: Trending
  {
    "title": "Modern L.A. Hillside Villa",
    "description": "Stunning architectural home with panoramic views of the city. Features a home theater and smart-home technology.",
    "price": 5500,
    "location": "Los Angeles",
    "country": "United States",
    "category": "Trending",
    "geometry": { "type": "Point", "coordinates": [-118.37, 34.09] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Minimalist Tokyo Condo",
    "description": "Sleek, modern condo in the heart of Shibuya. A minute's walk from the famous crossing.",
    "price": 3000,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Trending",
    "geometry": { "type": "Point", "coordinates": [139.70, 35.66] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
    }
  },
  {
    "title": "Eco-Friendly Bali Hut",
    "description": "Unique bamboo hut in the middle of the rice paddies. Featured in design magazines.",
    "price": 1500,
    "location": "Canggu",
    "country": "Indonesia",
    "category": "Trending",
    "geometry": { "type": "Point", "coordinates": [115.14, -8.65] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622015663319-e97e697503ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1077"
    }
  },
  {
    "title": "Rooftop Garden Loft",
    "description": "Urban oasis in Berlin with a private rooftop garden. Very popular for photo shoots.",
    "price": 2800,
    "location": "Berlin",
    "country": "Germany",
    "category": "Trending",
    "geometry": { "type": "Point", "coordinates": [13.40, 52.52] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=725"
    }
  },

  // Category: Rooms
  {
    "title": "Cozy Private Room in Brooklyn",
    "description": "A bright, sunny room in a shared apartment with local artists in Bushwick.",
    "price": 800,
    "location": "New York",
    "country": "United States",
    "category": "Rooms",
    "geometry": { "type": "Point", "coordinates": [-73.95, 40.70] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Sunny Room near Louvre",
    "description": "Classic Parisian room in a Haussmann building. Perfect for a solo traveler.",
    "price": 1200,
    "location": "Paris",
    "country": "France",
    "category": "Rooms",
    "geometry": { "type": "Point", "coordinates": [2.34, 48.86] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Quiet Study Room in London",
    "description": "A simple, clean room in Bloomsbury. Ideal for students or researchers near UCL.",
    "price": 900,
    "location": "London",
    "country": "United Kingdom",
    "category": "Rooms",
    "geometry": { "type": "Point", "coordinates": [-0.13, 51.52] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Beachside Room in Barcelona",
    "description": "Private room in an apartment just steps from Barceloneta beach. Shared kitchen.",
    "price": 1000,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Rooms",
    "geometry": { "type": "Point", "coordinates": [2.19, 41.38] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Traditional Tatami Room",
    "description": "Experience authentic Japanese living in a traditional tatami mat room in Kyoto.",
    "price": 700,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Rooms",
    "geometry": { "type": "Point", "coordinates": [135.76, 35.00] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },

  // Category: Iconic cities
  {
    "title": "Apartment Overlooking Colosseum",
    "description": "Wake up to a direct view of the Colosseum from your balcony. Unforgettable.",
    "price": 3200,
    "location": "Rome",
    "country": "Italy",
    "category": "Iconic cities",
    "geometry": { "type": "Point", "coordinates": [12.49, 41.89] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Prague Old Town Square Flat",
    "description": "Stunning apartment right on the Old Town Square, with views of the astronomical clock.",
    "price": 2600,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "Iconic cities",
    "geometry": { "type": "Point", "coordinates": [14.42, 50.08] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1619082791183-1888233d6569?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663"
    }
  },
  {
    "title": "Canal House, Amsterdam",
    "description": "Historic, narrow canal house on the Herengracht, full of charm and character.",
    "price": 3100,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Iconic cities",
    "geometry": { "type": "Point", "coordinates": [4.89, 52.37] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1537289865689-48454e64980b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    }
  },
  {
    "title": "Sydney Opera House View Apt",
    "description": "Luxury apartment in 'The Rocks' with direct, framed views of the Opera House and Harbour Bridge.",
    "price": 4500,
    "location": "Sydney",
    "country": "Australia",
    "category": "Iconic cities",
    "geometry": { "type": "Point", "coordinates": [151.21, -33.86] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },

  // Category: Mountains
  {
    "title": "Swiss Alps Chalet",
    "description": "Classic ski-in, ski-out chalet in Zermatt with views of the Matterhorn.",
    "price": 6000,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": { "type": "Point", "coordinates": [7.74, 46.02] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1717193342628-fb256bbff4b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Rocky Mountain Cabin",
    "description": "Secluded log cabin near Aspen, perfect for hiking and getting away from it all.",
    "price": 4200,
    "location": "Aspen",
    "country": "United States",
    "category": "Mountains",
    "geometry": { "type": "Point", "coordinates": [-106.82, 39.19] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1606050716461-78add0ad1785?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    }
  },
  {
    "title": "Andean Mountain Lodge",
    "description": "Lodge in the Sacred Valley, offering views of the Andes foothills.",
    "price": 2500,
    "location": "Cusco",
    "country": "Peru",
    "category": "Mountains",
    "geometry": { "type": "Point", "coordinates": [-71.97, -13.53] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1682430547023-afc1092a7b2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Himalayan View Guesthouse",
    "description": "Peaceful retreat in Pokhara with stunning views of the Annapurna range.",
    "price": 900,
    "location": "Pokhara",
    "country": "Nepal",
    "category": "Mountains",
    "geometry": { "type": "Point", "coordinates": [83.96, 28.21] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1743188913205-c2e42e666856?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Banff National Park Retreat",
    "description": "A-frame log cabin surrounded by pine trees in Banff National Park.",
    "price": 3300,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": { "type": "Point", "coordinates": [-115.57, 51.17] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1737451881483-eb355fa60e82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },

  // Category: Castles
  {
    "title": "Scottish Highlands Castle",
    "description": "Live like royalty in a private wing of a 14th-century Scottish castle.",
    "price": 7000,
    "location": "Highlands",
    "country": "Scotland",
    "category": "Castles",
    "geometry": { "type": "Point", "coordinates": [-4.22, 57.47] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1515356619894-b89131037e3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    }
  },
  {
    "title": "Loire Valley Château",
    "description": "Elegant French château with its own moat and a small winery.",
    "price": 8500,
    "location": "Tours",
    "country": "France",
    "category": "Castles",
    "geometry": { "type": "Point", "coordinates": [0.68, 47.39] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1597941265658-46a50fb4efc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    }
  },
  {
    "title": "Irish Castle Tower",
    "description": "Stay in a restored medieval tower keep near Galway. A truly unique experience.",
    "price": 5000,
    "location": "Galway",
    "country": "Ireland",
    "category": "Castles",
    "geometry": { "type": "Point", "coordinates": [-9.05, 53.27] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1539584222411-a76a40e9e861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "German Fairytale Castle",
    "description": "Romantic castle overlooking the Rhine river, straight out of a fairytale.",
    "price": 6200,
    "location": "Bacharach",
    "country": "Germany",
    "category": "Castles",
    "geometry": { "type": "Point", "coordinates": [7.77, 50.05] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    }
  },

  // Category: Camping
  {
    "title": "Luxury Glamping Tent, Moab",
    "description": "Spacious tent near Arches National Park with a king bed and private bathroom.",
    "price": 1200,
    "location": "Moab",
    "country": "United States",
    "category": "Camping",
    "geometry": { "type": "Point", "coordinates": [-109.55, 38.57] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Yurt in the Woods",
    "description": "A secluded, off-grid yurt experience in the forests of Oregon. Wood-fired stove.",
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "category": "Camping",
    "geometry": { "type": "Point", "coordinates": [-122.67, 45.52] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1631635589499-afd87d52bf64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
    }
  },
  {
    "title": "Sahara Desert Camp",
    "description": "Luxury Berber tent under the stars in Merzouga. Includes camel trek.",
    "price": 1500,
    "location": "Merzouga",
    "country": "Morocco",
    "category": "Camping",
    "geometry": { "type": "Point", "coordinates": [-4.00, 31.09] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Airstream by the Ocean",
    "description": "Vintage Airstream trailer parked on a cliff overlooking the ocean in Big Sur.",
    "price": 1300,
    "location": "Big Sur",
    "country": "United States",
    "category": "Camping",
    "geometry": { "type": "Point", "coordinates": [-121.80, 36.27] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
     
    }
  },

  // Category: Farms
  {
    "title": "Tuscan Farmhouse",
    "description": "Charming stone farmhouse surrounded by rolling hills and olive groves.",
    "price": 3400,
    "location": "Siena",
    "country": "Italy",
    "category": "Farms",
    "geometry": { "type": "Point", "coordinates": [11.33, 43.31] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1592212671488-700bb9a101e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
    }
  },
  {
    "title": "English Countryside Cottage",
    "description": "Stay on a working sheep farm in the Cotswolds. Fresh eggs for breakfast.",
    "price": 2100,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "Farms",
    "geometry": { "type": "Point", "coordinates": [-1.83, 51.78] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1601189992152-6ef7ebb531a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
    }
  },
  {
    "title": "Napa Valley Vineyard Stay",
    "description": "Small cottage located on a working vineyard. Complimentary wine tasting.",
    "price": 4800,
    "location": "Napa",
    "country": "United States",
    "category": "Farms",
    "geometry": { "type": "Point", "coordinates": [-122.30, 38.29] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=951"
    }
  },
  {
    "title": "Provence Lavender Farm",
    "description": "Charming stone house in the middle of fragrant lavender fields.",
    "price": 2900,
    "location": "Provence",
    "country": "France",
    "category": "Farms",
    "geometry": { "type": "Point", "coordinates": [5.48, 43.93] },
    "image": {
      "filename": "listingimage",
      "url": "https://plus.unsplash.com/premium_photo-1685133856025-c5b8383c92e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },

  // Category: Amazing pools
  {
    "title": "Infinity Pool Villa, Bali",
    "description": "Luxury villa in Ubud with a stunning two-tiered infinity pool overlooking the jungle.",
    "price": 3700,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Amazing pools",
    "geometry": { "type": "Point", "coordinates": [115.26, -8.50] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1438475358348-3b8fdf3b8c58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Santorini Caldera Villa",
    "description": "Iconic white villa in Oia with a private plunge pool overlooking the caldera.",
    "price": 5300,
    "location": "Oia",
    "country": "Greece",
    "category": "Amazing pools",
    "geometry": { "type": "Point", "coordinates": [25.37, 36.46] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1729606558539-373e3491c663?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Palm Springs Mid-Century",
    "description": "Classic mid-century modern home with an iconic, pristine pool.",
    "price": 4000,
    "location": "Palm Springs",
    "country": "United States",
    "category": "Amazing pools",
    "geometry": { "type": "Point", "coordinates": [-116.54, 33.83] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1692719630299-d7e5bcce2add?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
    }
  },
  {
    "title": "Costa Rica Jungle Oasis",
    "description": "Secluded villa with a natural-style pool and swim-up bar, surrounded by rainforest.",
    "price": 3100,
    "location": "Tamarindo",
    "country": "Costa Rica",
    "category": "Amazing pools",
    "geometry": { "type": "Point", "coordinates": [-85.84, 10.29] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1600538441454-db4e893d1938?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    }
  },

  // Category: Arctic
  {
    "title": "Finnish Glass Igloo",
    "description": "Sleep under the Northern Lights in a heated glass igloo in Lapland.",
    "price": 4700,
    "location": "Lapland",
    "country": "Finland",
    "category": "Arctic",
    "geometry": { "type": "Point", "coordinates": [25.75, 68.01] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1710170600419-9771180c5dc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=942"
    }
  },
  {
    "title": "Icelandic Geothermal Cabin",
    "description": "Modern cabin near Grindavík with a private hot tub fed by geothermal water.",
    "price": 3900,
    "location": "Grindavík",
    "country": "Iceland",
    "category": "Arctic",
    "geometry": { "type": "Point", "coordinates": [-22.43, 63.84] },
    "image": {
      "filename":"listingimage",
      "url": "https://images.unsplash.com/photo-1644808316109-8bc227e3526d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Norway Fjord-View House",
    "description": "Modern home in Tromsø with floor-to-ceiling windows overlooking a stunning fjord.",
    "price": 4100,
    "location": "Tromsø",
    "country": "Norway",
    "category": "Arctic",
    "geometry": { "type":"Point", "coordinates": [18.95, 69.64] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765"
    }
  },
  {
    "title": "Alaskan Winter Cabin",
    "description": "Cozy, remote cabin near Fairbanks, perfect for aurora viewing and solitude.",
    "price": 3000,
    "location": "Fairbanks",
    "country": "United States",
    "category": "Arctic",
    "geometry": { "type": "Point", "coordinates": [-147.71, 64.84] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1605378077148-6971225fae8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
    }
  },
  {
    "title": "Seaside Serenity Villa",
    "description": "Direct beach access with a private infinity pool overlooking the ocean.",
    "price": 25000,
    "location": "Goa",
    "country": "India",
    "category": "Beachfront",
    "geometry": { "type": "Point", "coordinates": [73.75, 15.50] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Malibu Ocean View",
    "description": "Stunning modern home with panoramic sunset views over the Pacific.",
    "price": 45000,
    "location": "Malibu",
    "country": "USA",
    "category": "Beachfront",
    "geometry": { "type": "Point", "coordinates": [-118.69, 34.03] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1561799461-445437ea576b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Bora Bora Overwater Bungalow",
    "description": "Sleep above the turquoise lagoon with your own private dock.",
    "price": 80000,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Beachfront",
    "geometry": { "type": "Point", "coordinates": [-151.74, -16.50] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1719262909733-926fa5a938e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Phuket Beach House",
    "description": "Family-friendly home just steps away from the sand.",
    "price": 18000,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Beachfront",
    "geometry": { "type": "Point", "coordinates": [98.29, 7.89] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1757467839090-b8ae70d7b364?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167"
    }
  },
  {
    "title": "Byron Bay Beachfront Studio",
    "description": "Chic studio perfect for surfers and sun-seekers.",
    "price": 15000,
    "location": "Byron Bay",
    "country": "Australia",
    "category": "Beachfront",
    "geometry": { "type": "Point", "coordinates": [153.61, -28.64] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1689737969303-a32ea2f78f0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Joshua Tree 'Stargazer' Tiny",
    "description": "Minimalist desert escape with a glass roof for stargazing.",
    "price": 12000,
    "location": "Joshua Tree",
    "country": "USA",
    "category": "Tiny homes",
    "geometry": { "type": "Point", "coordinates": [-116.31, 34.13] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1668015642451-a3bb11afb441?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032"
    }
  },
  {
    "title": "Catskills Tiny Cabin",
    "description": "A cozy and modern tiny home nestled in the woods.",
    "price": 9500,
    "location": "Catskills",
    "country": "USA",
    "category": "Tiny homes",
    "geometry": { "type": "Point", "coordinates": [-74.38, 42.15] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1649007591547-441825e049fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065"
    }
  },
  {
    "title": "Norwegian Fjord Tiny House",
    "description": "Eco-friendly home with breathtaking views of the fjords.",
    "price": 11000,
    "location": "Flåm",
    "country": "Norway",
    "category": "Tiny homes",
    "geometry": { "type": "Point", "coordinates": [7.11, 60.86] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1590725140246-20acdee442be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "New Zealand 'Shepherd's Hut'",
    "description": "Quaint and rustic tiny home with views of the Southern Alps.",
    "price": 8000,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Tiny homes",
    "geometry": { "type": "Point", "coordinates": [168.66, -45.03] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1624903041761-f31cf79f810c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  },
  {
    "title": "Oaxaca 'Casa Pequeña'",
    "description": "A small, colorful home built with sustainable materials.",
    "price": 6000,
    "location": "Oaxaca",
    "country": "Mexico",
    "category": "Tiny homes",
    "geometry": { "type": "Point", "coordinates": [-96.72, 17.07] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1632252300695-97c54a0db8e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  
  {
    "title": "Lake Como Villa",
    "description": "Elegant historic villa with a private dock on Lake Como.",
    "price": 75000,
    "location": "Lake Como",
    "country": "Italy",
    "category": "Lakefront",
    "geometry": { "type": "Point", "coordinates": [9.25, 45.98] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1702567919133-5c0b4db02cf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Lake Tahoe Retreat",
    "description": "Modern home with stunning lake views and a fireplace.",
    "price": 30000,
    "location": "Lake Tahoe",
    "country": "USA",
    "category": "Lakefront",
    "geometry": { "type": "Point", "coordinates": [-120.03, 39.09] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1568558100488-e5f38185a9d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
  }
  },
  {
    "title": "Udaipur Lake View Stay",
    "description": "Apartment overlooking Lake Pichola and the City Palace.",
    "price": 11000,
    "location": "Udaipur",
    "country": "India",
    "category": "Lakefront",
    "geometry": { "type": "Point", "coordinates": [73.68, 24.58] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1695956353120-54ce5e91632b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
    }
  },
  {
    "title": "Lake District Cottage",
    "description": "Charming English cottage on the shores of Windermere.",
    "price": 12500,
    "location": "Windermere",
    "country": "United Kingdom",
    "category": "Lakefront",
    "geometry": { "type": "Point", "coordinates": [-2.91, 54.37] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1559310589-2673bfe16970?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  },
  {
    "title": "Patagonia Lake House",
    "description": "Remote and beautiful house on Lago Argentino.",
    "price": 19000,
    "location": "El Calafate",
    "country": "Argentina",
    "category": "Lakefront",
    "geometry": { "type": "Point", "coordinates": [-72.26, -50.33] },
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    }
  }

];
module.exports = { data: sampleListings };


