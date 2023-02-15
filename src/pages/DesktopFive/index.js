import React from "react";

import { Img, Input, Button, Text } from "components";

const DesktopFivePage = () => {
  return (
    <>
      <div className="bg-gray_101 flex flex-col font-satoshivariable items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[24px] items-center justify-end w-[100%]">
          <div className="bg-deep_purple_901 flex flex-col items-start justify-start p-[16px] w-[100%]">
            <Img
              src="images/img_defaultmonochrome.svg"
              className="h-[48px] md:ml-[0] sm:ml-[0] ml-[104px] w-[auto]"
              alt="defaultmonochrome"
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1288px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[58%]">
              <Input
                className="font-medium md:h-[auto] sm:h-[auto] leading-[normal] p-[0] text-[16px] placeholder:text-black_901 text-black_901 text-left w-[100%]"
                wrapClassName="flex md:w-[100%] sm:w-[100%] w-[77%]"
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
                size="xl"
              ></Input>
              <Button
                className="flex items-center justify-center min-w-[163px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_menu.svg"
                    className="mr-[10px] text-center"
                    alt="menu"
                  />
                }
                shape="RoundedBorder4"
                size="2xl"
                variant="OutlineDeeppurple700"
              >
                <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-deep_purple_900 text-left">
                  Advanced Filter
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[16px] h-[762px] md:h-[auto] sm:h-[auto] items-start justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body1"
                >
                  <span className="text-gray_900 text-[14px] font-satoshivariable">
                    Found{" "}
                  </span>
                  <span className="text-deep_purple_700 text-[14px] font-satoshivariable font-medium">
                    1,328
                  </span>
                  <span className="text-gray_900 text-[14px] font-satoshivariable">
                    {" "}
                    out of{" "}
                  </span>
                  <span className="text-deep_purple_700 text-[14px] font-satoshivariable font-medium">
                    28,900
                  </span>
                  <span className="text-gray_900 text-[14px] font-satoshivariable">
                    {" "}
                    papers
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-[16px] h-[727px] md:h-[auto] sm:h-[auto] items-start justify-start px-[8px] py-[4px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-start max-w-[772px] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="bookmark"
                      />
                      <Text
                        className="flex-1 font-medium md:max-w-[100%] sm:max-w-[100%] max-w-[740px] text-black_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        The systems biology markup language (SBML): a medium for
                        representation and exchange of biochemical network
                        models
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-[20px] pl-[32px] w-[100%]">
                      <div className="flex flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal md:max-w-[100%] sm:max-w-[100%] max-w-[740px] not-italic text-gray_700 text-left"
                              variant="body1"
                            >
                              <span className="text-deep_purple_700 text-[14px] font-satoshivariable font-medium">
                                Authors/{" "}
                              </span>
                              <span className="text-gray_700 text-[14px] font-satoshivariable">
                                M. Hucka, A. Finney, H. Sauro, H. Bolouri, J.
                                Doyle, H. Kitano, A. Arkin, B. Bornstein, D.
                                Bray, A. Cornish-Bowden, Autumn A. Cuellar, S.
                                Dronov, E. Gilles, Martin Ginkel, V. Gor, I.
                                Goryanin, W. Hedley, C. Hodgman, J. Hofmeyr, P.
                                Hunter
                              </span>
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-gray_700 text-[12px] font-satoshivariable">
                                Publication year :{" "}
                              </span>
                              <span className="text-gray_700 text-[12px] font-satoshivariable font-medium">
                                2003
                              </span>
                            </Text>
                            <div className="flex flex-row flex-wrap gap-[9px] items-start justify-start max-w-[740px] w-[100%]">
                              <Button
                                className="cursor-pointer font-normal min-w-[114px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Computer Science
                              </Button>
                              <Button
                                className="cursor-pointer font-normal min-w-[56px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Biology
                              </Button>
                              <Button
                                className="cursor-pointer font-normal min-w-[64px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Medicine
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start max-w-[740px] w-[100%]">
                            <Button
                              className="flex items-center justify-center min-w-[90px] text-center w-[auto]"
                              leftIcon={
                                <Img
                                  src="images/img_music.svg"
                                  className="mr-[10px] text-center"
                                  alt="music"
                                />
                              }
                              shape="RoundedBorder4"
                              size="lg"
                              variant="OutlineDeeppurple700_1"
                            >
                              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-deep_purple_900 text-left">
                                Abstract
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_purple_51 flex sm:flex-col flex-row gap-[10px] items-start justify-start pb-[16px] pt-[10px] px-[10px] rounded-radius8 sm:w-[100%] w-[447px]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-[24px] w-[24px]"
                      alt="lightbulb"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <Text
                        className="font-medium md:max-w-[100%] sm:max-w-[100%] max-w-[393px] text-deep_purple_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        A system biology software company that creates software
                        that can read and write in the Systems Biology Markup
                        Language.
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[81px] text-[12px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder4"
                        variant="OutlineDeeppurple700_2"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-start max-w-[772px] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="bookmark One"
                      />
                      <Text
                        className="flex-1 font-medium text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        A biochemical model of photosynthetic CO2 assimilation
                        in leaves of C3 species
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-[20px] pl-[32px] w-[100%]">
                      <div className="flex flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body1"
                            >
                              Authors/ G. Farquhar, S. V. Caemmerer, J. Berry,
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-gray_700 text-[12px] font-satoshivariable">
                                Publication year :{" "}
                              </span>
                              <span className="text-gray_700 text-[12px] font-satoshivariable font-medium">
                                1980
                              </span>
                            </Text>
                            <div className="flex flex-row flex-wrap gap-[9px] items-start justify-start max-w-[740px] w-[100%]">
                              <Button
                                className="cursor-pointer font-normal min-w-[114px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Computer Science
                              </Button>
                              <Button
                                className="cursor-pointer font-normal min-w-[56px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Biology
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start max-w-[740px] w-[100%]">
                            <Button
                              className="flex items-center justify-center min-w-[90px] text-center w-[auto]"
                              leftIcon={
                                <Img
                                  src="images/img_music.svg"
                                  className="mr-[10px] text-center"
                                  alt="music"
                                />
                              }
                              shape="RoundedBorder4"
                              size="lg"
                              variant="OutlineDeeppurple700_1"
                            >
                              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-deep_purple_900 text-left">
                                Abstract
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input
                    className="font-medium leading-[normal] p-[0] text-[16px] text-left placeholder:text-red_900 text-red_900 w-[100%]"
                    wrapClassName="flex md:w-[100%] sm:w-[100%] w-[447px]"
                    name="FrameTwentyEight"
                    placeholder="This cannot be turned into a business idea."
                    prefix={
                      <Img
                        src="images/img_lock.svg"
                        className="mr-[10px] my-[auto]"
                        alt="lock"
                      />
                    }
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillRed50"
                  ></Input>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start max-w-[772px] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="bookmark Two"
                      />
                      <Text
                        className="flex-1 font-medium text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Selenium: Biochemical Role as a Component of Glutathione
                        Peroxidase
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-[20px] pl-[32px] w-[100%]">
                      <div className="flex flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body1"
                            >
                              Authors/ J. T. Rotruck, A. L. Pope, H. Ganther, A.
                              Swanson, D. Hafeman, W. Hoekstra,
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-gray_700 text-[12px] font-satoshivariable">
                                Publication year :{" "}
                              </span>
                              <span className="text-gray_700 text-[12px] font-satoshivariable font-medium">
                                1993
                              </span>
                            </Text>
                            <div className="flex flex-row flex-wrap gap-[9px] items-start justify-start max-w-[740px] w-[100%]">
                              <Button
                                className="cursor-pointer font-normal min-w-[70px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Chemistry
                              </Button>
                              <Button
                                className="cursor-pointer font-normal min-w-[56px] not-italic text-[12px] text-center text-deep_purple_900 w-[auto]"
                                shape="RoundedBorder4"
                              >
                                Biology
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start max-w-[740px] w-[100%]">
                            <Button
                              className="flex items-center justify-center min-w-[90px] text-center w-[auto]"
                              leftIcon={
                                <Img
                                  src="images/img_music.svg"
                                  className="mr-[10px] text-center"
                                  alt="music"
                                />
                              }
                              shape="RoundedBorder4"
                              size="lg"
                              variant="OutlineDeeppurple700_1"
                            >
                              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-deep_purple_900 text-left">
                                Abstract
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_purple_51 flex sm:flex-col flex-row gap-[10px] items-start justify-start pb-[16px] pt-[10px] px-[10px] rounded-radius8 sm:w-[100%] w-[447px]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-[24px] w-[24px]"
                      alt="lightbulb One"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <Text
                        className="font-medium md:max-w-[100%] sm:max-w-[100%] max-w-[393px] text-deep_purple_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        A business idea from this would be to create a
                        supplement that contains selenium in order to help
                        people with low glutathione peroxidase activity.
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[81px] text-[12px] text-center text-white_A700 w-[auto]"
                        shape="RoundedBorder4"
                        variant="OutlineDeeppurple700_2"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[21px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-start max-w-[772px] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-[22px] w-[24px]"
                        alt="bookmark Three"
                      />
                      <Text
                        className="flex-1 font-medium text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        HADDOCK: a protein-protein docking approach based on
                        biochemical or biophysical information.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-[20px] pl-[32px] w-[100%]">
                      <div className="flex flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body2"
                            >
                              <span className="text-gray_700 text-[12px] font-satoshivariable">
                                Publication year :{" "}
                              </span>
                              <span className="text-gray_700 text-[12px] font-satoshivariable font-medium">
                                2003
                              </span>
                            </Text>
                            <div className="flex flex-row gap-[9px] items-start justify-start max-w-[740px] w-[100%]">
                              <Text
                                className="bg-gray_102 font-normal justify-center not-italic px-[8px] py-[4px] text-deep_purple_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Chemistry
                              </Text>
                              <Text
                                className="bg-gray_102 font-normal justify-center not-italic px-[8px] py-[4px] text-deep_purple_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Biology
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start max-w-[740px] w-[100%]">
                            <Button
                              className="flex items-center justify-center min-w-[90px] text-center w-[auto]"
                              leftIcon={
                                <Img
                                  src="images/img_mditextboxsearchoutline.svg"
                                  className="mr-[10px] text-center"
                                  alt="mdi:text-box-search-outline"
                                />
                              }
                              size="sm"
                              variant="OutlineDeeppurple700_1"
                            >
                              <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-deep_purple_900 text-left">
                                Abstract
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_purple_51 flex sm:flex-col flex-row gap-[10px] items-start justify-start pb-[16px] pt-[10px] px-[10px] rounded-radius8 sm:w-[100%] w-[447px]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-[24px] w-[24px]"
                      alt="lightbulb Two"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <Text
                        className="font-medium text-deep_purple_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        A business that creates a software that uses biochemical
                        and/or biophysical interaction data to study protein
                        complexes.
                      </Text>
                      <Text
                        className="bg-deep_purple_900 border border-deep_purple_700 border-solid font-medium justify-center px-[8px] py-[4px] text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        View details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_101 h-[219px] md:ml-[0] sm:ml-[0] ml-[7px] mt-[199px] w-[62%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
