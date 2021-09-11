import React from "react";
import cls from "./Rigt.module.css";
import Image from "next/image";
import imgimgg from "../../../public/atribute.jpg";

export default function Right() {
  return (
    <>
      <div className={cls.ContainerTitle}>
        <div className={cls.ContainerImg}>
          <Image className={cls.imgimggg} src={imgimgg} alt="Picture of the author"/>
        </div>
      </div>
    </>
  );
}
