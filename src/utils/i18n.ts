import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        howWeWork: "How We Work",
        Partners: "Partners",
        Pricing: "Pricing",
        About: "About",
        ContactUs: "Contact Us",
      },
      welcomeMsg: {
        bigTitle: "stop driving",
        tinyTitle: "in circles",
        description: "Find your parking now.",
      },
      features: {
        firstFeature: {
          title: "Easy Way To Park",
          description: "Picky takes the stress out of parking",
        },
        secFeature: {
          title: "Find Parking Around You",
          description:
            "Picky providing real-time information on available parking spaces",
        },
        thirdFeature: {
          title: "Sharing Parkings",
          description: "Choose Between A Lot Of available Parkings",
        },
        fourthFeature: {
          title: "Explore Your Next Park",
          description:
            " guiding you to the closest and most convenient spots effortlessly",
        },
        fifthFeature: {
          title: "User Friendly Interface",
          description:
            " The app's user-friendly interface ensures a smooth experience",
        },
      },
      findingPark: {
        firstTyping: "How Is The Traffic Today",
        secTyping: "Finding Your Parking Now...",
      },
      workflow: "Our Workflow",
      pricing: {
        title: "Pricing",
        first: {
          title: "Starter",
          price: "20ILS",
        },
        sec: {
          title: "Traveler",
          price: "40ILS",
          recommended: "recommended",
        },
        third: {
          title: "business",
          price: "80ILS",
        },
      },
      ourTeam: {
        title: "Meet Our Team",
        noam: {
          name: "Noam Cohen",
          role: "Founder & CEO",
        },
        nitai: {
          name: "Nitai Daud",
          role: "Software Developer",
        },
        omer: {
          name: "Omer Levin",
          role: "Product Leader",
        },
      },
    },
  },
  he: {
    translation: {
      navbar: {
        howWeWork: "איך אנחנו עובדים",
        Partners: "שותפים",
        Pricing: "חבילות",
        About: "אודות",
        ContactUs: "צור קשר",
      },
      welcomeMsg: {
        bigTitle: "תפסיקו לנסוע",
        tinyTitle: "במעגלים",
        description: "מצאו את החניה שלכם עכשיו.",
      },
      features: {
        firstFeature: {
          title: "דרך קלה לחנות",
          description: "פיקי מורידה את הלחץ מחיפוש חניה",
        },
        secFeature: {
          title: "מצא חניות בסביבתך",
          description: "פיקי מספקת מידע בזמן אמת על חניות זמינות במרחב",
        },
        thirdFeature: {
          title: "חניה שיתופית",
          description: "בחר חניה ממגוון חניות זמינות",
        },
        fourthFeature: {
          title: "תאם את החניה הבאה שלך",
          description: "מוביל אותך לחניה הקרובה והנוחה ביותר ללא מאמץ",
        },
        fifthFeature: {
          title: "ממשק משתמש ידידותי",
          description: "ממשק האפלקציה חלק וידידותי למשתמש",
        },
      },
      findingPark: {
        firstTyping: "איך התנועה היום?",
        secTyping: "מחפש את החניה הבאה שלך...",
      },
      workflow: "הדרך לחניה הבאה שלך!",
      pricing: {
        title: "החבילות שלנו:",
        first: {
          title: "מעפנים",
          price: "20 שקל",
        },
        sec: {
          title: "בינוניים",
          price: "40 שקל",
          recommended: "המומלץ שלנו",
        },
        third: {
          title: "מביני עניין",
          price: "80 שקל",
        },
      },
      ourTeam: {
        title: "הצוות של פיקי:",
        noam: {
          name: "נועם כהן",
          role: "מייסד ומנכל",
        },
        nitai: {
          name: "ניתאי דאוד",
          role: "מפתח תוכנה",
        },
        omer: {
          name: "עומר לוין",
          role: "מנהלת מוצר",
        },
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
