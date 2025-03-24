import Image from "next/image";

import HeaderListComponent from "./components/HeaderListComponent";
import MainButtonComponent from "./components/MainButtonComponent";
import StatComponent from "./components/StatComponent";
import ADHIMIX from "@/app/img/ADHIMIX.png";
import ADIRA from "@/app/img/ADIRA.png";
import HOLCIM from "@/app/img/HOLCIM.png";
import MNC from "@/app/img/MNC.png";
import TELECOMSEL from "@/app/img/TELECOMSEL.png";
import TitleComponent from "./components/TitleComponent";
import CardComponent from "./components/CardComponent";
import Industrial from "@/app/img/Industrial.jpg";
import Commercial from "@/app/img/Commercial.jpg";
import Resedential from "@/app/img/Resedential.jpg";

export default function Home() {
  const Icons = [
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 5.30638H22.6875V3.94894C22.6875 2.8383 22.3021 1.90248 21.5312 1.14149C20.7604 0.380496 19.8125 0 18.6875 0H13.3125C12.1875 0 11.2396 0.380496 10.4688 1.14149C9.69792 1.90248 9.3125 2.8383 9.3125 3.94894V5.30638H4C2.875 5.30638 1.92708 5.6766 1.15625 6.41702C0.385417 7.15745 0 8.10355 0 9.25532V14.5C0 15.3638 0.4375 15.7957 1.3125 15.7957V26.3468C1.3125 27.0461 1.58333 27.6631 2.125 28.1979C2.66667 28.7326 3.29167 29 4 29H28C28.7083 29 29.3333 28.7326 29.875 28.1979C30.4167 27.6631 30.6875 27.0461 30.6875 26.3468V15.7957C31.5625 15.7957 32 15.3638 32 14.5V9.25532C32 8.10355 31.6146 7.15745 30.8438 6.41702C30.0729 5.6766 29.125 5.30638 28 5.30638ZM12 3.94894C12 3.57872 12.125 3.27021 12.375 3.0234C12.625 2.7766 12.9375 2.65319 13.3125 2.65319H18.6875C19.0625 2.65319 19.375 2.7766 19.625 3.0234C19.875 3.27021 20 3.57872 20 3.94894V5.30638H12V3.94894ZM4 26.3468V15.7957H12V19.7447C12 20.4851 12.2604 21.1124 12.7812 21.6266C13.3021 22.1408 13.9375 22.3979 14.6875 22.3979H17.3125C18.0625 22.3979 18.6979 22.1408 19.2188 21.6266C19.7396 21.1124 20 20.4851 20 19.7447V15.7957H28V26.3468H4ZM14.6875 19.7447V15.7957H17.3125V19.7447H14.6875ZM29.3125 13.2043H2.6875V9.25532C2.6875 8.35036 3.125 7.89787 4 7.89787H28C28.875 7.89787 29.3125 8.35036 29.3125 9.25532V13.2043Z"
        fill="white"
      />
    </svg>,
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7529 3.28125H21.3516C21.0903 3.28106 20.8397 3.38428 20.6543 3.56836L3.8584 20.3643C3.49064 20.7338 3.28418 21.234 3.28418 21.7554C3.28418 22.2768 3.49064 22.7769 3.8584 23.1465L11.8565 31.1445C12.226 31.5123 12.7262 31.7188 13.2476 31.7188C13.7689 31.7188 14.2691 31.5123 14.6387 31.1445L31.4277 14.3555C31.6118 14.1701 31.715 13.9194 31.7149 13.6582V5.25C31.7161 4.99168 31.6663 4.73567 31.5682 4.49668C31.4702 4.2577 31.3258 4.04047 31.1435 3.85749C30.9611 3.67451 30.7444 3.5294 30.5057 3.43051C30.2671 3.33161 30.0113 3.28089 29.7529 3.28125V3.28125Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 10.9375C25.8174 10.9375 25.3944 10.8092 25.0347 10.5688C24.675 10.3285 24.3946 9.98683 24.229 9.58712C24.0634 9.18741 24.0201 8.74757 24.1045 8.32324C24.1889 7.89891 24.3973 7.50913 24.7032 7.20321C25.0091 6.89728 25.3989 6.68894 25.8232 6.60453C26.2476 6.52013 26.6874 6.56345 27.0871 6.72901C27.4868 6.89458 27.8285 7.17496 28.0688 7.53469C28.3092 7.89442 28.4375 8.31735 28.4375 8.75C28.4375 9.33016 28.207 9.88656 27.7968 10.2968C27.3866 10.707 26.8302 10.9375 26.25 10.9375Z"
        fill="white"
      />
    </svg>,
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.6053 17.7031H29.6053C29.4162 17.7031 29.2615 17.8578 29.2615 18.0469V20.1094C29.2615 20.2984 29.4162 20.4531 29.6053 20.4531H40.6053C40.7943 20.4531 40.949 20.2984 40.949 20.1094V18.0469C40.949 17.8578 40.7943 17.7031 40.6053 17.7031ZM34.8475 23.5469H29.6053C29.4162 23.5469 29.2615 23.7016 29.2615 23.8906V25.9531C29.2615 26.1422 29.4162 26.2969 29.6053 26.2969H34.8475C35.0365 26.2969 35.1912 26.1422 35.1912 25.9531V23.8906C35.1912 23.7016 35.0365 23.5469 34.8475 23.5469ZM20.5088 13.8574H18.6482C18.3818 13.8574 18.167 14.0723 18.167 14.3387V24.9949C18.167 25.1496 18.24 25.2914 18.3646 25.3816L24.7627 30.048C24.9775 30.2027 25.2783 30.1598 25.433 29.9449L26.5373 28.4367V28.4324C26.692 28.2176 26.6447 27.9168 26.4299 27.7621L20.9857 23.8262V14.3387C20.99 14.0723 20.7709 13.8574 20.5088 13.8574Z"
        fill="white"
      />
      <path
        d="M34.5813 28.9566H32.0977C31.8571 28.9566 31.6293 29.0812 31.5004 29.2874C30.9547 30.1511 30.3188 30.9503 29.5883 31.6808C28.3293 32.9398 26.8641 33.9281 25.2356 34.6156C23.5469 35.3288 21.7551 35.6898 19.9074 35.6898C18.0555 35.6898 16.2637 35.3288 14.5793 34.6156C12.9508 33.9281 11.4856 32.9398 10.2266 31.6808C8.96761 30.4218 7.97933 28.9566 7.29183 27.3281C6.57855 25.6437 6.21761 23.8519 6.21761 21.9999C6.21761 20.148 6.57855 18.3605 7.29183 16.6718C7.97933 15.0433 8.96761 13.5781 10.2266 12.3191C11.4856 11.0601 12.9508 10.0718 14.5793 9.38432C16.2637 8.67104 18.0598 8.3101 19.9074 8.3101C21.7594 8.3101 23.5512 8.67104 25.2356 9.38432C26.8641 10.0718 28.3293 11.0601 29.5883 12.3191C30.3188 13.0496 30.9547 13.8488 31.5004 14.7124C31.6293 14.9187 31.8571 15.0433 32.0977 15.0433H34.5813C34.8778 15.0433 35.0668 14.7339 34.9336 14.4718C32.1321 8.89877 26.4516 5.27651 20.1094 5.20346C10.8239 5.08744 3.11097 12.6886 3.09378 21.9656C3.07659 31.2597 10.609 38.8007 19.9032 38.8007C26.327 38.8007 32.102 35.1656 34.9336 29.5281C35.0668 29.266 34.8735 28.9566 34.5813 28.9566Z"
        fill="white"
      />
    </svg>,
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.242 10.925C33.2156 10.6589 33.1222 10.4039 32.9705 10.1837C32.8187 9.96355 32.6136 9.78551 32.3743 9.66624L19.7076 3.33291C19.4876 3.22284 19.2451 3.16553 18.9991 3.16553C18.7531 3.16553 18.5105 3.22284 18.2905 3.33291L5.62387 9.66624C5.38522 9.78619 5.18071 9.96445 5.02931 10.1845C4.87791 10.4045 4.78452 10.6592 4.75779 10.925C4.74037 11.0944 3.2362 27.9727 18.357 34.6972C18.5591 34.7883 18.7782 34.8355 18.9999 34.8355C19.2215 34.8355 19.4407 34.7883 19.6427 34.6972C34.7635 27.9727 33.2594 11.096 33.242 10.925ZM18.9999 31.5036C8.28229 26.3229 7.77562 15.2665 7.8627 12.0887L18.9999 6.52016L30.1291 12.0856C30.1877 15.2348 29.6098 26.3641 18.9999 31.5036Z"
        fill="white"
      />
      <path
        d="M17.4163 19.9281L13.7857 16.2975L11.5469 18.5364L17.4163 24.4058L26.4524 15.3697L24.2135 13.1309L17.4163 19.9281Z"
        fill="white"
      />
    </svg>,
  ];
  return (
    <main>
      {/* Фоновый блок */}
      <div className="bg-img relative pb-10">
        <div className="max-w-7xl mx-auto px-8">
          {/* HEADER */}
          <section className="flex justify-between items-center py-8 pt-12">
            <div>
              <p className="text-lg text-white font-light">General</p>
              <p className="text-2xl font-semibold pt-2 text-[#0A72AD]">
                Project
              </p>
            </div>
            <HeaderListComponent
              title1={"Home"}
              title2={"Services"}
              title3={"Find a Team"}
            />
            <HeaderListComponent
              title1={"Articles"}
              title2={"Portfolio"}
              title3={"Contact us"}
            />
          </section>
          {/* HERO */}
          <section className="pb-11">
            <div className="">
              <h1 className="max-w-2xl text-6xl text-white pb-6 leading-25 font-medium">
                We Provide Architectural design and Construction
              </h1>
              <p className="max-w-xl second text-lg leading-10 font-normal pb-15">
                ​More than 100 building and housing projects that we have built.
                The building owner chose us over other contractors in Jakarta,
                because our work is different
              </p>
              <MainButtonComponent title={"Discover More"} />
            </div>
          </section>
          <div className="flex justify-between flex-wrap xl:flex-column">
            {/* STAT */}
            <section>
              <div>
                <ul className="flex gap-13">
                  <li>
                    <StatComponent
                      number={"300"}
                      text={["Happy", <br key="br" />, "Client"]}
                    />
                  </li>
                  <li>
                    <StatComponent
                      number={"900"}
                      text={["Amazing", <br key="br" />, "Projects"]}
                    />
                  </li>
                  <li>
                    <StatComponent
                      number={"20"}
                      text={["Awards", <br key="br" />, "Wining"]}
                    />
                  </li>
                </ul>
              </div>
            </section>
            {/* TEXT */}
            <section className="bg-gradient-to-r from-[#60BBEE] to-[#0A72AD] absolute right-0">
              <ul className="flex justify-between gap-10 py-9 pl-8 pr-21 xl:">
                <li>
                  <div>
                    <p className="text-lg text-white font-light">General</p>
                    <p className="text-2xl font-semibold pt-4 text-white">
                      Project
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-start flex-wrap gap-1">
                      <p className="font-medium text-white">
                        <span className="text-4xl pr-4 font-bold">25</span>
                        <span className="text-lg">Years</span>
                      </p>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90979 3.58678L9.20003 2.29883C9.41177 2.08717 9.6989 1.96826 9.99829 1.96826C10.2977 1.96826 10.5848 2.08717 10.7965 2.29883L12.0891 3.58792C12.3005 3.79976 12.5874 3.91896 12.8868 3.91934H14.9187C15.2181 3.91934 15.5053 4.0383 15.7171 4.25005C15.9288 4.4618 16.0478 4.74899 16.0478 5.04844V7.08037C16.0479 7.37952 16.1666 7.66641 16.3781 7.87805L17.6694 9.16829C17.8811 9.38003 18 9.66716 18 9.96655C18 10.2659 17.8811 10.5531 17.6694 10.7648L16.3792 12.0562C16.1666 12.2676 16.0478 12.5545 16.0478 12.8539V14.8858C16.0478 15.1853 15.9288 15.4724 15.7171 15.6842C15.5053 15.8959 15.2181 16.0149 14.9187 16.0149H12.8868C12.5876 16.015 12.3007 16.1338 12.0891 16.3452L10.7988 17.6366C10.5871 17.8482 10.3 17.9671 10.0006 17.9671C9.70118 17.9671 9.41405 17.8482 9.20232 17.6366L7.91093 16.3463C7.69951 16.1338 7.41267 16.0149 7.11325 16.0149H5.08132C4.45735 16.0149 3.95222 15.5098 3.95222 14.8858V12.8539C3.95222 12.5545 3.83337 12.2676 3.62195 12.0562L2.33057 10.7659C2.1189 10.5542 2 10.2671 2 9.96769C2 9.6683 2.1189 9.38117 2.33057 9.16943L3.61966 7.87691C3.8315 7.66545 3.9507 7.37854 3.95108 7.07923V5.0473C3.95108 4.74784 4.07004 4.46065 4.28179 4.2489C4.49353 4.03716 4.78072 3.9182 5.08018 3.9182H7.11211C7.41142 3.91782 7.69833 3.79862 7.90979 3.58678Z"
                          stroke="white"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                    <p className="font-bold text-2xl text-white">Operated</p>
                  </div>
                </li>
                <li>
                  <p className="max-w-83 text-sm text-white leading-7 font-normal">
                    As a trusted general project that has been operating for 25
                    years, our commitment is always to prioritize our client
                    satisfaction
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      {/* SPONSORS */}
      <section className="py-24">
        <ul className="flex items-center max-w-7xl mx-auto px-8 gap-24 flex-wrap">
          <li>
            <Image src={ADIRA} alt="Adira Finance" className="" />
          </li>
          <li>
            <Image src={ADHIMIX} alt="ADHIMIX RMC Indonesia" className="" />
          </li>
          <li>
            <Image src={HOLCIM} alt="Holcim" className="" />
          </li>
          <li>
            <Image src={MNC} alt="MNC" className="" />
          </li>
          <li>
            <Image src={TELECOMSEL} alt="Telkomsel" className="" />
          </li>
        </ul>
      </section>
      {/* SERVICES */}
      <div className="bg-base-200 relative pb-10">
        <section className=" py-20 max-w-7xl mx-auto px-8">
          <div className="items-center pb-20">
            <TitleComponent
              title={"Our Excellent Services"}
              text={
                "Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"
              }
            />
          </div>
          <div>
            <ul className="flex flex-wrap gap-21 list-none p-0 m-0 xl:flex-nowrap">
              <li>
                <CardComponent
                  child={
                    <Image
                      src={Industrial}
                      alt="Industrial Building"
                      className="outline-[15px] w-92 h-72"
                    />
                  }
                  title={"Industrial"}
                  text={
                    "Industrial development is our main line of business. We do Factory Construction, Warehouse and others"
                  }
                />
              </li>
              <li>
                <CardComponent
                  child={
                    <Image
                      src={Commercial}
                      alt="Commercial Building"
                      className="outline-[15px] w-92 h-72"
                    />
                  }
                  title={"Commercial"}
                  text={
                    "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings"
                  }
                />
              </li>
              <li>
                <CardComponent
                  child={
                    <Image
                      src={Resedential}
                      alt="Resedential Building"
                      className="outline-[15px] w-92 h-72"
                    />
                  }
                  title={"Resedential"}
                  text={
                    "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments"
                  }
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* DIFFERENT */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="px-5 pb-10">
          <div className="w-23 h-2 bg-blue-500  bg-gradient-to-r from-[#60BBEE] to-[#0A72AD]" />
          <TitleComponent
            title={"What Make Us Different?"}
            text={
              "Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services"
            }
          />
        </div>

        <div>
          <ul className="flex">
            <li>
              <CardComponent
                child={
                  <div className="bg-icon rounded-full w-[94px] h-[94px] px-2.5 py-2.5">
                    <div className="bg-[#2387C0] w-[74px] h-[74px] pt-[22px] pl-[21px] rounded-full">
                      {Icons[0]}
                    </div>
                  </div>
                }
                title={"Experienced"}
                text={
                  "Our experience of 25 years of building and making achievements in the world of development"
                }
              />
            </li>
            <li>
              <CardComponent
                child={
                  <div className="bg-icon rounded-full w-[94px] h-[94px] px-2.5 py-2.5">
                    <div className="bg-[#2387C0]  w-[74px] h-[74px] pt-[19px] pl-[19px]  rounded-full">
                      {Icons[1]}
                    </div>
                  </div>
                }
                title={"Competitive Price"}
                text={
                  "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest"
                }
              />
            </li>
            <li>
              <CardComponent
                child={
                  <div className="bg-icon rounded-full w-[94px] h-[94px] px-2.5 py-2.5">
                    <div className="bg-[#2387C0] w-[74px] h-[74px] pt-[15px] pl-[18px] rounded-full">
                      {Icons[2]}
                    </div>
                  </div>
                }
                title={"On Time"}
                text={
                  "We prioritize the quality of our work and finish it on time"
                }
              />
            </li>
            <li>
              <CardComponent
                child={
                  <div className="bg-icon rounded-full w-[94px] h-[94px] px-2.5 py-2.5">
                    <div className="bg-[#2387C0] w-[74px] h-[74px] pt-[18px] pl-[18px] rounded-full">
                      {Icons[3]}
                    </div>
                  </div>
                }
                title={"Best Materials"}
                text={
                  "The material determines the building itself so we recommend that you use the best & quality materials in its class."
                }
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
