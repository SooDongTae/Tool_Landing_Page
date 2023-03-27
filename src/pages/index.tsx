import { FirstPage } from "../pageContainer/first-page";
import { Main } from "../pageContainer/main";
import Page_three from "../pageContainer/third-page";
import Page_four from "../pageContainer/fourth-page";
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
