import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-satoshivariable items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-deep_purple_901 flex flex-col justify-center w-[100%]">
          <Img
            src="images/img_component2.svg"
            className="h-[354px] md:ml-[0] sm:ml-[0] ml-[2px] mt-[54px] w-[auto]"
            alt="ComponentTwo"
          />
          <div className="flex flex-col gap-[36px] items-start justify-start mb-[349px] md:ml-[0] sm:ml-[0] ml-[153px] mr-[760px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start px-[10px] md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-left text-shadow-ts text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Search. Discover. Innovate.
                </Text>
              </div>
              <Text
                className="font-normal md:max-w-[100%] sm:max-w-[100%] max-w-[584px] not-italic text-deep_purple_100 text-left"
                as="h3"
                variant="h3"
              >
                Paperade leverages AI and empowers users to explore widely,
                validate efficiently, and execute confidently.
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] text-[20px] text-center text-white_A700 w-[190px]"
              onClick={() => navigate("/desktopthree")}
              shape="RoundedBorder8"
              size="3xl"
              variant="OutlineWhiteA700"
            >
              Find your idea
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
