import { useTranslation } from "react-i18next";

const BestAffordableScannersPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("BESTSCANNERS.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("BESTSCANNERS.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            {/* <img
              src='images/scanners.jpg'
              alt={t("BESTSCANNERS.IMAGE_ALT")}
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            /> */}
          </div>
        </div>
        <main>
          <section>
            <h3>1. TVS BS-C 101 Star Barcode Scanner</h3>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_1_PRICE")}</strong>
            </p>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_1_FEATURES")}</strong>
            </p>
          </section>
          <section>
            <h3>2. Zebra DS2208 Handheld Barcode Scanner</h3>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_2_PRICE")}</strong>
            </p>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_2_FEATURES")}</strong>
            </p>
          </section>
          <section>
            <h3>3. Honeywell Eclipse MK5145 Barcode Scanner</h3>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_3_PRICE")}</strong>
            </p>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_3_FEATURES")}</strong>
            </p>
          </section>
          <section>
            <h3>4. Motorola Symbol LS2208 Barcode Scanner</h3>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_4_PRICE")}</strong>
            </p>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_4_FEATURES")}</strong>
            </p>
          </section>
          <section>
            <h3>5. TaoTronics TT-BS030 Wireless Barcode Scanner</h3>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_5_PRICE")}</strong>
            </p>
            <p>
              <strong>{t("BESTSCANNERS.SCANNER_5_FEATURES")}</strong>
            </p>
          </section>
        </main>
      </div>
      {/* <footer className='bg-dark text-white text-center p-3 mt-5'>
        <p>&copy; Pensare.AI Pvt. Ltd. All Rights Reserved</p>
      </footer> */}
    </>
  );
};

const FundingOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("FUNDINGOPTIONS.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("FUNDINGOPTIONS.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src='../../img/7.png'
              alt='Funding Options'
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <main>
          <section>
            <h3>{t("FUNDINGOPTIONS.BANK_LOANS_TITLE")}</h3>
            <p>{t("FUNDINGOPTIONS.BANK_LOANS_DESC")}</p>
            <ul>
              <li>
                <strong>{t("FUNDINGOPTIONS.TERM_LOANS_TITLE")}:</strong>{" "}
                {t("FUNDINGOPTIONS.TERM_LOANS_DESC")}
              </li>
              <li>
                <strong>
                  {t("FUNDINGOPTIONS.WORKING_CAPITAL_LOANS_TITLE")}:
                </strong>{" "}
                {t("FUNDINGOPTIONS.WORKING_CAPITAL_LOANS_DESC")}
              </li>
              <li>
                <strong>
                  {t("FUNDINGOPTIONS.OVERDRAFT_FACILITIES_TITLE")}:
                </strong>{" "}
                {t("FUNDINGOPTIONS.OVERDRAFT_FACILITIES_DESC")}
              </li>
            </ul>
          </section>
          <section>
            <h3>{t("FUNDINGOPTIONS.NBFCS_TITLE")}</h3>
            <p>{t("FUNDINGOPTIONS.NBFCS_DESC")}</p>
            <ul>
              <li>
                <strong>{t("FUNDINGOPTIONS.BUSINESS_LOANS_TITLE")}:</strong>{" "}
                {t("FUNDINGOPTIONS.BUSINESS_LOANS_DESC")}
              </li>
              <li>
                <strong>{t("FUNDINGOPTIONS.INVOICE_FINANCING_TITLE")}:</strong>{" "}
                {t("FUNDINGOPTIONS.INVOICE_FINANCING_DESC")}
              </li>
              <li>
                <strong>
                  {t("FUNDINGOPTIONS.EQUIPMENT_FINANCING_TITLE")}:
                </strong>{" "}
                {t("FUNDINGOPTIONS.EQUIPMENT_FINANCING_DESC")}
              </li>
            </ul>
          </section>
          <section>
            <h3>{t("FUNDINGOPTIONS.GOVERNMENT_SCHEMES_TITLE")}</h3>
            <p>{t("FUNDINGOPTIONS.GOVERNMENT_SCHEMES_DESC")}</p>
            <ul>
              <li>
                <strong>{t("FUNDINGOPTIONS.CGTMSE_TITLE")}:</strong>{" "}
                {t("FUNDINGOPTIONS.CGTMSE_DESC")}
              </li>
              <li>
                <strong>{t("FUNDINGOPTIONS.PMEGP_TITLE")}:</strong>{" "}
                {t("FUNDINGOPTIONS.PMEGP_DESC")}
              </li>
              <li>
                <strong>
                  {t("FUNDINGOPTIONS.MSME_BUSINESS_LOANS_TITLE")}:
                </strong>{" "}
                {t("FUNDINGOPTIONS.MSME_BUSINESS_LOANS_DESC")}
              </li>
            </ul>
          </section>
        </main>
      </div>
      {/* <footer className='bg-dark text-white text-center p-3 mt-5'>
        <p>&copy; Pensare.AI Pvt. Ltd. All Rights Reserved</p>
      </footer> */}
    </>
  );
};

const TaxGuidePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("TAXGUIDE.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("TAXGUIDE.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src='../../img/13.png'
              alt='Tax Guide for MSMEs'
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <main>
          <section>
            <h3>{t("TAXGUIDE.GST_TITLE")}</h3>
            <p>{t("TAXGUIDE.GST_DESC")}</p>
            <ul>
              <li>{t("TAXGUIDE.GST_CONDITION1")}</li>
              <li>{t("TAXGUIDE.GST_CONDITION2")}</li>
              <li>{t("TAXGUIDE.GST_CONDITION3")}</li>
            </ul>
            <p>{t("TAXGUIDE.GST_BENEFITS")}</p>
          </section>
          <section>
            <h3>{t("TAXGUIDE.INCOME_TAX_TITLE")}</h3>
            <p>{t("TAXGUIDE.INCOME_TAX_DESC")}</p>
            <ul>
              <li>
                <strong>{t("TAXGUIDE.INCOME_TAX_DEDUCTIONS")}:</strong>{" "}
                {t("TAXGUIDE.INCOME_TAX_DEDUCTIONS_DESC")}
              </li>
              <li>
                <strong>{t("TAXGUIDE.PRESUMPTIVE_TAXATION")}:</strong>{" "}
                {t("TAXGUIDE.PRESUMPTIVE_TAXATION_DESC")}
              </li>
            </ul>
          </section>
          <section>
            <h3>{t("TAXGUIDE.COMPLIANCE_TITLE")}</h3>
            <p>{t("TAXGUIDE.COMPLIANCE_DESC")}</p>
            <ul>
              <li>
                <strong>{t("TAXGUIDE.GST_RETURNS")}:</strong>{" "}
                {t("TAXGUIDE.GST_RETURNS_DESC")}
              </li>
              <li>
                <strong>{t("TAXGUIDE.BOOKS_OF_ACCOUNTS")}:</strong>{" "}
                {t("TAXGUIDE.BOOKS_OF_ACCOUNTS_DESC")}
              </li>
            </ul>
          </section>
          <section>
            <h3>{t("TAXGUIDE.BENEFITS_TITLE")}</h3>
            <p>{t("TAXGUIDE.BENEFITS_DESC")}</p>
            <ul>
              <li>
                <strong>{t("TAXGUIDE.GST_COMPOSITION_SCHEME")}:</strong>{" "}
                {t("TAXGUIDE.GST_COMPOSITION_SCHEME_DESC")}
              </li>
              <li>
                <strong>{t("TAXGUIDE.TAX_HOLIDAYS")}:</strong>{" "}
                {t("TAXGUIDE.TAX_HOLIDAYS_DESC")}
              </li>
            </ul>
          </section>
        </main>
      </div>
      {/* <footer className='bg-dark text-white text-center p-3 mt-5'>
        <p>&copy; Pensare.AI Pvt. Ltd. All Rights Reserved</p>
      </footer> */}
    </>
  );
};

const GovernmentSchemesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("GOVERNMENTSCHEMES.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("GOVERNMENTSCHEMES.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src='../../img/10.png'
              alt='Government Schemes for MSMEs'
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <main>
          {Array.from({ length: 10 }, (_, index) => (
            <section key={index + 1}>
              <h3>{`${index + 1}. ${t(
                `GOVERNMENTSCHEMES.SCHEMES.SCHEME${index + 1}_TITLE`
              )}`}</h3>
              <p>{t(`GOVERNMENTSCHEMES.SCHEMES.SCHEME${index + 1}_DESC`)}</p>
            </section>
          ))}
        </main>
      </div>
      {/* <footer className='bg-dark text-white text-center p-3 mt-5'>
        <p>&copy; Pensare.AI Pvt. Ltd. All Rights Reserved</p>
      </footer> */}
    </>
  );
};

const BusinessRegistrationGuidePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className='bg-primary text-white p-4'
        style={{ marginTop: "80px" }}
      >
        <h1 className='text-center' style={{ fontSize: "24px" }}>
          {t("BUSINESSREGISTRATION.TITLE")}
        </h1>
      </header>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <p
              className='mt-4'
              style={{ color: "rgb(201, 24, 24)", fontWeight: 600 }}
            >
              {t("BUSINESSREGISTRATION.INTRO")}
            </p>
          </div>
          <div className='col-md-6'>
            <img
              src='../../img/11.png'
              alt='Registering Your Small Business'
              className='img-fluid img-thumbnail'
              style={{ maxWidth: "600px", maxHeight: "400px" }}
            />
          </div>
        </div>
        <main>
          <section>
            <h2>{t("BUSINESSREGISTRATION.MSME_CATEGORY")}</h2>
            <p>{t("BUSINESSREGISTRATION.MSME_CATEGORY_DESC")}</p>
          </section>
          <section>
            <h2>{t("BUSINESSREGISTRATION.ELIGIBILITY")}</h2>
            <p>{t("BUSINESSREGISTRATION.ELIGIBILITY_DESC")}</p>
            <ul>
              <li>
                <strong>{t("BUSINESSREGISTRATION.MICRO_TITLE")}</strong>{" "}
                {t("BUSINESSREGISTRATION.MICRO_DESC")}
              </li>
              <li>
                <strong>{t("BUSINESSREGISTRATION.SMALL_TITLE")}</strong>{" "}
                {t("BUSINESSREGISTRATION.SMALL_DESC")}
              </li>
              <li>
                <strong>{t("BUSINESSREGISTRATION.MEDIUM_TITLE")}</strong>{" "}
                {t("BUSINESSREGISTRATION.MEDIUM_DESC")}
              </li>
            </ul>
          </section>
          <section>
            <h2>{t("BUSINESSREGISTRATION.REGISTRATION_PROCESS")}</h2>
            <h3>{t("BUSINESSREGISTRATION.TYPE_ENTITY")}</h3>
            <p>{t("BUSINESSREGISTRATION.TYPE_ENTITY_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.DSC_DIN")}</h3>
            <p>{t("BUSINESSREGISTRATION.DSC_DIN_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.NAME_RESERVATION")}</h3>
            <p>{t("BUSINESSREGISTRATION.NAME_RESERVATION_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.FILE_INCORPORATION")}</h3>
            <p>{t("BUSINESSREGISTRATION.FILE_INCORPORATION_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.OBTAIN_PAN_TAN")}</h3>
            <p>{t("BUSINESSREGISTRATION.OBTAIN_PAN_TAN_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.REGISTER_GST")}</h3>
            <p>{t("BUSINESSREGISTRATION.REGISTER_GST_DESC")}</p>
            <h3>{t("BUSINESSREGISTRATION.OTHER_LICENSES")}</h3>
            <p>{t("BUSINESSREGISTRATION.OTHER_LICENSES_DESC")}</p>
          </section>
          <section>
            <h2>{t("BUSINESSREGISTRATION.REQUIRED_DOCUMENTS")}</h2>
            <p>{t("BUSINESSREGISTRATION.REQUIRED_DOCUMENTS_DESC")}</p>
            <ul>
              <li>{t("BUSINESSREGISTRATION.DOCUMENTS_IDENTITY")}</li>
              <li>{t("BUSINESSREGISTRATION.DOCUMENTS_ADDRESS")}</li>
              <li>{t("BUSINESSREGISTRATION.DOCUMENTS_MOA_AOA")}</li>
              <li>{t("BUSINESSREGISTRATION.DOCUMENTS_PARTNERSHIP_DEED")}</li>
              <li>{t("BUSINESSREGISTRATION.DOCUMENTS_PAN_AADHAAR")}</li>
            </ul>
          </section>
          <section>
            <h2>{t("BUSINESSREGISTRATION.ONLINE_REGISTRATION")}</h2>
            <p>{t("BUSINESSREGISTRATION.ONLINE_REGISTRATION_DESC")}</p>
          </section>
          <section>
            <h2>{t("BUSINESSREGISTRATION.CONCLUSION")}</h2>
            <p>{t("BUSINESSREGISTRATION.CONCLUSION_DESC")}</p>
            <p>{t("BUSINESSREGISTRATION.DUKAN_BUDDY_SUPPORT")}</p>
          </section>
        </main>
      </div>
    </>
  );
};

export {
  FundingOptionsPage,
  BestAffordableScannersPage,
  TaxGuidePage,
  GovernmentSchemesPage,
  BusinessRegistrationGuidePage,
};
