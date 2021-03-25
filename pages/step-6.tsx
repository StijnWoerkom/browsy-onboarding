// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";

const Step6 = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("step1_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div
          className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100 px-16"
          id="step-6-content"
        >
          <img className="mt-16" src="/images/step-6.png" />
          <p className="mt-6 font-heading font-bold text-darkblue_6 text-3xl">
            {t("step1_title")}
          </p>
          <p className="mt-6 font-body text-darkblue_5 text-base">
            {t("step1_description")}
          </p>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="invitation"
              id="invitation"
              readOnly={true}
              value="https://browsy.earth/DnL15M0/cp"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            />
            <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-transparent font-medium rounded-r-md text-white bg-green_6 hover:bg-green_7 focus:outline-none focus:ring-1 focus:ring-ring-green_5 focus:border-ring-green_5">
              <svg
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>Copy</span>
            </button>
          </div>
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

export default Step6;
