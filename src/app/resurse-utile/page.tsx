import {
  FaEarthAfrica,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FaRegSmileWink } from "react-icons/fa";

import React from "react";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resurse utile pentru Evaluarea Națională",
  description:
    "Pe această pagină am adunat mai multe resurse digitale gratuite care s-ar putea să îți fie utile în pregătirea pentru Evaluarea Națională",
};

function Resource({
  imgSrc,
  imgAlt,
  imgClassName,
  links,
  children,
}: {
  imgSrc: string;
  imgAlt: string;
  imgClassName?: string;
  links: {
    href: string;
    Icon: IconType;
    text: string;
    color: string;
  }[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
      <img
        src={imgSrc}
        alt={imgAlt}
        className={twMerge("w-32 shrink-0 h-fit mt-2", imgClassName)}
      />
      <div className="flex flex-col gap-4">
        <div className="">{children}</div>
        <div className="flex gap-4 text-base -mx-1 flex-wrap justify-center sm:justify-start">
          {links.map((link, i) => (
            <a href={link.href} target="_blank" key={i}>
              <Button className="flex gap-2 px-4 py-2 items-center font-medium">
                <link.Icon className="text-lg" style={{ color: link.color }} />
                {link.text}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
  return (
    <main className="md:bg-math min-h-screen flex flex-col items-center">
      <NavBar />

      <div className="flex flex-col items-center md:px-4 w-full max-w-5xl">
        <div className="p-8 sm:px-12 sm:py-12 mt-8 gap-32 sm:gap-20 rounded-2xl text-lg text-left text-black justify-center flex flex-col bg-white md:border-[1px] border-gray-200 md:shadow">
          <div className="flex flex-col items-ceneter gap-8">
            <div className="text-3xl self-center font-semibold [text-wrap:balance] text-center">
              Resurse utile
            </div>
            <div className="text-center [text-wrap:balance]">
              Pe această pagină am adunat mai multe resurse digitale gratuite
              care s&#8288;-&#8288;ar putea să îți fie utile. Dacă cunoști și
              alte resurse gratuite care ar putea fi utile pentru elevii care se
              pregătesc pentru Evaluarea Națională, te rog să ne spui!
            </div>
          </div>
          <div className="text-3xl self-center font-semibold [text-wrap:balance] text-center mt-16">
            Matematică
          </div>
          <Resource
            imgSrc="/img/resurse/pauza-de-mate.jpg"
            imgAlt="Pauza de Mate"
            links={[
              {
                href: "https://www.youtube.com/@PauzadeMate",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://www.facebook.com/pauzademate/",
                Icon: FaFacebook,
                text: "Facebook",
                color: "#1877F2",
              },
              {
                href: "https://www.instagram.com/pauzademate/",
                Icon: FaInstagram,
                text: "Instagram",
                color: "#C13584",
              },
            ]}
          >
            <span className="font-bold">Pauza de Mate</span> este un canal de
            YouTube cu peste 600 de lecții video și peste 100.000 de abonați.{" "}
            <i>Pauza de Mate</i> există pentru a ajuta elevii cu videoclipuri
            explicative, lecții, teste de pregatire sau de antrenament pentru
            examenele naționale și nu numai. Sloganul canalului este:{" "}
            <i>„Fă-ți timp și ia-ți o pauză de mate!”</i>
          </Resource>

          <Resource
            imgSrc="/img/resurse/profa-de-mate.jpg"
            imgAlt="Profa de Mate"
            links={[
              {
                href: "https://www.youtube.com/@profademate2821",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://www.tiktok.com/@profadematecool",
                Icon: FaTiktok,
                text: "TikTok",
                color: "#000",
              },
              {
                href: "https://www.instagram.com/profa_de_mate",
                Icon: FaInstagram,
                text: "Instagram",
                color: "#C13584",
              },
              {
                href: "https://profamate.ro/tika-math-old/",
                Icon: FaRegSmileWink,
                text: "TikaMath",
                color: "#38B2AC",
              },
            ]}
          >
            <span className="font-bold">Florentina Pavăl</span> (sau, așa cum
            este cunoscută online, <i>Profa de Mate</i>) are peste 400 de lecții
            video pe canalul său de YouTube. Este de asemenea foarte populară pe
            TikTok și Instagram. Ea este și creatoare a unui board game
            educațional numit <i>TikaMath</i>.
          </Resource>

          <Resource
            imgSrc="/img/resurse/matematica-de-acasa.jpg"
            imgAlt="Matematica de Acasă"
            imgClassName="rounded-full"
            links={[
              {
                href: "https://www.youtube.com/@Matematicadeacasa",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://www.matematicadeacasa.ro/",
                Icon: FaEarthAfrica,
                text: "matematicadeacasa.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">Claudia Cilibia</span> este creatoarea
            canalului <i>Matematică de Acasă</i> cu peste 200 de lecții video.
            Această platformă iți va fi de folos indiferent dacă vrei sa repeți
            noțiuni de matematică învățate la școală, dacă vrei să te pregătești
            pentru examene sau dacă vrei doar să reîmprospătezi informații deja
            cunoscute. Claudia are o experiență de peste 20 de ani în învățământ
            și încearcă să împartășească și altora din experiența sa didactică.
          </Resource>

          <Resource
            imgSrc="/img/resurse/corina-turcanu.jpg"
            imgAlt="Corina Țurcanu"
            imgClassName="rounded-full"
            links={[
              {
                href: "https://www.youtube.com/@profcorinaturcanu",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://www.facebook.com/eUsorSaInvetiSingur/",
                Icon: FaFacebook,
                text: "Facebook",
                color: "#1877F2",
              },
              {
                href: "https://www.matera.ro/",
                Icon: FaEarthAfrica,
                text: "matera.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">Corina Țurcanu</span> a creat și postat
            pe YouTube și pe blogul său peste 100 de lecții video de matematică:
            algebră, geometrie, trigonometrie, matematică financiară și analiză
            matematică. Pe blogul său, <i>Matera.ro</i>, găsiți lectii video de
            matematica, articole cu teorie, exerciții rezolvate pas cu pas și
            modele de teste cu rezolvări.
          </Resource>

          <Resource
            imgSrc="/img/resurse/matematica-de-zece.jpg"
            imgAlt="Matematica de Zece"
            imgClassName="rounded-full"
            links={[
              {
                href: "https://www.youtube.com/@Sorin_G",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
            ]}
          >
            <span className="font-bold">Matematică de Zece</span> este un canal
            de YouTube cu peste 600 de lecții video, majoritatea fiind dedicate
            pregătirii pentru Evaluarea Națională. Creatorul canalului, Sorin,
            își propune să explice matematica pe înțelesul tuturor.
          </Resource>

          <Resource
            imgSrc="/img/resurse/mate-pe-scurt.jpg"
            imgAlt="Mate pe Scurt"
            links={[
              {
                href: "https://www.youtube.com/@Matepescurt",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
            ]}
          >
            <span className="font-bold">Mate pe Scurt</span> este un canal de
            YouTube cu peste 100 de lecții de matematică scurte (cel mult 5
            minute fiecare). Este acoperită materia din ciclul gimnazial
            (clasele V-VIII). În plus, sunt explicate subiecte din cadrul
            examenelor de Evaluare Naționala.
          </Resource>

          <Resource
            imgSrc="/img/resurse/digitaliada.png"
            imgAlt="Digitaliada"
            links={[
              {
                href: "https://youtube.com/playlist?list=PLpMzy_De4tP_5ZMPzsSL5X_BYvl7_o-gh&si=MtRiVcP-h_jvePWZ",
                Icon: FaYoutube,
                text: "Mate cu Digitaliada",
                color: "#F00",
              },
              {
                href: "https://www.platformadigitaliada.ro/",
                Icon: FaEarthAfrica,
                text: "Platforma Digitaliada",
                color: "#54A0FF",
              },
              {
                href: "https://www.fundatiaorange.ro/",
                Icon: FaHeart,
                text: "Fundația Orange",
                color: "#ff7900",
              },
            ]}
          >
            <span className="font-bold">Digitaliada</span> este o platformă
            educațională dezvoltată de Fundația Orange. Aici găsești numeroase
            resurse educaționale, inclusiv serialul <i>Mate cu Digitaliada</i>{" "}
            care te ajută să înțelegi mai bine matematica de gimnaziu și să te
            pregătești pentru Evaluarea Națională. Clarisa și Adrian, cei doi
            mentori, îți vor arăta în 10 episoade cum să rezolvi pas cu pas
            peste 100 de exerciții de algebră și geometrie, trecând prin toate
            cele trei tipuri de subiecte de la examen.
          </Resource>

          <div className="text-3xl self-center font-semibold [text-wrap:balance] text-center mt-16">
            Limba Română
          </div>

          <Resource
            imgSrc="/img/resurse/cristina-tunegaru.jpg"
            imgAlt="Cristina Tunegaru"
            imgClassName="rounded-full"
            links={[
              {
                href: "https://www.youtube.com/@CristinaTunegaruLive",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
            ]}
          >
            <span className="font-bold">Cristina Tunegaru</span> îți propune să
            vă pregătiți împreună pentru Evaluarea Națională la Limba Română. Pe
            canalul său de Youtube, veți găsi peste 100 de lecții video care
            abordează subiecte de literatură, gramatică și variante de subiecte
            pentru evaluarea națională.
          </Resource>

          <Resource
            imgSrc="/img/resurse/eromana.jpg"
            imgAlt="eRomână"
            links={[
              {
                href: "https://www.youtube.com/@eromana",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://eromana.ro/",
                Icon: FaEarthAfrica,
                text: "eromana.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">eRomână</span> este un canal de YouTube
            dedicat limbii si literaturii române. Aici puteți găsi peste 800 de
            materiale video create de profesorul Schmoll Stefan.
          </Resource>

          <Resource
            imgSrc="/img/resurse/succes-la-examen.jpg"
            imgAlt="Succes la Examen"
            links={[
              {
                href: "https://www.youtube.com/@SuccesLaExamen",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://succeslaexamen.ro/",
                Icon: FaEarthAfrica,
                text: "succeslaexamen.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">Succes la Examen</span> este un portal
            de pregătire pentru examene de admitere, inclusiv pentru Evaluarea
            Națională. Pe canalul lor de YouTube găsiți numeroase lecții video
            gratuite dedicate pregătirii pentru Evaluare Națională, atât la
            Limba și Literatura Română cu profesoara Alina Nicola, cât și la
            Matematică cu profesoara Ofelia Constantin.
          </Resource>

          <Resource
            imgSrc="/img/resurse/vox-valachorum.jpg"
            imgAlt="Succes la Examen"
            imgClassName="rounded-full"
            links={[
              {
                href: "https://www.youtube.com/@voxvalachorum",
                Icon: FaYoutube,
                text: "Youtube",
                color: "#F00",
              },
              {
                href: "https://voxvalachorum.ro/",
                Icon: FaEarthAfrica,
                text: "voxvalachorum.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">Vox Valachorum</span> (
            <i>„glasul românilor”</i> în latină) este un proiect care își
            propune să ajute cât mai mulți elevi din România cu examenele
            naționale: Evaluarea Națională și Bacalaureatul. Proiectul dispune
            de un canal de YouTube unde se încarcă frecvent materiale utile, dar
            și de o pagină web unde puteți găsi articole bine documentate,
            materiale teoretice, teste grilă și altele.
          </Resource>

          <div className="text-3xl self-center font-semibold [text-wrap:balance] text-center mt-16">
            Informativ
          </div>

          <Resource
            imgSrc="/img/resurse/edupedu.png"
            imgAlt="EduPedu"
            links={[
              {
                href: "https://www.edupedu.ro/",
                Icon: FaEarthAfrica,
                text: "edupedu.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">EduPedu.ro</span> este o publicație
            online care găzduiește exclusiv articole din domeniul educației și
            cercetării. Urmărim constant cum sunt educați copiii noștri, cine și
            cum face politicile din educație și cercetare, cine și cum îi
            formează pe profesori, cât de adecvate la lumea în care trăim sunt
            sistemele de educație și cercetare.
          </Resource>

          <Resource
            imgSrc="/img/resurse/bacplus.jpg"
            imgAlt="BacPlus"
            links={[
              {
                href: "https://www.bacplus.ro/",
                Icon: FaEarthAfrica,
                text: "bacplus.ro",
                color: "#54A0FF",
              },
            ]}
          >
            <span className="font-bold">BacPlus.ro</span> este o platformă unde
            puteți găsi statistici despre sistemul educațional românesc bazate
            pe rezultatele la examenele naționale. Aici puteți găsi topuri ale
            liceelor și școlilor din România, precum și informații detaliate
            despre fiecare liceu și școală în parte.
          </Resource>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="mb-4 mt-28 font-medium text-black/40 md:bg-anti-math flex items-center gap-1">
            <span className="text-2xl">©</span> 2024 ZeceLaEN.ro
          </div>
        </div>
      </div>
    </main>
  );
}
