"use client";

import { useTranslation } from "react-i18next";
import Line from "./Ui/Line";
import ResumeCapsule from "./Ui/ResumeCapsule";

export default function Resume() {
    const { t } = useTranslation();

    const experiences = [
        {
            key: "ivalua",
            img: "/Img/Ivalua.png",
        },
        {
            key: "harmonessens",
            img: "/Img/harmonessens.png",
        },
        {
            key: "degriff",
            img: "/Img/degriff.png",
        },
    ];

    const education = [
        {
            key: "azure",
            img: "/Img/azure-fondamntals.png",
        },
        {
            key: "epsi",
            img: "/Img/Epsi.png",
        },
        {
            key: "cmi",
            img: "/Img/CMI.png",
        },
    ];

    return (
        <div className="w-full" id="Resume">
            <div className="w-full mb-12">
                <h2 className="heading-title">{t("my_resume")}</h2>
                <Line width="sm:w-1/3 w-full" />
            </div>

            <div className="w-full grid md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        {t("professional_experience")}
                    </h3>

                    {experiences.map((item) => (
                        <ResumeCapsule
                            key={item.key}
                            title={t(`${item.key}.title`)}
                            subtitle={t(`${item.key}.subtitle`)}
                            text={t(`${item.key}.text`)}
                            img={item.img}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        {t("education")}
                    </h3>
                    {education.map((item) => (
                        <ResumeCapsule
                            key={item.key}
                            title={t(`${item.key}.title`)}
                            subtitle={t(`${item.key}.subtitle`)}
                            text={t(`${item.key}.text`)}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
