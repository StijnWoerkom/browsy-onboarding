// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";

const Step1 = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("step1_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div
          className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100"
          id="step-1-content"
        >
          <img src="/images/step-1.png" />
          <p className="font-heading font-bold text-darkblue_6 text-3xl">
            {t("step1_title")}
          </p>
          <p className="font-body text-darkblue_5 text-base">
            {t("step1_description")}
          </p>
          <button
            type="button"
            className="inline-flex font-heading items-center px-5 py-2 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green_6 hover:bg-green_7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green_5"
          >
            {t("step1_btn")}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "", ["common", "footer"])),
  },
});

export default Step1;
