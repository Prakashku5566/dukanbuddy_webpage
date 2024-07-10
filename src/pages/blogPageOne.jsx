import { useTranslation } from "react-i18next";
// import achievement from "../../img/achievement.png";
const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("BLOG_PAGE.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("BLOG_PAGE.INTRO")}
              In today&apos;s dynamic market landscape, consumer preferences are
              constantly evolving, driven by changing lifestyles, technological
              advancements, and socio-economic factors. For Micro, Small, and
              Medium Enterprises (MSMEs) in India, staying attuned to these
              shifting trends is crucial for sustaining and thriving in the
              competitive marketplace. Let&apos;s explore some of the emerging
              consumer trends in India and suggest ways for MSMEs to adapt their
              products, services, and business models effectively.
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src='images/achievement.jpg'
              alt={t("BLOG_PAGE.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>

        <main>
          <h2 style={{ color: "blue" }}>{t("BLOG_PAGE.TRENDS_TITLE")}</h2>
          <section>
            <h3>{t("BLOG_PAGE.TREND_1_TITLE")}</h3>
            <p>{t("BLOG_PAGE.TREND_1_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.TREND_2_TITLE")}</h3>
            <p>{t("BLOG_PAGE.TREND_2_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.TREND_3_TITLE")}</h3>
            <p>{t("BLOG_PAGE.TREND_3_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.TREND_4_TITLE")}</h3>
            <p>{t("BLOG_PAGE.TREND_4_DESC")}</p>
            <h3>2. Demand for Personalization:</h3>
            <p>
              Today&apos;s consumers crave personalized experiences tailored to
              their preferences and needs. They seek products and services that
              resonate with their individual tastes, values, and lifestyles.
              Mass customization and personalized recommendations are gaining
              traction across various industries.
            </p>
          </section>
          <section>
            <h3>3. Conscious Consumerism:</h3>
            <p>
              There&apos;s a growing awareness and emphasis on sustainability,
              ethical sourcing, and social responsibility among Indian
              consumers. They are actively seeking eco-friendly products,
              supporting local artisans and brands, and scrutinizing the ethical
              practices of businesses.
            </p>
          </section>
          <section>
            <h3>4. Health and Wellness Focus:</h3>
            <p>
              The COVID-19 pandemic has accelerated the health and wellness
              trend, prompting consumers to prioritize immunity-boosting
              products, organic foods, and wellness services. There&apos;s a
              heightened demand for clean-label products, natural ingredients,
              and holistic healthcare solutions.
            </p>
          </section>
          <h2 style={{ color: "blue" }}>{t("BLOG_PAGE.STRATEGIES_TITLE")}</h2>
          <section>
            <h3>{t("BLOG_PAGE.STRATEGY_1_TITLE")}</h3>
            <p>{t("BLOG_PAGE.STRATEGY_1_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.STRATEGY_2_TITLE")}</h3>
            <p>{t("BLOG_PAGE.STRATEGY_2_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.STRATEGY_3_TITLE")}</h3>
            <p>{t("BLOG_PAGE.STRATEGY_3_DESC")}</p>
          </section>
          <section>
            <h3>{t("BLOG_PAGE.CONCLUSION_TITLE")}</h3>
            <p>{t("BLOG_PAGE.CONCLUSION_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};

const GstBenefitsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("GSTPAGE.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("GSTPAGE.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src='../../img/1.png'
              alt='Achievement Creativity Strategy Success Icon'
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            />
          </div>
        </div>

        <main>
          <section>
            <h2>{t("GSTPAGE.SIMPLIFIED_TAX_STRUCTURE_TITLE")}</h2>
            <p>{t("GSTPAGE.SIMPLIFIED_TAX_STRUCTURE_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.INCREASED_THRESHOLD_TITLE")}</h2>
            <p>{t("GSTPAGE.INCREASED_THRESHOLD_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.COMPOSITION_SCHEME_TITLE")}</h2>
            <p>{t("GSTPAGE.COMPOSITION_SCHEME_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.ITC_TITLE")}</h2>
            <p>{t("GSTPAGE.ITC_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.EASIER_COMPLIANCE_TITLE")}</h2>
            <p>{t("GSTPAGE.EASIER_COMPLIANCE_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.REMOVAL_OF_ENTRY_TAX_BARRIERS_TITLE")}</h2>
            <p>{t("GSTPAGE.REMOVAL_OF_ENTRY_TAX_BARRIERS_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.BOOST_TO_DIGITAL_TRANSACTIONS_TITLE")}</h2>
            <p>{t("GSTPAGE.BOOST_TO_DIGITAL_TRANSACTIONS_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.LEVEL_PLAYING_FIELD_TITLE")}</h2>
            <p>{t("GSTPAGE.LEVEL_PLAYING_FIELD_DESC")}</p>
          </section>
          <section>
            <h2>{t("GSTPAGE.CONCLUSION_TITLE")}</h2>
            <p>{t("GSTPAGE.CONCLUSION_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};

const DigitalRevolutionPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("DIGITALREVOLUTION.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("DIGITALREVOLUTION.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src={"marketing"}
              alt={t("DIGITALREVOLUTION.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <main>
          <section>
            <h2>{t("DIGITALREVOLUTION.DIGITAL_PAYMENT_SYSTEMS_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.DIGITAL_PAYMENT_SYSTEMS_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.ECOMMERCE_PLATFORMS_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.ECOMMERCE_PLATFORMS_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.CLOUD_COMPUTING_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.CLOUD_COMPUTING_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.DIGITAL_MARKETING_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.DIGITAL_MARKETING_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.DATA_ANALYTICS_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.DATA_ANALYTICS_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.SUPPLY_CHAIN_MANAGEMENT_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.SUPPLY_CHAIN_MANAGEMENT_DESC")}</p>
          </section>
          <section>
            <h2>{t("DIGITALREVOLUTION.GOVERNMENT_INITIATIVES_TITLE")}</h2>
            <p>{t("DIGITALREVOLUTION.GOVERNMENT_INITIATIVES_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};
const TheMightyKiranaPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("MIGHTYKIRANA.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("MIGHTYKIRANA.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src='images/3967946.jpg'
              alt={t("MIGHTYKIRANA.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <main>
          <section>
            <h2>{t("MIGHTYKIRANA.MARKET_SHARE_TITLE")}</h2>
            <p>{t("MIGHTYKIRANA.MARKET_SHARE_DESC")}</p>
          </section>
          <section>
            <h2>{t("MIGHTYKIRANA.GLOBAL_COMPARISON_TITLE")}</h2>
            <p>{t("MIGHTYKIRANA.GLOBAL_COMPARISON_DESC")}</p>
          </section>
          <section>
            <h2>{t("MIGHTYKIRANA.LOCAL_PREFERENCES_TITLE")}</h2>
            <p>{t("MIGHTYKIRANA.LOCAL_PREFERENCES_DESC")}</p>
          </section>
          <section>
            <h2>{t("MIGHTYKIRANA.TECH_ADAPTATION_TITLE")}</h2>
            <p>{t("MIGHTYKIRANA.TECH_ADAPTATION_DESC")}</p>
          </section>
          <section>
            <h2>{t("MIGHTYKIRANA.FUTURE_ROLE_TITLE")}</h2>
            <p>{t("MIGHTYKIRANA.FUTURE_ROLE_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};
const RevolutionizingKiranaStoresPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("REVOLUTIONKIRANA.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("REVOLUTIONKIRANA.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src='images/grapg.jpg'
              alt={t("REVOLUTIONKIRANA.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <main>
          <section>
            <h2>{t("REVOLUTIONKIRANA.INVENTORY_MANAGEMENT_TITLE")}</h2>
            <p>{t("REVOLUTIONKIRANA.INVENTORY_MANAGEMENT_DESC")}</p>
          </section>
          <section>
            <h2>{t("REVOLUTIONKIRANA.DIGITALIZATION_TITLE")}</h2>
            <p>{t("REVOLUTIONKIRANA.DIGITALIZATION_DESC")}</p>
          </section>
          <section>
            <h2>{t("REVOLUTIONKIRANA.ECOMMERCE_EXPANSION_TITLE")}</h2>
            <p>{t("REVOLUTIONKIRANA.ECOMMERCE_EXPANSION_DESC")}</p>
          </section>
          <section>
            <h2>{t("REVOLUTIONKIRANA.PAYMENT_SOLUTIONS_TITLE")}</h2>
            <p>{t("REVOLUTIONKIRANA.PAYMENT_SOLUTIONS_DESC")}</p>
          </section>
          <section>
            <h2>{t("REVOLUTIONKIRANA.CONCLUSION_TITLE")}</h2>
            <p>{t("REVOLUTIONKIRANA.CONCLUSION_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};
const StrategiesForMSMEsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("STRATEGIESMSMES.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("STRATEGIESMSMES.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src='images/stastregies.jpg'
              alt={t("STRATEGIESMSMES.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <main>
          <h3>{t("STRATEGIESMSMES.INVENTORY_OPTIMIZATION_TITLE")}</h3>
          <section>
            <p>{t("STRATEGIESMSMES.INVENTORY_OPTIMIZATION_DESC_1")}</p>
            <p>{t("STRATEGIESMSMES.INVENTORY_OPTIMIZATION_DESC_2")}</p>
          </section>
          <section>
            <h3>{t("STRATEGIESMSMES.VENDOR_MANAGEMENT_TITLE")}</h3>
            <p>{t("STRATEGIESMSMES.VENDOR_MANAGEMENT_DESC_1")}</p>
            <p>{t("STRATEGIESMSMES.VENDOR_MANAGEMENT_DESC_2")}</p>
          </section>
          <section>
            <h3>{t("STRATEGIESMSMES.LEVERAGING_TECHNOLOGY_TITLE")}</h3>
            <p>{t("STRATEGIESMSMES.LEVERAGING_TECHNOLOGY_DESC_1")}</p>
            <p>{t("STRATEGIESMSMES.LEVERAGING_TECHNOLOGY_DESC_2")}</p>
          </section>
          <section>
            <h3>{t("STRATEGIESMSMES.CONCLUSION_TITLE")}</h3>
            <p>{t("STRATEGIESMSMES.CONCLUSION_DESC")}</p>
          </section>
        </main>
      </div>
    </>
  );
};

export {
  GstBenefitsPage,
  BlogPage,
  DigitalRevolutionPage,
  TheMightyKiranaPage,
  RevolutionizingKiranaStoresPage,
  StrategiesForMSMEsPage,
};
