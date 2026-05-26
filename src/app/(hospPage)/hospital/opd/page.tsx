"use client";
import React, { useEffect, useState } from "react";
import "../style.css";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";
import Abhyangam from "../../treatment/abhyangam/page";
import KizhiPage from "../../treatment/kizhi/page";
import SpineBastiPage from "../../treatment/spine-basti/page";
import KatiBastiPage from "../../treatment/kati-basti/page";
import GreevaBastiPage from "../../treatment/greeva-basti/page";
import JanuBastiPage from "../../treatment/janu-basti/page";
import SirodharaPage from "../../treatment/shirodhara/page";
import KashydharaPage from "../../treatment/kashayadhara/page";
import MukhaLepam from "../../treatment/mukha-lepam/page";
import NetraTarpanamPage from "../../treatment/netra-tarpanam/page";
import ImageGallery from "../opd/ImageGallery"





const Hospital = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let id = searchParams?.id ? Number(searchParams.id) : 0;

  const items = [
    {
      title: "Kayachikitsa",
      content: (
        <>
          <p>
            Kayachikitsa is an important branch amongst eight branches of
            Ayurveda, dealing with multi-systemic illnesses. The holistic
            approach in consideration of Prakriti (Body Constitution), Saara
            (Tissue Essence), Satwa (Mental health), etc., Asthasthana (Nadi
            Pareeksha, etc.), Dashavidha diagnostic’s tools and therapeutics
            with various medicaments (Detoxifying & Palliative) is the
            uniqueness of this specialty. A unique aspect of Kaya Chikitsa is
            Kaya Kalpa. Kaya Kalpa refers to the renewal and rejuvenation of the
            body. It sustains the youthfulness of the body and slows down the
            effects of aging through the application of physical and
            psychological methods to the body once it has been detoxified
            through Panchakarma.
          </p>
          <br />
          <br />
          <h6 className="text-[16px] font-semibold font-serif	text-[#000]">
            Medical Conditions Comprehensively Managed By Kayachikitsa
            Speciality at Naiminath
          </h6>
          <br />
          <p>
            Musculoskeletal Disorders (Osteoarthritis, Spondylosis, Slip Disc,
            Backache, Joint pain, etc.)
          </p>
          <br />
          <p>
            Hepatobiliary Disorders (Jaundice, Liver Cirrhosis, Ascites,
            Gallstones, Hepatitis, etc.) Neurological Disorders (Paralysis,
            Bell’s palsy, Sensory deficits, GB Syndrome, Motor Neuron Disease,
            Neuro-degenerative disorders, etc.)
          </p>
          <br />
          <p>
            Gastrointestinal Disorders (Hyperacidity, Constipation, Flatulence,
            Indigestion, Dysentery, Malabsorption, Food allergies, etc.)
          </p>
          <br />
          <p>
            {" "}
            Oncological Disorders (Adjuvant therapy for various Malignancies)
          </p>
        </>
      ),


      meta: (
        <head>
          <title>Kayachikitsa - Naiminath Ayurveda </title>
          <meta name="description" content="Discover holistic healing with Kayachikitsa at Naminath Aryuveda. Our Ayurveda OPD offers personalized consultations for a healthier and balanced life" />
        </head>
      ),
      image: "kayachikitsa.webp"
    },

    {
      title: "Kaumarbhritya",
      content: (
        <>
          <p>
            Kaumarabhritya speciality of Ayurveda deals with health & wellness
            of children. The speciality vividly deals with newborn and pediatric
            care with a great deal of scientific touch to nutrition, immunity
            including growth and development, Samskaras (ceremonies), Diseases,
            Graha rogas (Infectious diseases), treatments and drug doses. The
            purview of the speciality has been extended up to antenatal care and
            postnatal care of mother too. The OPD offers Suvarna Prashan Sanskar
            (child immunization) based on Ayurvedic medicine system. The process
            of Suvarna Prashan Sanskar involves the administering of purified
            ash of gold (Suvarna Bhasma) with fortified ghee to the child.
          </p>
          <br />
          <h6 className="text-[16px] font-semibold text-[#000]">
            Treatment of Kaumarabhritya at Naiminath has one of the major
            possibilities in serving the pediatric conditions between the age
            group of 0 to 16 years with:
          </h6>
          <ul className="list-disc ml-8 mt-3">
            <li>Cerebral Palsy</li>
            <li>
              Developmental Disabilities (ADHD, Autism, Learning & Behavioral
              problems, etc.)
            </li>
            <li>Respiratory Disorders (Allergies, Asthma, Cough, etc.)</li>
            <li>Skin Diseases (Napkin Rashes, Psoriasis, Vitiligo, etc.)</li>
            <li>Dentation Difficulties</li>
            <li>Speech Disorders</li>
            <li>Bedwetting</li>
            <li>Vomiting, Constipation, Diarrhea, etc.</li>
            <li>Pediatric Counseling</li>
          </ul>
        </>
      ),
      meta: (
        <head>
          <title>Kaumarbhritya - Naiminath Ayurveda</title>
          <meta name="description" content="Explore Kaumarbhritya at Naminath Ayurveda for comprehensive pediatric care. Our experts blend traditional wisdom with modern healthcare for your child's well-being " />
        </head>
      ),
      image: "kaumarbhritya.jpg"
    },
    {
      title: "Panchkarma",
      content: (
        <>
          <p>
            Panchkarma— panch and karmas, when literally translated means ‘Five
            Procedures’. It is an ayurvedic treatment that involves elaborated
            methods of purification to release stress, which prepares the body
            tissues to accept the maximum benefits of food, nutrition and
            exercise.
          </p>
          <br />
          <p>
            The five procedures are Vamana (Emesis), Virechana (Purgation),
            Niroohavasti (Decoction enema), Nasya (Instillation of medicine
            through nostrils), and Anuvasanavasti (Oil enema). Panchkarma
            treatment is a three stage process—purva (pre-operative), pradhana
            (operative) and paschat (post-operative) measures. Ayurveda advises
            to practice Purvakarma because of the deep rooted imbalances in the
            body, which needs to be flushed out in the right way by Purvakarma.
          </p>
          <br />

          <ImageGallery />
          {/*  <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-2 md:mx-10 my-10">

    <img className="rounded-md w-auto aspect-auto max-h-60" src="/images/opd/panchkarma-patients1.jpeg" alt="Panchkarma Patients" />

 
           <img className="rounded-md w-auto aspect-auto max-h-60" src="/images/opd/panchkarma-patients2.jpeg" alt="Panchkarma Patients" />

             </div>
   <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-2 md:mx-10 my-10">
        
    <img className="rounded-md w-auto aspect-auto max-h-60"  src="/images/opd/panchkarma-patients3.jpeg" alt="Panchkarma Patients" />
           <img className="rounded-md w-auto aspect-auto max-h-60" src="/images/opd/panchkarma-patients4.jpeg" alt="Panchkarma Patients" />
       <img className="rounded-md w-auto aspect-auto max-h-60" src="/images/opd/panchkarma-patients5.jpeg" alt="Panchkarma Patients" />

             </div> */}


          <p>
            To undergo a purification therapy it is highly important for the
            body to be prepared for the rigorous process to encourage the body
            to let go of the toxins. Treatments like abhyangam, shirodhara and
            elakizhi are included to soften the tissues where the oil is applied
            to the entire body with a particular type of massage which helps the
            toxins to move towards the gastro- intestinal tract. Thereafter,
            therapies like Vamana, Virechana, Vasti, Nasya, Raktamoksha are used
            as per the body constitution (Vata, Pitta and Kapha) to complete the
            detoxifying process.
          </p>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Panchkarma - Naiminath Ayurveda</title>
          <meta name="description" content="Embark on your healing journey with Panchakarma at Naminath Ayurveda. Rejuvenate your body, mind, and spirit through authentic therapies for lasting well-being" />
        </head>
      ),
      image: "panchakarma.jpeg"
    },
    {
      title: "Prasuti & Stri Roga",
      content: (
        <>
          <p>
            Stree Roga and Prasooti Tantra is a significant branch of Ayurveda
            mainly dealing with child birth (Prasooti tantra /Obstetrics) and
            Gynecological (Streeroga) disorders.
          </p>
          <br />
          <p>
            The Department at Naiminath has well established OPD, IPD, minor and
            major operation theatre. In Asthang Ayurveda, Prasuti tantra and
            Stri rog caters to the prescriptive healthcare for the obstetrics
            and gynaecology sections. Prasuti and stri rog also offers
            systematic guidelines and procedures for complication-free delivery
            of baby during pregnancy. The protocol followed under Prasutti and
            Stri Rog for the delivery of a baby during pregnancy is referred to
            as Garbhini Pracharya. It offers a detailed account of the nutrition
            (ahar), lifestyle (vihar) and thoughts (vichar) during pregnancy for
            effective delivery of a healthy baby. You can consult our Doctors at
            Naiminath Ayurveda regarding:
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Routine ANC check-up and counselling</li>
              <li>Family planning and HIV counselling</li>
              <li>Treatment for Sukhaprasava</li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Prasuti Stri Roga - Naiminath Ayurveda</title>
          <meta name="description" content="Experience compassionate care for maternal health with Prasuti Stri Roga at Naminath Ayurveda. Our expert team ensures a holistic approach for a healthy pregnancy and postpartum" />
        </head>
      ),
      image: "prasuti.jpg"
    },
    {
      title: "Shalakya Tantra",
      content: (
        <>
          <p className="mt-2">
            Shalakyatantra deals with diseases of Eye, ENT, Oral, Dental, Head
            and Neck. Numbers of classical therapies are explained in the
            management of various diseases. Numerous classical medications are
            available in Ayurveda which acts as antioxidant, rejuvenating and
            regenerating in qualities that help in the management of EYE, ENT
            and Oro-Dental diseases.
          </p>
          <br />
          <p>
            Ailments of the eyes emanate from ‘doshas’ within the human body and
            anomalies of lifestyle. In the modern context, this translates into
            long work hours; work relates travel, food, bad habits like smoking
            and alcohol consumption. Common eye complaints viz., diminished
            vision for distant / near objects, redness, watering, pain,
            swelling, etc. conditions along with following specific ocular
            diseases are managed by Ayurveda with encouraging results.
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Refractive errors (Myopia, Hyperopia & Astigmatism)</li>
              <li>Dry eye syndrome</li>
              <li>Amblyopia</li>
              <li>Computer vision syndrome</li>
              <li>Allergic conjunctivitis</li>
              <li>Immature cataracts</li>
              <li>Glaucoma</li>
              <li>Vitreal degeneration</li>
              <li>Squint</li>
              <li>Diabetic / Hypertensive Retinopathy</li>
              <li>Retinitis pigmentosa</li>
              <li>Keratoconus</li>
              <li>Bullous Keratopathy</li>
              <li>Corneal Ulcers and Opacities, etc</li>
            </ul>
          </div>
          <br />
          <br />
          <p>
            Common ENT Complaints like frequent running nose, sneeze, headache,
            oral ulcers, throat pain, dental pain, ear pain, discharging ear,
            burning sensation in mouth and nose, itching / irritation in nose,
            throat, ears, etc conditions along with following specific ENT
            diseases are managed by Ayurveda with encouraging results.
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Naso-bronchial allergies</li>
              <li>Nasal obstruction</li>
              <li>Sinusitis</li>
              <li>Headache</li>
              <li>Migraine</li>
              <li>Tonsillitis and Adenitis</li>
              <li>Stomatitis (oral ulcers)</li>
              <li>Hard of hearing (Reduced Hearing)</li>
              <li>Otitis Externa and Media</li>
              <li>Herpes zoster oticus</li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Shalakya Tantra - Naiminath Ayurveda</title>
          <meta name="description" content="Discover specialized care for head and neck disorders with Shalakya Tantra at Naminath Ayurveda. Our expert treatments ensure comprehensive relief and well-being" />
        </head>
      ),
      image: "shalakya.jpeg"
    },
    {
      title: "Shalya Tantra",
      content: (
        <>
          <p className="mt-2">
            Shalya Chikitsa is the branch of Ayurveda medicine that uses
            surgical techniques and traces its origin to the one of the first
            and most established treatise on Ayurveda, Susrata Samhita.
            Treatment includes ancient surgical procedures and clinical
            applications of various treatment modalities, successful treatment
            for Piles and Fistula as per Ayurvedic methodology, treatment of
            chronic diseases with blood-letting through Leeches and practical
            training of surgical procedures on patients at well-equipped
            operation theatre and procedure room.
          </p>
          <br />
          <p>
            At Naiminath Ayurvedic Hospital, surgical conditions comprehensively
            managed by Ayurvedic Special techniques are –
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>
                Long-standing non-healing wounds are best treated by herbal
                preparations like kashaya (decoction), kalka (herbal paste),
                etc.
              </li>
              <li>
                Fistula in ano cases are managed effectively by the technique
                called cryptoglandular surgery.
              </li>
              <li>
                Stones in the urinary tract are best managed by Ayurvedic
                formulations like Paniya Kshar (herbomineral preparations).
              </li>
              <li>
                There are special Ayurvedic techniques to minimize
                post-operative scars.
              </li>
              <li>
                Kshara Karma, which is unique of its type, treats many surgical
                ailments like Corns, Warts, Piles, Keloids, etc.
              </li>
              <li>
                Leech therapy is effectively used to treat non-healing wounds
                like venous ulcer, arterial ulcer, and post of wounds, etc.
              </li>
              <li>Agnikarma gives the best results in calcaneal spur, etc.</li>
              <li>
                Ksharasutra is one of the revolutionary treatment techniques
                that deal with Piles, complex Fistula in Ano successfully.
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Shalya Tantra - Naiminath Ayurveda</title>
          <meta name="description" content="Experience advanced surgical care rooted in Ayurveda with Shalya Tantra at Naminath Ayurveda. Our expert treatments ensure effective solutions for surgical conditions and postoperative care" />
        </head>
      ),
      image: "kayachikitsa.webp"
    },
    {
      title: "Swasthvritta",
      content: (
        <>
          <p className="mt-2">
            Swasthavritta evam Yog in Ayurveda offers proactive preventive
            healthcare and lifestyle management. The aim of ayurveda is to cure
            diseases and beyond that; to prevent the occurrence of diseases and
            ailments by means of adoption of right hygiene: personal and social.
            As such Swasthavritta evam Yog offers holistic personal and social
            hygiene habits to be incorporated into habits and lifestyle for the
            proactive prevention of ailments and diseases- communicable and
            non-communicable. The components of personal hygiene are dinacharya,
            rutacharya and trayopstambha. The components of social hygiene are
            water, light and air.
          </p>
          <br />
          <p>
            Ayurveda defines perfect health as the sum total of the effects of
            the balancing of Doshas like Vata, Pitta and Kapha, Dhatus like
            Rasa, Rakta, Mansa, Meda, Asthi, Majja, Shukra and Agni. To the
            extent of achieving a perfect health Ayurveda prescribes three parts
            of lifestyle namely:
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Dinacharya (diet and regimen for the daytime)</li>
              <li>Ratricharya (diet and regimen for the night time)</li>
              <li>
                Ritucharya ( seasonal diet and regimen) and Sandhikal ( diet
                instructions for the joint period of two seasons)
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Swasthavritta - Naiminath Ayurveda</title>
          <meta name="description" content="Explore Swasthavritta at Naminath Ayurveda—Ayurvedic wisdom for disease prevention through holistic practices. Embrace well-being with diet, hygiene, and yoga for a healthier life" />
        </head>
      ),
      image: "about_home_bg.jpg"
    },
    {
      title: "Agad OPD",
      content: (
        <>
          <p className="mt-2">
            Agad Tantra OPD in Ayurveda focuses on the diagnosis, management, and
            prevention of toxicological disorders and medico-legal conditions.
            Agad Tantra, one of the important branches of Ayurveda, deals with the
            study of poisons originating from plants, animals, minerals, and
            artificial sources along with their effects on the human body. The OPD
            provides holistic Ayurvedic care for poisoning cases, food toxicity,
            allergic reactions, insect and snake bites, and various environmental
            toxicities through classical Ayurvedic principles and therapies.
          </p>
          <br />
          <p>
            Ayurveda emphasizes the importance of maintaining a toxin-free body and
            environment for preserving health and longevity. Agad OPD integrates
            traditional Ayurvedic detoxification methods, herbal formulations, and
            preventive healthcare approaches for effective management of toxic
            conditions and lifestyle-related disorders.
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Management of food poisoning and toxic reactions</li>
              <li>Treatment support for insect, snake, and animal bites</li>
              <li>Care for allergic and environmental toxic conditions</li>
              <li>Medico-legal consultation and toxicology guidance</li>
              <li>Detoxification and preventive Ayurvedic therapies</li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <title>Agad OPD - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Explore Agad OPD at Naiminath Ayurveda—specialized Ayurvedic toxicology and preventive healthcare for poison management, detoxification, allergies, and holistic wellness."
          />
        </head>
      ),
      image: "about_home_bg.jpg"
    },
    {
      title: "Abhyangam Treatment",
      content: <Abhyangam />,
      meta: (
        <head>
          <title>
            Abhyangam Treatment | Abhyangam Therapy - Naiminath Ayurveda
          </title>
          <meta
            name="description"
            content="Escape to a world of tranquility and healing with Abhyangam Treatment at Naiminath Ayurveda. Rediscover harmony within yourself today!"
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Shirodhara",
      content: (
        <>
          <SirodharaPage />
        </>
      ),
      meta: (
        <head>
          <title>
            Shirodhara Therapy - Treatment, Benefits &amp; Side Effects |
            Naiminath Ayurveda
          </title>
          <meta
            name="description"
            content="Elevate your well-being with Shirodhara therapy. Discover the therapeutic effects on stress reduction, improved sleep, and overall wellness."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Kashayadhara Treatment: The Holistic Healing Experience",
      content: (
        <>
          <KashydharaPage />
        </>
      ),
      meta: (
        <head>
          <title>Kashayadhara Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Unleash the healing potential of Ayurvedic Treatment at Naiminath Ayurveda. Embrace a personalized approach to wellness for lasting vitality and peace."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Greeva Basti Treatment: Relieve Neck and Shoulder Discomfort",
      content: (
        <>
          <GreevaBastiPage />
        </>
      ),
      meta: (
        <head>
          <title>Greeva Basti Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Experience the healing power of Greeva Basti Treatment at Naiminath Ayurveda. Say goodbye to neck pain and stiffness. Book your session now!"
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Janu Basti Treatment: Soothe and Revitalize Your Knees",
      content: (
        <>
          <JanuBastiPage />
        </>
      ),
      meta: (
        <head>
          <title>Janu Basti Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Experience the healing power of Janu Basti Treatment at Naiminath Ayurveda. Say goodbye to knee pain and enjoy a life free from discomfort."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Kati Basti Treatment: Easing Your Way to a Pain-Free Back",
      content: (
        <>
          <KatiBastiPage />
        </>
      ),
      meta: (
        <head>
          <title>Kati Basti Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Experience the healing power of Kati Basti Treatment at Naiminath Ayurveda. Say goodbye to back pain and find relief today!"
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Spine Basti: Holistic Healing for Your Backbone",
      content: (
        <>
          <SpineBastiPage />
        </>
      ),
      meta: (
        <head>
          <title>Spine Basti Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Experience the healing power of Spine Basti treatment at Naiminath Ayurveda. Find relief from spine issues and rejuvenate your body naturally."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Kizhi Treatment: A Healing Experience for Body and Soul ",
      content: (
        <>
          <KizhiPage />
        </>
      ),
      meta: (
        <head>
          <title>Kizhi Treatment &amp; Massage- Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Experience the healing power of Kizhi treatment at Naiminath Ayurveda. Restore balance and rejuvenate your body naturally."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Mukha Lepam: Revitalize Your Skin with Ayurvedic Care ",
      content: (
        <>
          <MukhaLepam />
        </>
      ),
      meta: (
        <head>
          <title>Mukha Lepam - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Transform your skin with Mukha Lepam - Naiminath Ayurveda. Experience the power of ancient remedies for a radiant, youthful complexion."
          />
        </head>
      ),
      image: ""
    },
    {
      title: "Discover the Healing Benefits of Netra Tarpanam Treatment",
      content: (
        <>
          <NetraTarpanamPage />
        </>
      ),
      meta: (
        <head>
          <title>Netra Tarpanam Treatment - Naiminath Ayurveda</title>
          <meta
            name="description"
            content="Get relief from eye problems with Netra Tarpanam treatment at Naiminath Ayurveda. Experience the power of ancient healing techniques today!"
          />
        </head>
      ),
      image: ""
    },
  ];

  const rounter = useRouter();

  const [itemsContent, setItemsContent] = useState(items[id]);
  const [currentId, setCurrentId] = useState(id);
  const { imageSlide, setImageSlide } = useGlobalContext();

  useEffect(() => {
    if (typeof id === "number") {
      console.log("Page loaded");
      setItemsContent(items[id]);
      setCurrentId(id);
      if (imageSlide) {
        setImageSlide(false);
      }
    }
  }, [id]);

  return (
    <>
      {itemsContent.meta && <>{itemsContent.meta}</>}
      <div className="flex flex-col items-center justify-center font-sans h-full w-full">
        <div
          className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] md:text-[32px] text-[28px] text-center font-extrabold border-b-[0.009px] border-[#8b939465]"
        >
          {itemsContent.title}
        </div>
        <div className={`flex md:flex-row flex-col w-full justify-center items-start md:pt-12 pb-16 bg-[')] 
        bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `linear-gradient(93deg, rgb(246 255 238), rgb(255 255 255 / 65% ), #f5ffa399), url('/images/opd/${itemsContent.image}')`,
            backgroundSize: 'cover',
          }}>
          <div className="hidden sm:hidden md:hidden lg:flex xl:flex flex-col lg:basis-[30%] lg:flex-none gap-3 items-center justify-center">
            <ul className="list-none list-inside text-[17px] ps-6 custom-list cursor-pointer font-serif mt-2 ">
              {items.slice(0, 7).map((item, index) => (
                <li
                  key={index}
                  className=" hover:text-[#54595f] text-[#17a960] "
                  onClick={() => {
                    setCurrentId(index);
                    setItemsContent(item);
                    // rounter.push(`/hospPage/hospital/opd?id=${index}`)

                    // console.log("idahjh===", index);

                    const currentUrl = window.location.href;
                    const newUrl = `${currentUrl.split("?")[0]}?id=${index}`;
                    window.history.replaceState(null, "", newUrl);
                    // window.location.reload()
                  }}
                >
                  {item.title}
                </li>
              ))}
              <style jsx>{`
                /* Use the utility class to change the color of the list item bullets */
                .custom-list li::before {
                  font-size: 20px;
                  content: "⇨"; /* Use the desired bullet character */
                  color: #17a960; /* Change this to the color you want for the bullets */
                  margin-right: 8px; 
                   border-top: 0.5px solid #ffffff; /* Adjust the spacing between the bullet and text */
                   border-bottom: 1px solid #cfe1cf;
                }
              `}</style>
            </ul>
          </div>
          <ShowRightSideText id={currentId} data={itemsContent} />
        </div>
      </div>
    </>
  );
};

const ShowRightSideText = ({ id, data }: any) => {
  return (
    <>
      {/* <div className=" flex flex-col gap-3 items-start justify-center mr-44">
          <h5 className="text-[#000] font-serif font-bold">{data.title}</h5>
          <div className=" text-[#000] text-[16px] text-justify font-medium font-serif">
            {data.content}
          </div>
        </div> */}
      {typeof id === "number" && id >= 0 && id <= 6 && (
        <div className=" flex flex-col gap-3 items-start justify-center md:mr-32 md:mx-0 mx-4 md:mt-0 mt-4 ">
          <h5 className="text-[#000] font-bold font-serif	">{data.title}</h5>
          <div className=" text-[#000] text-[16px] border-t-1 border-b-1  md:text-justify font-normal font-serif">
            {data.content}
          </div>
        </div>
      )}

      {typeof id === "number" && id >= 7 && id <= 16 && (
        <div className="flex flex-col items-start justify-center md:mr-32 md:mx-0 mx-4 md:mt-0 mt-4 font-serif overflow-x-auto">
          {data.content}
        </div>
      )}
    </>
  );
};

export default Hospital;
