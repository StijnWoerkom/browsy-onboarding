// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";

const StartTour = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("start_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100">
          <img src="/images/avatar.png" />
          <p className="font-heading font-bold text-darkblue_6 text-4xl">
            {t("start_head")} Marjolein! 👋
            <br />
            {t("start_title")}
          </p>
          <img src="/images/start-tour.png" />
          <p className="font-body text-darkblue_5 text-base">
            {t("start_description")}
          </p>
          <button
            type="button"
            className="inline-flex font-heading items-center px-5 py-2 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-green_6 hover:bg-green_7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green_5"
          >
            {t("start_btn")}
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

export default StartTour;
