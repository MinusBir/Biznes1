import React from "react";
import cls from "./BurgerBottom.module.css";
import Image from "next/image";
import biznes from "../../public/biznes.jpg";
import aaa from "../../public/aaa.jpg";
import bbbb from '../../public/aaaaa.jpg'

export default function BurgerBottom() {
  return (
    <>
      <div className={cls.ContainerMarketing}>
        <h1 className={cls.MarketingLogo}>MARKETING</h1>
        <div className={cls.container}>
          <div className={cls.contentLeft}>
            <div className={cls.Bigimgg}>
              <div className={cls.BIGimg}>
                <Image
                  className={cls.imgggg}
                  src={biznes}
                  alt="Picture of the author"
                />
              </div>
            </div>

            <div className={cls.teexxtt}>
              <h1 className={cls.LogoTitle}>
                qqqo1atbardosh va. eng kuchli SMM agenstvo ochish uchun
                nimalarni bilish kerak: Doniyor
              </h1>
              <h3 className={cls.lormText}>
                Bugungi kunda SMM sohasi eng keng tarqalgan va katta talabga ega
                sohalardan biriga aylandi. Ushbu sohaga bo‘lgan zaruriyat, unga
                qiziquvchilar sonini keskin oshirdi. Buni...
              </h3>
              <div className={cls.containerDescription}>
                <p clasNames={cls.description}> 07.08.2021</p>
              </div>
            </div>
          </div>
          <div className={cls.bothOf}>
            <div className={cls.ContainerBothOf}>
              <div className={cls.bothOfContent}>
                <Image
                  className={cls.imgg}
                  src={aaa}
                  alt="Picture of the author"
                />
              </div>
              <div className={cls.titlea}>
                <h3 className={cls.DesctiptionLOrem}>
                  Lorem ipsum dolor sit amet consectetur ipsut <br />
                  adipisicing elit.
                </h3>
                <p className={cls.dadee}>07.08.2021</p>
              </div>
            </div>
            <div className={cls.ContainerBothOf}>
              <div className={cls.bothOfContent}>
                <Image
                  className={cls.imgg}
                  src={aaa}
                  alt="Picture of the author"
                />
              </div>
              <div className={cls.titlea}>
                <h3 className={cls.DesctiptionLOrem}>
                  Lorem ipsum dolor sit amet consectetur ipsut <br />
                  adipisicing elit.
                </h3>
                <p className={cls.dadee}>07.08.2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cls.imgs}>
        <div className={cls.ContainerThreeMidle}>
          <div className={cls.ContentImgText}>
            <div className={cls.ContainerImg}>
              <Image
                className={cls.MidleImgg}
                src={bbbb}
                alt="Picture of the author"
              />
            </div>
            <div className={cls.ForTextt}>
              <h3 className={cls.TexttTextt}>
                Yaponiyada ozbek talabalalar tayyorlash uchun qoʻshimcha
              </h3>
              <h5 className={cls.Tteexxtt}>
                Qayd etilishicha, Oʻzbekiston elchisi
              </h5>
              <p className={cls.LoremLorem}>12.04.2021</p>
            </div>
          </div>
          <div className={cls.ContentImgText}>
            <div className={cls.ContainerImg}>
              <Image
                className={cls.MidleImgg}
                src={bbbb}
                alt="Picture of the author"
              />
            </div>
            <div className={cls.ForTextt}>
              <h3 className={cls.TexttTextt}>
                Yaponiyada ozbek talabalalar tayyorlash uchun qoʻshimcha
              </h3>
              <h5 className={cls.Tteexxtt}>
                Qayd etilishicha, Oʻzbekiston elchisi
              </h5>
              <p className={cls.LoremLorem}>12.04.2021</p>
            </div>
          </div>
        </div>
      
        <div className={cls.ContainerThreeMidle}>
          <div className={cls.ContentImgText}>
            <div className={cls.ContainerImg}>
              <Image
                className={cls.MidleImgg}
                src={bbbb}
                alt="Picture of the author"
              />
            </div>
            <div className={cls.ForTextt}>
              <h3 className={cls.TexttTextt}>
                Yaponiyada ozbek talabalalar tayyorlash uchun qoʻshimcha
              </h3>
              <h5 className={cls.Tteexxtt}>
                Qayd etilishicha, Oʻzbekiston elchisi
              </h5>
              <p className={cls.LoremLorem}>12.04.2021</p>
            </div>
          </div>
          <div className={cls.ContentImgText}>
            <div className={cls.ContainerImg}>
              <Image
                className={cls.MidleImgg}
                src={bbbb}
                alt="Picture of the author"
              />
            </div>
            <div className={cls.ForTextt}>
              <h3 className={cls.TexttTextt}>
                Yaponiyada ozbek talabalalar tayyorlash uchun qoʻshimcha
              </h3>
              <h5 className={cls.Tteexxtt}>
                Qayd etilishicha, Oʻzbekiston elchisi
              </h5>
              <p className={cls.LoremLorem}>12.04.2021</p>
            </div>
          </div>
        </div>
      
      
      </div>
    </>
  );
}
