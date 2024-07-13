import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageChanger({ displayType = "buttons" }) {
  const [showAll, setShowAll] = useState(false);
  const { t, i18n } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
    setIsScrolling(window.scrollY > 0);
  };

  const getColor = () => {
    if (isScrolling) {
      return "#4c5fd1"; // Blue color when scrolling
    }
    if (isHovered) {
      return isTop ? "#ffeae5" : "#4c5fd1";
    }
    return "white";
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              height: "2rem",
              width: "9.5rem",
              padding: "6px",
              borderRadius: "0.5rem",
              border: "none",
              color: getColor(),
              marginTop: "10px",
              outline: "none",
              backgroundColor: "transparent",
              fontWeight: "700",
              fontSize: "0.9rem",
              fontfamily: "Lato",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue=''
          >
            <option value='' disabled>
              {t("CARD.SELECT_LANGUAGE")}
            </option>
            {languages.map((language) => (
              <option
                key={language.code}
                value={language.code}
                style={{ color: "#4c5fd1" }}
              >
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
