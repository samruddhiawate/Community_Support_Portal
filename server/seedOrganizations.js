const mongoose = require("mongoose");
const Organization = require("./models/Organization");

require("dotenv").config();

// Real organizations only. website is set only when an official URL exists.
const organizations = [
  // ---------- Kolhapur ----------
  {
    name: "Helpers of the Handicapped, Kolhapur",
    district: "Kolhapur",
    helpType: "Disability Support",
    address:
      "233/6 E, Atmaram Apartments, Gen. Thorat Marg, Opp. Hind Nagar Society, Tarabai Park, Kolhapur – 416003, Maharashtra",
    contact: "+91 231 268 0026 / +91 814 975 7549",
    description:
      "Provides rehabilitation, education, vocational training and support services for persons with disabilities.",
    website: "https://www.hohk.org.in/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Sukhava Vrudhashram and Care Center",
    district: "Kolhapur",
    helpType: "Old Age Home",
    address:
      "1036/13, Amarvikas Colony, Navin Washie Naka, Radhanagari Road, Kolhapur – 416011, Maharashtra",
    contact: "+91 88790 93949 / +91 99603 33954",
    description:
      "Old age home providing nursing care, medical support and residential facilities for senior citizens.",
    website: "https://www.sukhavavrudhashramandcarecenter.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Sawali Care Centre",
    district: "Kolhapur",
    helpType: "Mental Health / Rehabilitation",
    address:
      "Plot No. 51/2, Wadipir, Kolhapur–Radhanagari Road, Opposite Hotel Tandoor Corner, Tal. Karveer, Dist. Kolhapur – 416011, Maharashtra",
    contact: "+91 95455 19951",
    description:
      "Rehabilitation and care centre for people with physical and psychological conditions including paralysis, Alzheimer’s, schizophrenia and age-related illnesses.",
    website: "https://sawalicare.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Aadhar Vruddhashram (Manmandir Trust)",
    district: "Kolhapur",
    helpType: "Old Age Home",
    address:
      "Aadhar Vruddhashram Center, Uchgaon, Tal. Karveer, Dist. Kolhapur, Maharashtra",
    contact: "+91 97643 98999",
    description:
      "Free old age home for abandoned and helpless senior citizens providing shelter, meals, medical treatment and emotional support.",
    website: "https://www.manmandirtrust.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  // ---------- Sangli ----------
  {
    name: "Vrudh Sevaashram Sangli",
    district: "Sangli",
    helpType: "Old Age Home",
    address:
      "Near Sharada Housing Society, Laxminagar, Kupwad, Sangli, Maharashtra - 416416",
    contact: "0233-2303784",
    description:
      "Provides shelter, nutritious meals, health support and companionship for senior citizens.",
    website: "https://vrudhasevashram.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Sangli Mission Society",
    district: "Sangli",
    helpType: "Disability Support",
    address:
      "Sant Thoma Bhavan, Ramanmala, PB No. 306, Kolhapur – 416003, Maharashtra (serving Sangli district)",
    contact: "+91 94206 78618",
    description:
      "Works for empowerment of persons with disabilities, rehabilitation, women’s support and care for aged and abandoned people in Sangli and nearby districts.",
    website: "https://sanglimissionsociety.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Sangli Mission Society – ASARA / Swanthan Bhavan",
    district: "Sangli",
    helpType: "Mental Health / Rehabilitation",
    address:
      "Swanthan Bhavan, Miraj, Sangli District, Maharashtra",
    contact: "+91 94206 78618",
    description:
      "Care centre under Sangli Mission Society for abandoned persons with mental illness, providing shelter and support.",
    website: "https://sanglimissionsociety.org/portfolio-item/asara/",
    source: "Official Website",
    lastVerified: new Date()
  },

  // ---------- Pune ----------
  {
    name: "Pune Old Age Home",
    district: "Pune",
    helpType: "Old Age Home",
    address:
      "Undri Marg, Opp. Precision Hospital, Near Undri City Center Mall, Bellagio, Undri, Pune, Maharashtra - 411060",
    contact: "+91 9881288100 / +91 9119596328",
    description:
      "Provides residential care and support for senior citizens.",
    website: "https://www.puneoldagehome.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Kinara Vruddha & Matimand Seva Trust",
    district: "Pune",
    helpType: "Homeless Support",
    address:
      "Ahirwade, Kamshet, Pune District, Maharashtra",
    contact: "+91 93733 01655 / +91 74110 73012",
    description:
      "Provides free shelter, food, clothing, medical care and rehabilitation for destitute, abandoned elderly and vulnerable people; also works on rescue and family reunification.",
    website: "https://www.kinara.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Maher Ashram",
    district: "Pune",
    helpType: "Women & Children Shelter",
    address:
      "Survey No. 1295, Vadhu Budruk, Koregaon Bhima, Taluka Shirur, Dist. Pune – 412216, Maharashtra",
    contact: "+91 90110 86134 / +91 90110 86131",
    description:
      "Safe homes and support for destitute women and children through shelter, education, healthcare and vocational training.",
    website: "https://maherashram.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Matruseva Sevabhavi Sanstha",
    district: "Pune",
    helpType: "Old Age Home",
    address:
      "Near Pandharkar Complex, Panchatara Nagar, Ganga Nagar, Akurdi, Pimpri-Chinchwad, Pune – 411033, Maharashtra",
    contact: "+91 97636 97434",
    description:
      "Charitable trust providing residential healthcare and emotional support for elderly, bedridden and disabled individuals.",
    website: "https://matrusevasevabhavisanstha.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "St Crispin's Home",
    district: "Pune",
    helpType: "Women & Children Shelter",
    address:
      "Erandawane, Karve Road, Pune – 411004, Maharashtra",
    contact: "info@stcrispinshomepune.org",
    description:
      "Residential child care facility providing shelter, education and vocational training for orphaned and marginalized girls.",
    website: "https://stcrispinshomepune.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  // ---------- Satara ----------
  {
    name: "Adhar – Satara Residential Complex",
    district: "Satara",
    helpType: "Disability Support",
    address:
      "Gat No. 922, Village Karanjoshi, Harpalwadi, Nagthane Naka, Tal. Karad, Dist. Satara, Maharashtra",
    contact: "+91 99873 22050",
    description:
      "Lifelong residential care facility for intellectually disabled adults, with dormitories, medical unit, vocational training and recreation.",
    website: "https://adhar.org/satara/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Samata Shikshan Prasarak Mandal",
    district: "Satara",
    helpType: "Disability Support",
    address:
      "21 Malhar Peth, Satara – 415002, Maharashtra",
    contact: "+91 98506 11600 / +91 98901 52111",
    description:
      "NGO working for children, youth and adults with physical, intellectual, speech, hearing and developmental disabilities.",
    website: "https://samtango.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "AWARD Organisation Satara",
    district: "Satara",
    helpType: "Women & Children Shelter",
    address:
      "Sanket Complex, 1st Floor, Near Gite Building, Pantacha Got, Satara – 415001, Maharashtra",
    contact: "02162-233526",
    description:
      "Action for Women And Rural Development – works on women empowerment, rural livelihoods and community support across Satara district.",
    website: "https://awardsatara.org/",
    source: "Official Website",
    lastVerified: new Date()
  },

  // ---------- Nashik ----------
  {
    name: "Adhar – Nashik Campus",
    district: "Nashik",
    helpType: "Disability Support",
    address:
      "Gat No. 286, Village Pimpalgaon (Dukra), Ghoti–Sinnar Road, Sakur Phata, Behind Indian Oil Petrol Pump, Tal. Igatpuri, Dist. Nashik – 422502, Maharashtra",
    contact: "+91 74474 76047",
    description:
      "Lifelong residential care campus for intellectually disabled adults with medical unit, vocational training and recreational facilities.",
    website: "https://adhar.org/nashik/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Gharkul Parivar Sanstha",
    district: "Nashik",
    helpType: "Mental Health / Rehabilitation",
    address:
      "Pimpalgaon Bahula, Nashik – 422213, Maharashtra",
    contact: "+91 96990 91233 / +91 98605 52324",
    description:
      "Home exclusively for mentally challenged women providing safe shelter, therapies and skill development.",
    website: "https://gharkulparivar.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Vatsalya Vruddhashram",
    district: "Nashik",
    helpType: "Old Age Home",
    address:
      "Damodar Nagar, Hirawadi Road, Opposite Dave Farsan, Panchavati, Nashik – 422003, Maharashtra",
    contact: "+91 73873 86333 / +91 70307 09090",
    description:
      "Old age home providing residential care and support for senior citizens in Nashik.",
    website: "https://vatsalyavruddhashram.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Sahara Care Centre",
    district: "Nashik",
    helpType: "Old Age Home",
    address:
      "Heramb Bungalow, Gangapur Canal Road, Near Sunanda Dairy, Patil Vasti, Chandshi Village, Nashik – 422013, Maharashtra",
    contact: "+91 94204 32550 / +91 93704 32550",
    description:
      "Elder care centre offering residential support and post-operative care for senior citizens.",
    website: "https://www.saharacarecenter.org/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Radha Keshav Elders Home",
    district: "Nashik",
    helpType: "Old Age Home",
    address:
      "14–17, Anand Darshan, Near Octroi Check Naka No. 6, Lam Road, Deolali – 422101, Nashik, Maharashtra",
    contact: "+91 86683 86272 / +91 98200 74858",
    description:
      "Non-profit home for elder women providing a safe environment with physical and emotional support.",
    website: "https://www.radhakeshaveldershome.com/",
    source: "Official Website",
    lastVerified: new Date()
  },
  {
    name: "Nirmala Home For The Aged",
    district: "Nashik",
    helpType: "Old Age Home",
    address:
      "H.P.T. College, P.O. D’Souza Colony, College Road, Nashik – 422005, Maharashtra",
    contact: "+91 72496 73190",
    description:
      "Charitable home supporting elders to live an active, healthy and dignified life.",
    website: "https://www.nirmalahomefortheagednashik.com/",
    source: "Official Website",
    lastVerified: new Date()
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Organization.deleteMany();

    await Organization.insertMany(organizations);

    console.log(`Organizations inserted successfully: ${organizations.length}`);

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

seedDatabase();
