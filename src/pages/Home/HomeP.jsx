import React from "react";
import "./Home.css";
import styled from "styled-components";

export default function HomeP() {
  const StyledMainFrame = styled.div`
    margin-top: 36px;
    max-width: 100%;
    height: 84px;
    padding: 0px 100px;
  `;
  const StyledMainFrame1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1715px;
    height: 47px;
  `;
  const StyledMainFrame1T = styled.h1`
    color: var(--foundation-white-white-50, #fefefe);
    font-family: sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  const StyledMainFrame1TS = styled.span`
    color: var(--foundation-purple-purple-500, #6200ee);
    font-family: sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  const StyledMainFrame1D = styled.div`
    margin-left: 870px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 525px;
    height: 47px;
  `;
  const StyledMainFrame1DInp = styled.input`
    width: 320px;
    height: 47px;
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
    background: var(--foundation-white-white-50, #fefefe);
    outline: none;

    color: var(--foundation-grey-grey-900, #151515);
    font-feature-settings: "clig" off, "liga" off;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  `;

  const StyledMainFrame1DBtn = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 181px;
    height: 40px;
    border-radius: 4px;
    background: var(--foundation-purple-purple-500, #6200ee);
    border: none;

    color: var(--foundation-white-white-50, #fefefe);
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
  const StyledMainFrame2 = styled.p`
    margin-top: 12px;
    margin-left: 5px;
    color: var(--foundation-white-white-50, #fefefe);
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;

  const StyledMain = styled.div`
    margin-top: 40px;
    max-width: 100%;
    height: 790px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0px 100px;
  `;
  const StyledMainItem = styled.div`
    width: 398px;
    height: 188px;
    padding: 32px;
    border-radius: 12px;
    border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
    background: var(--foundation-white-white-50, #fefefe);
    box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
  `;
  const StyledMainItemTitle = styled.h3`
    color: var(--foundation-grey-grey-900, #151515);
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `;
  const StyledMainItemLorem = styled.p`
    color: var(--foundation-grey-grey-500, #333);
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  `;

  const StyledMainItemD = styled.div`
    margin-top: 20px;
    display: flex;
    // align-items: center;
  `;

  const StyledMainItemIssuer = styled.p`
    color: var(--foundation-grey-grey-500, #333);
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
  `;
  const StyledMainItemIssuerY = styled.span`
    color: var(--foundation-grey-grey-500, #333);
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  `;

  const StyledMainItemD1 = styled.div`
    padding: 4px 12px;
    margin-left: 80px;
    width: 83px;
    height: 20px;
    border-radius: 8.5px;
    background: var(--foundation-purple-purple-50, #efe6fd);
  `;
  const StyledMainItemDT = styled.p`
    color: var(--foundation-purple-purple-300, #9654f4);
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;

  return (
    <main className="homep">
      <StyledMainFrame>
        <StyledMainFrame1>
          <StyledMainFrame1T>
            You’ve got <StyledMainFrame1TS>7 book</StyledMainFrame1TS>{" "}
          </StyledMainFrame1T>
          <StyledMainFrame1D>
            <StyledMainFrame1DInp placeholder="Enter your name" />
            <StyledMainFrame1DBtn>
              <svg
                className="mainframebtnicon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M8.00001 3.83331V13.1666M3.33334 8.49998H12.6667"
                  stroke="#FEFEFE"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Create a book
            </StyledMainFrame1DBtn>
          </StyledMainFrame1D>
        </StyledMainFrame1>
        <StyledMainFrame2>Your task today</StyledMainFrame2>
      </StyledMainFrame>

      <StyledMain>
        <StyledMainItem>
          <StyledMainItemTitle>Raspberry Pi User Guide</StyledMainItemTitle>
          <StyledMainItemLorem>
            Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
            varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem
            id.
          </StyledMainItemLorem>
          <StyledMainItemD>
            <StyledMainItemIssuer>
              Eben Upton:{" "}
              <StyledMainItemIssuerY>2012-year</StyledMainItemIssuerY>
            </StyledMainItemIssuer>
            <StyledMainItemD1>
              <StyledMainItemDT>211 pages</StyledMainItemDT>
            </StyledMainItemD1>
          </StyledMainItemD>
        </StyledMainItem>
      </StyledMain>
    </main>
  );
}
