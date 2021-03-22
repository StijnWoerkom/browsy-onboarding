// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("create_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100">
          <p className="font-heading font-bold text-darkblue_5 text-2xl">
            {t("create_message")}
          </p>
          <p className="font-heading font-bold text-darkblue_6 text-4xl">
            {t("create_title")}
          </p>
          <div className="flex flex-col">
            <button
              type="button"
              className="mt-4 inline-flex font-heading px-4 py-2 border border-gray-300 shadow-sm text-base font-medium  text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <img className="-ml-1 mr-3 h-5 w-5" src="/images/gmail.png" />
              Sign in with Google
            </button>
            <button
              type="button"
              className="mt-4 inline-flex font-heading  px-4 py-2 border border-transparent text-base font-medium  shadow-sm text-white bg-fb_blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fb_blue"
            >
              <img className="-ml-1 mr-3 h-5 w-5" src="/images/facebook.png" />
              Sign in with Facebook
            </button>
            <button
              type="button"
              className="mt-4 inline-flex font-heading  px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-email_red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-email_red"
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Sign in with email
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            By continuing you are indicating that you accept our{" "}
            <a className="text-blue-400">Terms of Service</a> and{" "}
            <a className="text-blue-400">Privacy Policy</a>.
          </p>
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

export default IndexPage;
