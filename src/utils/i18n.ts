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
        download: "Available for iOS",
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
        pickyCoins: "Picky Coins",
        first: {
          title: "Starter",
          price: "20ILS",
          description: "Go find a job... 1 parking spot and then what?",
        },
        sec: {
          title: "Traveler",
          price: "40ILS",
          description: "Nice! 3 parking spots, you're arranged for now",
          recommended: "recommended",
        },
        third: {
          title: "business",
          price: "80ILS",
          description: "You're the real deal mate!",
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
      footer: {
        title: "Contact Us",
        location: "Zichron Yaakov, ISRAEL",
        descriptionFirst:
          "Website Is Under Construction, We Invite You To Download Our Application And Find Your Next Park.",
        descriptionSec:
          "We Would Happy To Be In Touch, You Can Contact Us For Help",
        privacyAndPolicy: "Privacy & Policy",
        termsOfUse: "Terms Of Use",
        poweredBy: " Powered By",
        nitaiDaud: "Nitai Daud",
        rights: "2024 Picky. All Rights Reserved",
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
        description: "מצאו את החנייה שלכם עכשיו.",
        download: "זמין להורדה",
      },
      features: {
        firstFeature: {
          title: "חנייה בקלות",
          description: "פיקי מורידה את הלחץ מחיפוש חנייה",
        },
        secFeature: {
          title: "מצא חניות בסביבתך",
          description: "פיקי מספקת מידע בזמן אמת על חניות זמינות במרחב",
        },
        thirdFeature: {
          title: "חניה שיתופית",
          description: "בחר ושמור חנייה ממגוון חניות זמינות",
        },
        fourthFeature: {
          title: "הכוונה לחניה הבאה שלך",
          description: "פיקי מובילה אותך לחנייה הקרובה והנוחה ביותר ללא מאמץ",
        },
        fifthFeature: {
          title: "ממשק משתמש ידידותי",
          description: "ממשק האפלקציה פשוט ונוח למשתמש",
        },
      },
      findingPark: {
        firstTyping: "איך התנועה היום?",
        secTyping: "מחפש את החנייה הבאה שלך...",
      },
      workflow: "הדרך לחנייה הבאה שלך!",
      pricing: {
        title: "החבילות שלנו:",
        pickyCoins: "מטבעות פיקי",
        first: {
          title: "חבילת בייסיק",
          price: "15 שקל",
          description: "סעו למצוא עבודה... חניה אחת ואח״כ מה?",
        },
        sec: {
          title: "חבילת נסיעות",
          price: "35 שקל",
          description: "מעולה! שלוש חניות אתם מסודרים לבינתיים",
          recommended: "המומלץ שלנו",
        },
        third: {
          title: "חבילת עסקים",
          price: "50 שקל",
          description: "יא עשירים! אנחנו מחפשים משקיע... 50 חניות תתפרעו",
        },
      },
      ourTeam: {
        title: "הצוות של פיקי:",
        noam: {
          name: "נועם כהן",
          role: "מייסד ומנכ''ל",
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
      footer: {
        title: "צרו קשר",
        location: "זכרון יעקב, ישראל",
        descriptionFirst:
          "האתר תחת בניה מתמדת, אנו מזמינים אתכם להוריד את האפלקציה שלנו ולמצוא את החנייה הבאה שלכם.",
        descriptionSec:
          "נשמח לשמור על קשר, תוכלו ליצור עימנו קשר על מנת לקבל מענה.",
        privacyAndPolicy: "פרטיות ומדיניות",
        termsOfUse: "תנאי שימוש",
        poweredBy: "פותח ע''י: ",
        nitaiDaud: "ניתאי דאוד",
        rights: "כל הזכויות שמורות 2024 Picky",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
