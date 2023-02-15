import React from "react";

import { Img, Text, Input } from "components";
import { useNavigate } from "react-router-dom";

const DesktopThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_101 flex flex-col font-satoshivariable gap-[214px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] pb-[511px] w-[100%]">
        <div className="bg-deep_purple_901 flex flex-col items-start justify-start p-[16px] w-[100%]">
          <Img
            src="images/img_defaultmonochrome.svg"
            className="h-[48px] md:ml-[0] sm:ml-[0] ml-[104px] w-[auto]"
            alt="defaultmonochrome"
          />
        </div>
        <div className="flex flex-col gap-[24px] items-center justify-start md:px-[20px] sm:px-[20px] sm:w-[100%] w-[auto]">
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
            className="common-pointer font-medium md:h-[auto] sm:h-[auto] leading-[normal] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
            wrapClassName="flex w-[100%]"
            onClick={() => navigate("/desktopfour")}
            name="FrameSeven"
            placeholder="Enter keywords"
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
            size="xl"
          ></Input>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
