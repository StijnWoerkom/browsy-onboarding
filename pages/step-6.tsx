// import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";

const Step6 = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("step6_title")}>
      <div className="browsy-app-content col-start-1 md:col-start-2 col-span-1 md:col-span-2">
        <div
          className="shadow-lg flex flex-col items-center text-center bg-white rounded bg-opacity-100 px-16"
          id="step-6-content"
        >
          <img className="mt-16" src="/images/step-6.png" />
          <p className="mt-6 font-heading font-bold text-darkblue_6 text-3xl">
            {t("step6_title")}
          </p>
          <p className="mt-6 font-body text-darkblue_5 text-base">
            {t("step6_description")}
          </p>
          <div className="flex mt-5 mb-5">
            <button
              id="share-fb-btn"
              type="button"
              className="w-12 h-12 bg-no-repeat bg-center inline-flex items-center p-3 mx-2 border border-transparent rounded-full shadow-sm text-white bg-darkblue_4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue_4"
            />
            <button
              id="share-ig-btn"
              type="button"
              className="w-12 h-12 bg-no-repeat bg-center inline-flex items-center p-3 mx-2 border border-transparent rounded-full shadow-sm text-white bg-pink_6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink_6"
            />
            <button
              id="share-whatsapp-btn"
              type="button"
              className="w-12 h-12 bg-no-repeat bg-center inline-flex items-center p-3 mx-2 border border-transparent rounded-full shadow-sm text-white bg-green_6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green_6"
            />
            <button
              id="share-twitter-btn"
              type="button"
              className="w-12 h-12 bg-no-repeat bg-center inline-flex items-center p-3 mx-2 border border-transparent rounded-full shadow-sm text-white bg-blue_6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue_6"
            />
          </div>
          <div className="w-4/5">
            <div className="mt-1 mb-8 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  type="text"
                  name="invitation"
                  id="invitation"
                  readOnly={true}
                  value="https://browsy.earth/DnL15M0/cp"
                  className="font-body text-darkblue_5 text-base focus:border-gray_5 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray_5"
                />
              </div>

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
              </button>
            </div>
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
