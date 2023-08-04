import Web3 from "web3";
import {
  GlobalStyle,
  EContainer,
  UContainer,
  Word,
  Menu,
  RowFlexBox,
  ColumnFlexBox,
  CustomBtn,
  SmallView,
  Words,
  Chunk,
} from "./customComponent/customComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Header } from "./customComponent/Header";
import FooterTokenomics from "./customComponent/FooterTokenomics";
import { Image } from "@chakra-ui/react";

export const headMenu = [
  "Ecosystem",
  "Governance",
  "Docs",
  "Developers",
  "FAQ",
];

function App() {
  return (
    <EContainer>
      <GlobalStyle />
      <Header />

      {/*Slide 1 */}
      <UContainer
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "2%",
          paddingTop: "5%",
          width: "100%",
        }}
      >
        <Image
          src={require("./img/QVE.png")}
          alt="QVE"
          style={{
            position: "absolute",
            zIndex: 10,
            width: "70%",
            right: "0",
            top: "0",
            opacity: 1,
            animation:
              "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
          }}
        />

        {/* 첫화면의 모든 글자들 */}
        <Chunk
          style={{
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          <Words gray style={{ fontSize: "1.7rem" }}>
            Decentralized Investing Fund Liquidation Platform
          </Words>
          <Words bold white style={{ fontSize: "5rem", display: "inline" }}>
            For Asset Manager
          </Words>
          <Word bold white style={{ fontSize: "5rem" }}>
            For Personal Traders
          </Word>
        </Chunk>
      </UContainer>

      <FooterTokenomics />
      <ColumnFlexBox
        style={{
          width: "100vw",
          height: "19vh",
          backgroundColor: "#000000ee",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RowFlexBox>
          <ColumnFlexBox>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
          </ColumnFlexBox>
          <RowFlexBox></RowFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>
    </EContainer>
  );
}

export default App;
