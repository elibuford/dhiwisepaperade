import React from "react";

import { Text, Line, Img, Button, Input } from "components";

const FrameFortyEightPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-satoshivariable gap-[27px] items-start justify-start mx-[auto] p-[24px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="h-[100px] md:h-[312px] sm:h-[312px] max-w-[1207px] mx-[auto] md:px-[20px] relative w-[100%]">
          <header className="absolute bg-deep_purple_901 bottom-[0] flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius8 w-[100%]">
            <Text
              className="font-medium md:ml-[0] sm:ml-[0] ml-[27px] mr-[1033px] md:mt-[0] sm:mt-[0] mt-[23px] text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Biomark
            </Text>
            <div className="flex sm:flex-1 md:flex-col sm:flex-col flex-row gap-[36px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[258px] mr-[475px] sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-deep_purple_102 text-left w-[auto]"
                  variant="body1"
                >
                  Uniqueness
                </Text>
                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                  <div
                    className="h-[7px] overflow-hidden relative w-[82%]"
                    name="Group12793"
                  >
                    <div className="w-full h-full absolute bg-white_A700 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-gradient-to-r from-[#9a8afa] to-[#00d420f2]  rounded-[3px]"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    88%
                  </Text>
                </div>
              </div>
              <Line className="bg-deep_purple_501 md:h-[1px] sm:h-[1px] h-[41px] md:w-[100%] sm:w-[100%] w-[1px]" />
              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-deep_purple_102 text-left w-[auto]"
                  variant="body1"
                >
                  Tentative Success Rate
                </Text>
                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_group12793.png"
                    className="h-[7px] md:h-[auto] sm:h-[auto] object-cover w-[158px]"
                    alt="Group12793 One"
                  />
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    60%
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="bg-transparent flex items-center justify-center md:ml-[0] min-w-[213px] ml-[948px] mr-[33px] sm:ml-[0] text-center w-[auto]"
              leftIcon={
                <Img
                  src="images/img_map.svg"
                  className="mr-[12px] text-center"
                  alt="map"
                />
              }
              shape="RoundedBorder4"
              size="4xl"
              variant="Outline"
            >
              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-left text-white_A700">
                Paparade Smart Insights
              </div>
            </Button>
          </header>
          <Button
            className="absolute flex h-[33px] items-center justify-center right-[0] top-[0] w-[33px]"
            shape="icbRoundedBorder16"
            size="smIcn"
            variant="icbOutlineDeeppurpleA200"
          >
            <Img src="images/img_close.svg" className="h-[14px]" alt="close" />
          </Button>
        </div>
        <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[27px] h-[564px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[1195px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[auto]">
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu"
              placeholder="Description"
              variant="OutlineDeeppurple901"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu One"
              placeholder="Market Potential"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu Two"
              placeholder="Competitors"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu Three"
              placeholder="Innovations"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu Four"
              placeholder="Scalability"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu Five"
              placeholder="Legality"
            ></Input>
            <Input
              className="font-medium leading-[normal] p-[0] text-[16px] placeholder:text-gray_901 text-gray_901 text-left w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[204px]"
              name="menu Six"
              placeholder="Exit Strategy"
            ></Input>
          </div>
          <Line className="bg-gray_301 md:flex-1 sm:flex-1 md:h-[1px] sm:h-[1px] h-[562px] md:w-[100%] sm:w-[100%] w-[1px]" />
          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[16px] h-[562px] md:h-[auto] sm:h-[auto] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <Text
              className="font-medium text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Description
            </Text>
            <Text
              className="md:max-w-[100%] sm:max-w-[100%] max-w-[937px] text-deep_purple_900 text-left"
              as="h4"
              variant="h4"
            >
              System biology-focused company that creates software that can read
              and write in the Systems Biology Markup Language.
            </Text>
            <Text
              className="not-italic text-gray_800 text-left"
              as="h5"
              variant="h5"
            >
              Biomark is a startup that specializes in creating innovative
              software for systems biology research. The software is designed to
              read and write Systems Biology Markup Language (SBML), the most
              widely used standard for exchanging and sharing data within the
              systems biology community. This software will enable scientists to
              access, analyze, interpret, and visualize vast amounts of complex
              data in an easy and intuitive way.
              <br />
              <br />
              The company&#39;s flagship software suite provides a comprehensive
              set of tools for data processing, analysis, visualization, and
              communication. It contains powerful yet user-friendly features
              that make it possible to manipulate large datasets quickly and
              accurately. The suite also includes a library of plugins that
              allow users to tailor their workflows according to their specific
              needs. Additionally, the software offers users the ability to
              share their results with other researchers through SBML-compatible
              formats or directly through web-based platforms such as GitHub or
              Google Drive.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFortyEightPage;
