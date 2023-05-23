import { FirstPage } from "../pageContainer/first-page";
import { Main } from "../pageContainer/main";
import Page_three from "../pageContainer/third-page";
import { SecondPage } from "../pageContainer/second-page";

export default function Home() {
  return (
    <>
      <Main />
      <FirstPage />
      <Page_three />
      <SecondPage />
    </>
  );
}
