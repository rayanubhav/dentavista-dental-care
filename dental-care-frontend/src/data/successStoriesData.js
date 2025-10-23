// Master list of 10 Patient Transformations (Success Stories)

const SUCCESS_STORIES_DATA = [
  {
    id: 1,
    title: "Full Mouth Restoration for Severely Worn Teeth",
    subtitle: "Case: Ajit Badjatiya (66/M) - FMR using Hobo's Technique",
    description: "Successfully rehabilitated severely worn-out dentition, restoring proper chewing function and eliminating chronic sensitivity in both jaws.",
    longDescription:
      "This Full Mouth Rehabilitation (FMR) case addressed severe wear and functional instability. The comprehensive approach utilized **Hobo's Twin-Stage Technique** to precisely determine and restore the correct Vertical Dimension of Occlusion (VDO). This ensured functional harmony of the bite and elimination of chronic pain and sensitivity. The final restorations provided a durable and aesthetic outcome.",
    outcome:
      "Complete restoration of bite stability, pain elimination, and a return to comfortable and proper mastication.",
    imageUrl: "/case-ajit-fmr.png",
  },
  {
    id: 2,
    title: "VDO Restoration for Complex Worn Dentition",
    subtitle: "Case: Shilabai Kamble (46/F) - FMR using Hobo's Philosophy",
    description: "Management of advanced dentition wear and sensitivity by re-establishing the correct occlusal plane and vertical height using advanced prosthetic protocols.",
    longDescription:
      "This FMR case focused on the management of long-standing occlusal instability and worn teeth. The treatment followed **Hobo's philosophy**, carefully raising the Vertical Dimension of Occlusion (VDO) through diagnostic mounting and precise bite registration with instruments like the Lucia Jig. This systematic approach ensured the new restorations fit harmoniously with the temporomandibular joint (TMJ) and surrounding musculature.",
    outcome:
      "Achieved a stable, comfortable, and functionally harmonious occlusion, resolving sensitivity issues and restoring aesthetics.",
    imageUrl: "/case-kamble-fmr.png",
  },
  {
    id: 3,
    title: "Fixed Full Arch Implant Bridge (Maxillary)",
    subtitle: "Case: Mohan Wadewale (53/M) - Fixed Implant Solution",
    description: "Complete rehabilitation of the maxillary arch, replacing mobile, periodontally weak teeth with a fixed, non-removable implant-supported prosthesis.",
    longDescription:
      "The patient presented with mobile, non-salvageable teeth in the upper jaw. The solution was full arch rehabilitation involving extraction of all compromised teeth, immediate implant placement in strategic regions (12, 14, 22, 24, 26), and subsequent placement of a fixed, cement-retained metal-ceramic bridge. CBCT planning ensured precise angulation and engagement.",
    outcome:
      "Successfully restored full function and aesthetics in the maxillary arch with a durable fixed prosthesis, eliminating all mobility issues.",
    imageUrl: "/case-mohan-implant.png",
  },
  {
    id: 4,
    title: "Secure Implant Supported Overdentures",
    subtitle: "Case: Maruti Chavan (53/M) - Mandibular ISD with Locator",
    description: "Resolved issues with loose lower dentures by using implants and Locator attachments to provide superior retention, comfort, and confidence.",
    longDescription:
      "This case addressed a completely edentulous lower arch suffering from poor conventional denture retention. The solution involved placing two implants in the mandibular anterior region. The denture was then modified to seat securely over the implants using **Locator Attachments**. This technique dramatically increases retention and stability compared to traditional dentures.",
    outcome:
      "Patient achieved a secure, stable lower denture, resulting in significantly improved chewing efficiency and social comfort.",
    imageUrl: "/case-chavan-isd.png",
  },
  {
    id: 5,
    title: "Immediate Aesthetic Implant Placement (Anterior)",
    subtitle: "Case: Ishrat Shaikh (42/F) - Immediate Implant",
    description: "Immediate implant placement and restoration in the upper front jaw (anterior region) to quickly resolve poor appearance and restore a beautiful smile.",
    longDescription:
      "The patient had a compromised upper front tooth affecting appearance and function. To minimize healing time and preserve soft tissue aesthetics, an **immediate implant** was placed directly after tooth extraction. This was followed by a temporary restoration and ultimately a final, cement-retained fixed prosthesis, ensuring excellent tissue contour and aesthetic results.",
    outcome:
      "Successful preservation of the soft tissue profile and immediate restoration of natural aesthetics and function in the smile zone.",
    imageUrl: "/case-ishrat-immediate.png",
  },
  {
    id: 6,
    title: "Advanced Indirect Sinus Lift with CAS Kit",
    subtitle: "Case: Dhanaji Shinde (32/M) - Sinus Lift & Implant",
    description: "Specialized implant placement in the atrophic posterior maxilla (low bone height) using the cutting-edge **CAS Kit** for hydraulic sinus membrane elevation.",
    longDescription:
      "In this case, insufficient bone height required sinus floor elevation prior to implant placement. An **Indirect Sinus Lift** was performed using the specialized CAS (Crestal Approach Sinus) Kit. This minimally invasive hydraulic technique allows for predictable membrane lifting and simultaneous bone grafting/implant placement, achieving excellent primary stability in challenging bone conditions.",
    outcome:
      "Successful implant osseointegration achieved in the posterior maxilla, providing a stable, long-term foundation for the fixed prosthesis.",
    imageUrl: "/case-dhanaji-sinus.png",
  },
  {
    id: 7,
    title: "Bone Condensation Technique for Atrophic Maxilla",
    subtitle: "Case: Priyanka Kshirsagar (28/F) - Densah Burs",
    description: "Rehabilitation of low bone height in the upper jaw using the advanced **Densah Bur System** to condense bone and improve implant stability.",
    longDescription:
      "Facing bone atrophy in the posterior maxilla, the treatment utilized the **Densah Bur System**. These unique burs work by densifying (condensing) the existing bone laterally while preparing the osteotomy, simultaneously achieving a minor sinus lift. This process enhances bone density and primary stability, crucial for successful implant placement where grafting material is limited.",
    outcome:
      "Predictable increase in bone density and successful primary stability for implant placement, restoring full chewing function.",
    imageUrl: "/case-priyanka-densah.png",
  },
  {
    id: 8,
    title: "Maxillofacial Prosthesis for Palatal Defect",
    subtitle: "Case: Anita Kumbhar (49/F) - Obturator Prosthesis",
    description: "Custom-made prosthetic rehabilitation to seal a large palatal defect following maxillectomy, restoring the patient’s ability to chew and speak clearly.",
    longDescription:
      "The patient required rehabilitation for a large defect resulting from maxillectomy. A Cast Partial Obturator Prosthesis was fabricated. This device seals the defect, preventing nasal regurgitation and restoring proper oral function. The careful design ensures the remaining teeth provide adequate support, stability, and retention for the prosthesis.",
    outcome:
      "Successful closure of the defect, significantly improving masticatory efficiency, speech clarity, and overall quality of life.",
    imageUrl: "/case-anita-obturator.png",
  },
  {
    id: 9,
    title: "Fixed-Removable Prosthesis (Cast Partial Denture)",
    subtitle: "Case: Jugdevi Meherkar (57/F) - Cast Partial Dentures (CPD)",
    description: "Restoration of multiple missing posterior teeth in both the upper and lower jaws using highly retained and durable Cast Partial Dentures (CPD).",
    longDescription:
      "This case involved rehabilitating partially dentulous arches where multiple posterior teeth were missing, leading to difficulty chewing. **Cast Partial Dentures (CPD)** were chosen for their superior retention and structural rigidity compared to conventional acrylic partial dentures. Treatment included metal coping trials and articulation on a semi-adjustable articulator for precise fit and stable occlusion.",
    outcome:
      "Restored posterior chewing support and aesthetics using custom-fabricated, highly durable, and comfortable metal framework partial dentures.",
    imageUrl: "/case-jugdevi-cpd.png",
  },
  {
    id: 10,
    title: "Ridge Expansion and Bone Grafting for Implants",
    subtitle: "Case: Yogesh Melge (32/M) - Ridge Expansion",
    description: "Surgical management of a narrow mandibular bone ridge, utilizing expansion and bone grafting techniques to create adequate width for successful implant placement.",
    longDescription:
      "The patient had severe horizontal atrophy of the posterior mandibular ridge, making standard implant placement impossible. The treatment involved **sequential ridge expansion** using specialized osteotomes/expansion kits, followed by **corticotomy and bone grafting** with a resorbable membrane. This technique increases bone width, ensuring the implant achieves excellent primary stability and long-term integration.",
    outcome:
      "Successful creation of adequate bone width, leading to stable implant placement and subsequent restoration of functional posterior teeth.",
    imageUrl: "/case-yogesh-ridge.png",
  },
];

export default SUCCESS_STORIES_DATA;