import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_101 flex flex-col font-satoshivariable gap-[214px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] pb-[229px] w-[100%]">
        <div className="bg-deep_purple_901 flex flex-col items-start justify-start p-[16px] w-[100%]">
          <Img
            src="images/img_defaultmonochrome.svg"
            className="h-[48px] md:ml-[0] sm:ml-[0] ml-[104px] w-[auto]"
            alt="defaultmonochrome"
          />
        </div>
        <div className="flex flex-col gap-[14px] items-center justify-start md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[38%]">
          <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Find a startup idea
              </Text>
              <div className="flex flex-col items-start justify-start p-[10px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  We will generate ideas from 100 million papers
                </Text>
              </div>
            </div>
            <Input
              className="common-pointer font-medium md:h-[auto] sm:h-[auto] leading-[normal] p-[0] text-[16px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
              wrapClassName="flex w-[100%]"
              onClick={() => navigate("/desktopfive")}
              name="FrameSeven"
              placeholder="Biotech"
              suffix={
                <div className="h-[36px] w-[36px] bg-deep_purple_901 p-[8px] rounded-radius4 mx-[8px] flex justify-center items-center">
                  <Img
                    src="images/img_search.svg"
                    className="my-[auto]"
                    alt="search"
                  />
                </div>
              }
              shape="RoundedBorder8"
              size="lg"
              variant="OutlineDeeppurple101"
            ></Input>
          </div>
          <div className="bg-white_A700 flex flex-col gap-[16px] items-start justify-start p-[16px] rounded-radius8 shadow-bs sm:w-[100%] w-[569px]">
            <Text
              className="font-normal not-italic text-gray_600 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              People already searched for
            </Text>
            <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
              <Button
                className="flex items-center justify-center text-center"
                rightIcon={
                  <Img
                    src="images/img_edit.svg"
                    className="ml-[16px] text-center"
                    alt="edit"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillDeeppurple50"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-deep_purple_901 text-left">
                  Microbiology
                </div>
              </Button>
              <Button
                className="flex items-center justify-center text-center"
                rightIcon={
                  <Img
                    src="images/img_edit.svg"
                    className="ml-[16px] text-center"
                    alt="edit"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillDeeppurple50"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-deep_purple_901 text-left">
                  NFT
                </div>
              </Button>
              <Button
                className="flex items-center justify-center text-center"
                rightIcon={
                  <Img
                    src="images/img_edit.svg"
                    className="ml-[16px] text-center"
                    alt="edit"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillDeeppurple50"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-deep_purple_901 text-left">
                  Covid-19
                </div>
              </Button>
              <Button
                className="flex items-center justify-center text-center"
                rightIcon={
                  <Img
                    src="images/img_edit.svg"
                    className="ml-[16px] text-center"
                    alt="edit"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillDeeppurple50"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-deep_purple_901 text-left">
                  Work life balance
                </div>
              </Button>
              <Button
                className="flex items-center justify-center text-center"
                rightIcon={
                  <Img
                    src="images/img_edit.svg"
                    className="ml-[16px] text-center"
                    alt="edit"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillDeeppurple50"
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-deep_purple_901 text-left">
                  Health Insurance
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
