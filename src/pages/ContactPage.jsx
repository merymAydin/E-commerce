import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import questions from "../assets/questions.jpg";
import contactImage from "../assets/shop-hero-1-product-slide-1.jpg"
import workWithUsImage from "../assets/c2.jpg"

const ContactPage = () => {
  return (
    <>

      <section
        className="
    relative w-full h-[585px] bg-white

    max-md:h-[686px]
  "
      >
        <div
          className="
      w-[1050px] h-[576px] mx-auto
      py-[112px]
      flex flex-col items-center
      gap-[96px]

      max-md:w-[287px]
      max-md:h-[686px]
      max-md:py-[112px]
      max-md:box-border
    "
        >
          <div
            className="
        flex flex-col items-center
        gap-[36px]
        w-[607px] h-[352px]

        max-md:w-[287px]
        max-md:h-[462px]
      "
          >
            <div
              className="
          flex flex-col items-center
          gap-[30px]
          w-[607px] h-[352px]

          max-md:w-[287px]
          max-md:h-[462px]
        "
            >
              <h2
                className="
            w-[479px] h-[100px] m-0
            font-['Montserrat']
            font-bold text-[40px] leading-[50px]
            tracking-[0.2px]
            text-[#252B42]
            text-center

            max-md:w-[264px]
            max-md:h-[150px]
            max-md:text-[40px]
            max-md:leading-[50px]
          "
              >
                Get answers to all your questions.
              </h2>

              <p
                className="
            w-[607px] h-[60px] m-0
            font-['Montserrat']
            font-normal text-[20px] leading-[30px]
            tracking-[0.2px]
            text-[#737373]
            text-center

            max-md:w-[287px]
            max-md:h-[120px]
          "
              >
                Problems trying to resolve the conflict between the two
                major realms of Classical physics:
              </p>

              <button
                className="
            flex flex-col items-center
            px-[40px] py-[15px]
            gap-[10px]
            w-[268px] h-[52px]
            bg-[#23A6F0]
            rounded-[5px]
            border-0
            font-['Montserrat']
            font-bold text-[14px] leading-[22px]
            tracking-[0.2px]
            text-white
            text-center
            whitespace-nowrap
            cursor-pointer
          "
              >
                CONTACT OUR COMPANY
              </button>

              <div
                className="
            flex flex-row items-start
            px-[10px]
            gap-[34px]
            w-[242px] h-[50px]
          "
              >
                <FaTwitter
                  className="w-[30px] h-[24.49px] text-[#BDBDBD]"
                />

                <FaFacebookSquare
                  className="w-[30px] h-[30px] text-[#BDBDBD]"
                />

                <FaInstagram
                  className="w-[30px] h-[30px] text-[#BDBDBD]"
                />

                <FaLinkedin
                  className="w-[30px] h-[29.88px] text-[#BDBDBD]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[446px] bg-white">
        <img
          src={questions}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="
      relative
      w-[1050px] h-[446px]
      mx-auto
      pt-[110px] pb-[112px]
      box-border
      flex flex-col items-center
      gap-[24px]

      max-md:w-[287px]
      max-md:h-[468px]
      max-md:pt-[112px]
      max-md:pb-0
    "
        >
          <div
            className="
    flex flex-col items-center
    gap-[36px]
    w-[607px] h-[300px]

    max-md:w-[287px]
    max-md:h-[284px]
  "
          >
            <div
              className="
    flex flex-col items-center
    gap-[30px]
    w-[447px] h-[174px]

    max-md:w-[287px]
    max-md:h-[284px]
    max-md:gap-[50px]
  "
            >
              <h2
                className="
    w-[218px] h-[100px]
    m-0
    font-['Montserrat']
    font-bold
    text-[40px]
    leading-[50px]
    tracking-[0.2px]
    text-[#252B42]
    text-center

    md:w-[433px]
    md:h-[50px]
    md:whitespace-nowrap
  "
              >
                Questions & Answers
              </h2>

              <p
                className="
            w-[447px] h-[40px] m-0
            font-medium text-[14px] leading-[20px]
            tracking-[0.2px]
            text-[#737373]
            text-center

            max-md:w-[287px]
            max-md:h-[60px]
          "
              >
                Problems trying to resolve the conflict between the two
                major realms of Classical physics:
              </p>

              <h6
                className="
            w-[96px] h-[24px] m-0
 
            font-bold text-[14px] leading-[24px]
            tracking-[0.2px]
            text-[#23A6F0]
            text-center
            whitespace-nowrap
          "
              >
                CONTACT US
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[757px] bg-[#252B42] overflow-hidden">
  <img
  src={contactImage}
  alt=""
  className="
    absolute inset-0
    w-full h-full
    object-cover object-right-bottom
    max-md:object-[52%_center]
  "
/>

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent max-md:hidden" />

  <div
    className="
      relative
      w-[1050px]
      min-h-[757px]
      mx-auto
      py-[112px]
      flex flex-col items-center
      gap-[96px]

      max-md:w-[287px]
      max-md:min-h-[1000px]
      max-md:mx-auto
      max-md:py-[40px]
      max-md:gap-[36px]
    "
  >
    <div
      className="
        w-[1043px]
        flex flex-row
        items-center
        gap-[30px]

        max-md:w-[287px]
        max-md:flex-col
        max-md:items-center
        max-md:gap-[36px]
      "
    >
      <div
        className="
          w-[497px]
          flex flex-col
          items-start
          gap-[40px]

          max-md:w-[287px]
          max-md:items-center
          max-md:gap-[36px]
        "
      >
        <div
          className="
            w-[367px]
            flex flex-col
            items-start
            gap-[36px]

            max-md:w-[287px]
            max-md:items-center
            max-md:gap-[30px]
          "
        >
          <h2
            className="
              w-[269px]
              h-[50px]
              m-0
              whitespace-nowrap
              font-['Montserrat']
              font-bold
              text-[40px]
              leading-[50px]
              tracking-[0.2px]
              text-white

              max-md:w-[218px]
              max-md:h-[100px]
              max-md:whitespace-normal
              max-md:text-[40px]
              max-md:leading-[50px]
              max-md:text-center
            "
          >
            CONTACT US
          </h2>

          <p
            className="
              w-[367px]
              h-[60px]
              m-0
              font-['Montserrat']
              font-normal
              text-[14px]
              leading-[20px]
              tracking-[0.2px]
              text-white

              max-md:w-[287px]
              max-md:h-[60px]
              max-md:text-[14px]
              max-md:leading-[20px]
              max-md:text-center
            "
          >
            Problems trying to resolve the conflict between the two major
            realms of Classical physics:
          </p>

          <button
            className="
              w-[176px]
              h-[52px]
              flex items-center justify-center
              px-[40px]
              py-[15px]
              bg-[#23A6F0]
              rounded-[5px]
              border-0
              font-['Montserrat']
              font-bold
              text-[14px]
              leading-[22px]
              tracking-[0.2px]
              text-white
              text-center
              whitespace-nowrap

              max-md:w-[176px]
              max-md:h-[52px]
              max-md:px-[40px]
              max-md:py-[15px]
              max-md:text-[14px]
              max-md:leading-[22px]
            "
          >
            CONTACT US
          </button>
        </div>
      </div>

      <div className="w-[243px] flex flex-col items-center gap-[5px] max-md:hidden">
        <div className="w-[273px] h-[264px] p-[25px] flex flex-col items-start gap-[16px]">
          <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
            Paris
          </h3>

          <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white">
            1901 Thorn ridge Cir.
          </p>

          <div className="w-[58px] border-t-2 border-[#23A6F0]" />

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            75000 Paris
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Phone : +451 215 215
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Fax : +451 215 215
          </p>
        </div>

        <div className="w-[297px] h-[264px] p-[25px] flex flex-col items-start gap-[16px]">
          <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
            Berlin
          </h3>

          <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white">
            4140 Parker Rd.
          </p>

          <div className="w-[58px] border-t-2 border-[#23A6F0]" />

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            75000 Paris
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Phone : +451 215 215
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Fax : +451 215 215
          </p>
        </div>
      </div>

      <div className="w-[244px] flex flex-col items-center gap-[5px] max-md:hidden">
        <div className="w-[282px] h-[264px] p-[25px] flex flex-col items-start gap-[16px]">
          <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
            New York
          </h3>

          <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white">
            2715 Ash Dr. San Jose,
          </p>

          <div className="w-[58px] border-t-2 border-[#23A6F0]" />

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            75000 Paris
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Phone : +451 215 215
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Fax : +451 215 215
          </p>
        </div>

        <div className="w-[281px] h-[264px] p-[25px] flex flex-col items-start gap-[16px]">
          <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
            London
          </h3>

          <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white">
            3517 W. Gray St. Utica,
          </p>

          <div className="w-[58px] border-t-2 border-[#23A6F0]" />

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            75000 Paris
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Phone : +451 215 215
          </p>

          <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
            Fax : +451 215 215
          </p>
        </div>
      </div>
    </div>

    <div
      className="
        hidden
        max-md:flex
        max-md:w-[287px]
        max-md:flex-col
        max-md:items-center
        max-md:gap-[36px]
      "
    >
      <div className="w-[287px] flex flex-col items-center gap-[16px]">
        <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
          Paris
        </h3>

        <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white text-center">
          1901 Thorn ridge Cir.
        </p>

        <div className="w-[58px] border-t-2 border-[#23A6F0]" />

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          75000 Paris
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Phone : +451 215 215
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Fax : +451 215 215
        </p>
      </div>

      <div className="w-[287px] flex flex-col items-center gap-[16px]">
        <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
          Berlin
        </h3>

        <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white text-center">
          4140 Parker Rd.
        </p>

        <div className="w-[58px] border-t-2 border-[#23A6F0]" />

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          75000 Paris
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Phone : +451 215 215
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Fax : +451 215 215
        </p>
      </div>

      <div className="w-[287px] flex flex-col items-center gap-[16px]">
        <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
          New York
        </h3>

        <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white text-center">
          2715 Ash Dr. San Jose,
        </p>

        <div className="w-[58px] border-t-2 border-[#23A6F0]" />

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          75000 Paris
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Phone : +451 215 215
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Fax : +451 215 215
        </p>
      </div>

      <div className="w-[287px] flex flex-col items-center gap-[16px]">
        <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] text-white">
          London
        </h3>

        <p className="font-['Montserrat'] text-[20px] leading-[30px] text-white text-center">
          3517 W. Gray St. Utica,
        </p>

        <div className="w-[58px] border-t-2 border-[#23A6F0]" />

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          75000 Paris
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Phone : +451 215 215
        </p>

        <p className="font-['Montserrat'] font-bold text-[16px] leading-[24px] text-[#ECECEC]">
          Fax : +451 215 215
        </p>
      </div>
    </div>
  </div>
</section>


<section className="relative w-full h-[520px] bg-[#2A7CC7] overflow-hidden md:h-[446px]">
  <img
    src={workWithUsImage}
    alt=""
    className="
      absolute
      right-0
      top-0
      h-full
      w-[590px]
      object-cover
      hidden md:block
    "
  />

  <div
    className="
      relative
      w-[414px]
      h-[388px]
      mx-auto
      mt-[60px]
      py-[30px]
      flex
      flex-col
      items-center
      gap-[36px]
      rounded-[2px]

      md:absolute
      md:left-[90px]
      md:top-0
      md:mt-0
      md:w-[650px]
      md:h-[446px]
      md:items-start
      md:justify-center
      md:px-[40px]
      md:py-0
    "
  >
    <div
      className="
        w-[272px]
        flex
        flex-col
        items-center
        gap-[24px]

        md:w-[500px]
        md:items-start
      "
    >
      <h5
        className="
          w-[140px]
          h-[24px]
          m-0
          font-['Montserrat']
          font-bold
          text-[16px]
          leading-[24px]
          tracking-[0.1px]
          text-[#FFFFFF]
          text-center

          md:text-left
        "
      >
        WORK WITH US
      </h5>

      <h2
        className="
          w-[274px]
          h-[100px]
          m-0
          font-['Montserrat']
          font-bold
          text-[40px]
          leading-[50px]
          tracking-[0.2px]
          text-[#FFFFFF]
          text-center

          md:w-[500px]
          md:h-auto
          md:whitespace-nowrap
          md:text-left
        "
      >
        Now Let’s grow Yours
      </h2>

      <p
        className="
          w-[257px]
          h-[80px]
          m-0
          font-['Montserrat']
          font-normal
          text-[14px]
          leading-[20px]
          tracking-[0.2px]
          text-[#FFFFFF]
          text-center

          md:w-[500px]
          md:h-auto
          md:text-left
        "
      >
        The gradual accumulation of information about atomic and small-scale
        behavior during the first quarter of the 20th
      </p>

      <button
        className="
          box-border
          w-[130px]
          h-[52px]
          flex
          items-center
          justify-center
          px-[40px]
          py-[15px]
          border
          border-[#FAFAFA]
          rounded-[5px]
          bg-transparent
          font-['Montserrat']
          font-bold
          text-[14px]
          leading-[22px]
          tracking-[0.2px]
          text-[#FAFAFA]
          text-center

          md:self-start
        "
      >
        Button
      </button>
    </div>
  </div>
</section>



    </>
  );
};

export default ContactPage;