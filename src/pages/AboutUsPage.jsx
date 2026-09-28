import technology from "../assets/technology.png";
import BrandLogos from "../components/BrandLogos";
import TeamPage from "./TeamPage";
import video from "../assets/vid.jpg";
import workImage from "../assets/img1.jpg";

const AboutUsPage = () => {
  return (
    <div className="w-full bg-white">
      
      <section className="relative w-full h-[729px] bg-white overflow-hidden max-md:h-[1071px]">
        <div
          className="
            absolute w-[632px] h-[612px] left-[742px] top-[117px]
            max-md:w-[387px] max-md:h-[440px] max-md:left-1/2 max-md:top-[631px]
            max-md:-translate-x-1/2
          "
        >
          <div
            className="
              absolute w-[484.06px] h-[484.06px] left-[58.4px] top-0
              rounded-full bg-[#FFE9EA]
              max-md:w-[295.65px] max-md:h-[295.65px]
              max-md:left-[39.67px] max-md:top-[35.26px]
            "
          />

          <div
            className="
              absolute w-[77.39px] h-[77.39px] left-0 top-[11.96px]
              rounded-full bg-[#FFE9EA]
              max-md:w-[47.27px] max-md:h-[47.27px]
              max-md:left-[4px] max-md:top-[42.56px]
            "
          />

          <img
            src={technology}
            alt=""
            className="
              absolute w-[650px] h-[760px]
              left-[calc(50%-325px+3.5px)] top-[-56px]
              object-contain
              max-md:w-[375.73px] max-md:h-[439.19px]
              max-md:left-1/2 max-md:top-[0.81px]
              max-md:-translate-x-1/2
            "
          />

          <div
            className="
              absolute w-[30.25px] h-[30.25px] left-[554.42px] top-[247.66px]
              rounded-full bg-[#FFE9EA]
              max-md:w-[18.48px] max-md:h-[18.48px]
              max-md:left-[342.62px] max-md:top-[186.52px]
            "
          />

          <div
            className="
              absolute w-[14.78px] h-[14.78px] left-[576.94px] top-[121.72px]
              rounded-full bg-[#977DF4]
              max-md:w-[9.02px] max-md:h-[9.02px]
              max-md:left-[356.37px] max-md:top-[109.6px]
            "
          />

          <div
            className="
              absolute w-[14.78px] h-[14.78px] left-[23.92px] top-[408.78px]
              rounded-full bg-[#977DF4]
              max-md:w-[9.02px] max-md:h-[9.02px]
              max-md:left-[18.61px] max-md:top-[284.92px]
            "
          />
        </div>

        <div
          className="
            absolute w-[1050px] h-[545px]
            left-[calc(50%-525px)] top-[104px]
            py-[112px] box-border
            max-md:relative max-md:w-full max-md:h-[1071px]
            max-md:left-0 max-md:top-0 max-md:p-0
          "
        >
          <div
            className="
              flex flex-row items-center gap-[30px]
              w-[1044px] h-[321px]
              max-md:w-full max-md:h-[1071px]
              max-md:flex-col max-md:gap-[41px]
            "
          >
            <div
              className="
                flex flex-col items-start gap-[35px]
                w-[599px] h-[321px]
                max-md:w-[418px] max-md:h-[590px]
                max-md:justify-center max-md:items-center
                max-md:gap-[15px] max-md:text-center
                max-md:translate-y-[200px]
              "
            >
              <h5
                className="
                  w-[200px] h-[24px] m-0
                  font-['Montserrat'] text-[16px] leading-[24px]
                  font-bold tracking-[0.1px] text-[#252B42]
                  max-md:hidden
                "
              >
                ABOUT COMPANY
              </h5>

              <h1
                className="
                  w-[542px] h-[80px] m-0
                  font-['Montserrat'] text-[58px] leading-[80px]
                  font-bold tracking-[0.2px] text-[#252B42]
                  max-md:w-auto max-md:h-[50px]
                  max-md:whitespace-nowrap
                  max-md:text-[40px] max-md:leading-[50px]
                  max-md:text-center
                "
              >
                ABOUT US
              </h1>

              <p
                className="
                  w-[376px] h-[60px] m-0
                  font-['Montserrat'] text-[20px] leading-[30px]
                  font-normal tracking-[0.2px] text-[#737373]
                  max-md:w-[277px] max-md:h-[120px]
                  max-md:text-center
                "
              >
                We know how large objects will act,
                but things on a small scale
              </p>

              <button
                className="
                  w-[193px] h-[52px]
                  px-[40px] py-[15px]
                  border-0 rounded-[5px]
                  bg-[#23A6F0] text-white
                  font-['Montserrat'] text-[14px] leading-[22px]
                  font-bold tracking-[0.2px]
                  cursor-pointer whitespace-nowrap
                "
              >
                Get Quote Now
              </button>
            </div>

            <div className="w-[415px] h-[280px] max-md:w-[387px] max-md:h-[440px]" />
          </div>
        </div>
      </section>

       
      <section
        className="
          w-full h-[236px] bg-white
          max-md:h-[500px]
        "
      >
        <div
          className="
            w-[1440px] h-[236px] mx-auto
            px-0 py-[24px] box-border
            max-md:w-[381px] max-md:h-[500px]
            max-md:py-[80px]
          "
        >
          <div
            className="
              flex flex-row justify-center items-center gap-[60px]
              w-[1018px] h-[188px] mx-auto
              max-md:w-[381px] max-md:h-[340px]
              max-md:flex-col max-md:gap-[60px]
            "
          >
            <div
              className="
                flex flex-col items-start
                w-[394px] h-[188px]
                px-0 py-[24px] box-border
                max-md:w-[381px] max-md:h-[220px]
                max-md:items-center
                max-md:gap-[80px]
              "
            >
              <p
                className="
                  w-[116px] h-[20px] m-0 mb-[24px]
                  font-['Montserrat'] text-[14px] leading-[20px]
                  font-normal tracking-[0.2px] text-[#E74040]
                  max-md:m-0 max-md:text-center
                "
              >
                Problems trying
              </p>

              <h2
                className="
                  w-[394px] h-[96px] m-0
                  font-['Montserrat'] text-[24px] leading-[32px]
                  font-bold tracking-[0.1px] text-[#252B42]
                  max-md:w-[269px] max-md:h-[128px]
                  max-md:text-center
                "
              >
                Met minimum Mollie non desert
                Alamo est sit cliquey dolor do
                met sent.
              </h2>
            </div>

            <div
              className="
                w-[529px] h-[40px]
                max-md:w-[306px] max-md:h-[60px]
              "
            >
              <p
                className="
                  w-[545px] h-[40px] m-0
                  font-['Montserrat'] text-[14px] leading-[20px]
                  font-normal tracking-[0.2px] text-[#737373]
                  max-md:w-[353px] max-md:h-[60px]
                "
              >
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="
          w-full h-[264px] bg-white
          max-md:h-[1006px]
        "
      >
        <div
          className="
            w-[1050px] h-[264px] mx-auto
            flex items-center
            max-md:w-[414px] max-md:h-[1006px]
            max-md:py-[100px] max-md:box-border
            max-md:flex-col max-md:items-center
          "
        >
          <div
            className="
              w-full
              max-md:w-[329px] max-md:h-[806px]
              max-md:py-[45px] max-md:box-border
              max-md:flex max-md:flex-col max-md:items-center
            "
          >
            <div
              className="
                w-full flex flex-row justify-between items-center
                max-md:w-[241px] max-md:h-[716px]
                max-md:flex-col max-md:items-start
                max-md:gap-[100px]
              "
            >
              <div
                className="
                  flex flex-col items-center p-0
                  max-md:w-[240px] max-md:h-[104px]
                "
              >
                <h1
                  className="
                    m-0 text-[58px] leading-[80px] font-bold
                    text-center text-[#252B42]
                  "
                >
                  15K
                </h1>
                <h5
                  className="
                    m-0 text-[16px] leading-[24px] font-bold
                    text-center text-[#737373]
                  "
                >
                  Happy Customers
                </h5>
              </div>

              <div
                className="
                  flex flex-col items-center p-0
                  max-md:w-[240px] max-md:h-[104px]
                "
              >
                <h1
                  className="
                    m-0 text-[58px] leading-[80px] font-bold
                    text-center text-[#252B42]
                  "
                >
                  150K
                </h1>
                <h5
                  className="
                    m-0 text-[16px] leading-[24px] font-bold
                    text-center text-[#737373]
                  "
                >
                  Monthly Visitors
                </h5>
              </div>

              <div
                className="
                  flex flex-col items-center p-0
                  max-md:w-[240px] max-md:h-[104px]
                "
              >
                <h1
                  className="
                    m-0 text-[58px] leading-[80px] font-bold
                    text-center text-[#252B42]
                  "
                >
                  15
                </h1>
                <h5
                  className="
                    m-0 text-[16px] leading-[24px] font-bold
                    text-center text-[#737373]
                  "
                >
                  Countries Worldwide
                </h5>
              </div>

              <div
                className="
                  flex flex-col items-center p-0
                  max-md:w-[240px] max-md:h-[104px]
                "
              >
                <h1
                  className="
                    m-0 text-[58px] leading-[80px] font-bold
                    text-center text-[#252B42]
                  "
                >
                  100+
                </h1>
                <h5
                  className="
                    m-0 text-[16px] leading-[24px] font-bold
                    text-center text-[#737373]
                  "
                >
                  Top Partners
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamPage />

     
      <section className="w-full bg-[#FAFAFA]">
        <div className="w-full">
          <div
            className="
              flex flex-col items-center text-center gap-[24px]
              bg-[#FAFAFA]
              max-md:w-full
            "
          >
            <h2
              className="
                m-0
                font-['Montserrat'] text-[40px] leading-[50px]
                font-bold text-[#252B42]
                max-md:w-[269px]
                max-md:text-center
              "
            >
              Big Companies Are Here
            </h2>

            <p
              className="
                w-[600px] m-0
                font-['Montserrat'] text-[20px] leading-[30px]
                text-[#737373]
                max-md:w-[353px]
                max-md:text-[14px] max-md:leading-[20px]
                max-md:text-center
              "
            >
              Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <BrandLogos />
        </div>
      </section>
 
      <section
        className="
          w-full h-[764px] bg-white
          max-md:h-[477px] max-md:relative
        "
      >
        <div
          className="
            relative w-[1050px] h-[764px] mx-auto
            max-md:w-[307px] max-md:h-[316px]
            max-md:mt-[81px]
          "
        >
          <div
            className="
              absolute w-[989px] h-[540px]
              left-[31px] top-[112px]
              rounded-[20px] overflow-hidden bg-white
              max-md:w-[307px] max-md:h-[316px]
              max-md:left-0 max-md:top-0
            "
          >
            <img
              src={video}
              alt="Video"
              className="
                absolute w-full h-full left-0 top-0 object-cover
              "
            />

            <div
              className="
                absolute inset-0
                bg-[linear-gradient(180deg,rgba(0,0,0,0)_14.58%,rgba(56,56,56,0.84)_100%)]
              "
            />

            <button
              className="
                absolute w-[92.6px] h-[92.6px]
                left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                border-0 rounded-full
                bg-[#23A6F0] text-white text-[28px]
                cursor-pointer
                max-md:w-[56.95px] max-md:h-[56.95px]
                max-md:text-[20px]
                max-md:flex max-md:items-center max-md:justify-center
              "
            >
              ▶
            </button>
          </div>
        </div>
      </section>

       
      <section
        className="
          relative w-full h-[636px] bg-[#2A7CC7]
          max-md:h-[520px]
        "
      >
        <div
          className="
            absolute left-[calc(50%+130px)] top-0
            w-[calc(50%-130px)] h-[636px]
            overflow-hidden
            max-md:hidden
          "
        >
          <img
            src={workImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="
            w-[1050px] h-[636px] mx-auto
            py-[112px] box-border
            flex items-center
            max-md:w-[414px] max-md:h-[520px]
            max-md:py-[60px]
            max-md:justify-start
          "
        >
          <div
            className="
              w-[438px]
              flex flex-col items-start gap-[24px]
              max-md:w-[414px] max-md:h-[388px]
              max-md:px-0 max-md:py-[30px]
              max-md:box-border
              max-md:items-center
            "
          >
            <h5
              className="
                m-0 text-[16px] leading-[24px]
                font-bold tracking-[0.1px] text-white
                max-md:w-[128px] max-md:text-center
              "
            >
              WORK WITH US
            </h5>

            <h2
              className="
                m-0 text-[40px] leading-[50px]
                font-bold tracking-[0.2px] text-white
                max-md:w-[274px] max-md:h-[100px]
                max-md:text-center
              "
            >
              Now Let’s grow Yours
            </h2>

            <p
              className="
                m-0 w-[440px]
                text-[14px] leading-[20px]
                font-normal tracking-[0.2px] text-white
                max-md:w-[257px] max-md:h-[80px]
                max-md:text-center
              "
            >
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
              century
            </p>

            <button
              className="
                w-[130px] h-[52px]
                px-[40px] py-[15px]
                box-border
                bg-transparent
                border border-[#FAFAFA]
                rounded-[5px]
                text-[#FAFAFA]
                text-[14px] leading-[22px]
                font-bold
              "
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;