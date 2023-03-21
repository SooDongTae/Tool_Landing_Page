import { FirstPage } from "../pageContainer/first-page";
import { Main } from "../pageContainer/main";
import Page_three from "../pageContainer/page_three";
import Page_four from "../pageContainer/page_four";
import { SecondPage } from "../pageContainer/second-page";

export default function Home() {
  return (
    <>
      <Main />
      <FirstPage />
      <SecondPage />
      <Page_three />
      <Page_four />
    </>
  );
}
