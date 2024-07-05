import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageChanger({ displayType = "buttons" }) {
  const [showAll, setShowAll] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en1", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "pa", label: "ਪੰਜਾਬੀ" },
    { code: "mr", label: "मराठी" },
    { code: "gu", label: "ગુજરાતી" },
    { code: "ta", label: "தமிழ்" },
    { code: "te", label: "తెలుగు" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "ml", label: "മലയാളം" },
    { code: "bn", label: "বাংলা" },
    { code: "or", label: "ଓଡିଆ" },
    { code: "ur", label: "اردو" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const displayedLanguages = showAll ? languages : languages.slice(0, 6);

  return (
    <div className='App'>
      {displayType === "buttons" ? (
        <div>
          {displayedLanguages.map((language, index) => (
            <span key={language.code}>
              <button onClick={() => changeLanguage(language.code)}>
                {language.label}
              </button>
              {index < displayedLanguages.length - 1 && ", "}
            </span>
          ))}
        </div>
      ) : (
        <div>
          <select
            style={{
              height: "2.5rem",
              width: "9.5rem",
              padding: "5px",
              borderRadius: "0.5rem",
            }}
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue=''
          >
            <option value='' disabled>
              {t("CARD.SELECT_LANGUAGE")}
            </option>
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.label}
              </option>
            ))}
          </select>
        </div>
      )}
      {displayType === "buttons" && (
        <button
          className='bg-blue-600 p-1 rounded text-white'
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "Show All"}
        </button>
      )}
    </div>
  );
}

export default LanguageChanger;
