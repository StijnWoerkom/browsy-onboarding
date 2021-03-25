// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "../components/Layout";

const Step2 = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("step2_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div
          className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100 px-16"
          id="step-2-content"
        >
          <img className="mt-16" src="/images/step-2.png" />
          <p className="mt-6 font-heading font-bold text-darkblue_6 text-3xl">
            {t("step2_title")}
          </p>
          <p className="mt-6 font-body text-darkblue_5 text-base">
            {t("step2_description")}
          </p>
          <Link href="/step-3">
            <button
              type="button"
              className="mt-12 mb-16 inline-flex font-heading items-center px-5 py-2 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green_6 hover:bg-green_7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green_5"
            >
              {t("step1_btn")}
            </button>
          </Link>
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

export default Step2;
