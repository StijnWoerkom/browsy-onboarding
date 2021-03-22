import { useTranslation } from "next-i18next";

const Footer = (): JSX.Element => {
  const { t } = useTranslation("footer");

  return (
    <footer className="font-heading flex justify-center font-medium py-10">
      <span className="text-darkblue_7 text-xl">
        {t("message_1")} <span className="text-green_5">{t("message_2")}</span>
        {t("message_3")}
      </span>
    </footer>
  );
};

export default Footer;
