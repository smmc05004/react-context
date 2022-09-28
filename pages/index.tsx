import Buttons from "../components/Buttons";
import Value from "../components/Value";
import CounterProvider from "../components/provider/CounterProvider";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
};

export default IndexPage;
