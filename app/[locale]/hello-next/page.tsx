import { useTranslations } from "next-intl";

export default function HelloWorld() {
  const t = useTranslations("HelloWorld")
  return (
    <>
      <p>{t('message')}</p>
    </>
  );
}
