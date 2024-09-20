const connectDB = require("./config/db.js");
const Service = require("./models/service.js");

connectDB();
const data = [
  {
    name: "General Consultation",
    description: "A basic consultation with a healthcare provider.",
    price: 500,
    image:
      "https://img.freepik.com/free-photo/serious-man-consulting-with-young-female-physician-doctor-checkup-meeting-hospital-skilled-general-practitioner-giving-healthcare-medical-advices-patient_657921-853.jpg",
  },
  {
    name: "Dental Checkup",
    description: "Routine dental checkup including cleaning.",
    price: 800,
    image:
      "https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg",
  },
  {
    name: "Physiotherapy",
    description: "A session with a certified physiotherapist.",
    price: 1200,
    image:
      "https://t3.ftcdn.net/jpg/02/57/00/80/360_F_257008003_OQhlbx8ZcDh9bLsVzMU2vgk59cEYwqFA.jpg",
  },
  {
    name: "Vaccination",
    description: "Immunization for various diseases.",
    price: 300,
    image:
      "https://www.mdpi.com/files/special_issues_graphic_abstract/79077/ga_banner_covid_stress.jpg",
  },
  {
    name: "Cardiology Consultation",
    description: "Consultation with a cardiologist for heart-related issues.",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/cardiology-consultation-heart-disease-treatment-by-cardiologist_875825-68634.jpg",
  },
  {
    name: "Blood Test",
    description: "Routine blood test for general health checkup.",
    price: 400,
    image:
      "https://media.istockphoto.com/id/1403182301/photo/preparation-for-blood-test-by-female-doctor-medical-uniform-on-the-table-in-white-bright-room.jpg?s=612x612&w=0&k=20&c=U5lfNS8V5aIVrQ4jxd6ST-ayXWXDfV4biSYWdBxGZbQ=",
  },
  {
    name: "Eye Examination",
    description: "A comprehensive eye test.",
    price: 700,
    image:
      "https://st2.depositphotos.com/1468291/6784/i/450/depositphotos_67849231-stock-photo-girl-reviewing-eyesight.jpg",
  },
  {
    name: "X-Ray",
    description: "X-ray imaging for diagnosis.",
    price: 900,
    image:
      "https://st2.depositphotos.com/2779653/6119/i/450/depositphotos_61191689-stock-photo-collection-x-ray-multiple-part.jpg",
  },
  {
    name: "MRI Scan",
    description: "Magnetic Resonance Imaging for detailed scans.",
    price: 5000,
    image:
      "https://media.gettyimages.com/id/182682597/photo/brain.jpg?s=612x612&w=gi&k=20&c=fzKNhQnpJJ8rbcwb5KFFKvh_E5feQZMuakYh1zgfzuk=",
  },
  {
    name: "CT Scan",
    description: "Computed Tomography scan for internal imaging.",
    price: 4000,
    image:
      "https://www.shutterstock.com/image-photo/patient-getting-recommendations-doctor-before-260nw-2323721305.jpg",
  },
  {
    name: "ENT Consultation",
    description: "Consultation with an ENT specialist.",
    price: 600,
    image:
      "https://media.istockphoto.com/id/1390592305/photo/hearing-exam-otolaryngologist-doctor-checking-womans-ear-using-otoscope-or-auriscope-at.jpg?s=612x612&w=0&k=20&c=ax-sAYx57cKN0iDPYqHIDT2w6PXYlZuTcxRbTbdDNm8=",
  },
  {
    name: "Orthopedic Consultation",
    description: "Consultation with an orthopedic doctor.",
    price: 1000,
    image:
      "https://www.shutterstock.com/image-photo/doctors-do-health-it-shot-600nw-2128527452.jpg",
  },
  {
    name: "Diabetes Management",
    description: "Management and treatment of diabetes.",
    price: 1200,
    image:
      "https://static8.depositphotos.com/1031551/849/i/450/depositphotos_8495733-stock-photo-blood-glucose-meter.jpg",
  },
  {
    name: "Cholesterol Test",
    description: "Test to measure cholesterol levels.",
    price: 300,
    image:
      "https://img.freepik.com/premium-photo/blood-sample-with-abnormal-high-report-total-cholesterol-ldl-cholesterol-test_595440-3168.jpg",
  },
  {
    name: "Allergy Test",
    description: "Test for common allergies.",
    price: 1500,
    image:
      "https://t3.ftcdn.net/jpg/02/78/87/86/360_F_278878606_tDq3qvQDixmmFLwCYCBhpS9SiEcc6iBq.jpg",
  },
  {
    name: "Skin Treatment",
    description: "Basic skin treatments.",
    price: 900,
    image:
      "https://img.freepik.com/free-photo/cosmetologist-cleaning-face-woman-beauty-salon_1303-16748.jpg",
  },
  {
    name: "Hearing Test",
    description: "Comprehensive hearing test.",
    price: 700,
    image:
      "https://media.istockphoto.com/id/1325611798/photo/hearing-exam-for-elderly-citizen-people-otolaryngologist-doctor-checking-mature-womans-ear.jpg?s=612x612&w=0&k=20&c=pQ5IyYl64kwTCnsBp55cpPAe4fNXPve7avagagTs73A=",
  },
  {
    name: "Nutrition Consultation",
    description: "Consultation with a nutritionist.",
    price: 800,
    image:
      "https://media.istockphoto.com/id/1204583112/photo/nutritionist-is-consulting-the-patient-about-healthy-diet-with-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=9xqlMsfAvyJ_rbWXmICrJgFAIalLhPe-7uUehX3wdnk=",
  },
  {
    name: "Pediatric Consultation",
    description: "Consultation for children’s healthcare.",
    price: 1000,
    image:
      "https://www.shutterstock.com/image-photo/mother-baby-stethoscope-pediatrician-healthcare-600nw-2310717197.jpg",
  },
  {
    name: "Gynecology Consultation",
    description: "Consultation with a gynecologist.",
    price: 900,
    image:
      "https://img.freepik.com/free-photo/gynecologist-talking-with-young-female-patient-during-medical-consultation-modern-clinic-patient-with-gynecologist-during-consultation-gynecological-office_657921-141.jpg",
  },
  {
    name: "Pregnancy Test",
    description: "Test to confirm pregnancy.",
    price: 300,
    image:
      "https://img.freepik.com/free-psd/hand-holding-positive-pregnancy-test_23-2150945421.jpg",
  },
  {
    name: "Ultrasound",
    description: "Ultrasound imaging for diagnostics.",
    price: 2500,
    image:
      "https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353023.jpg",
  },
  {
    name: "HIV Test",
    description: "Test for HIV.",
    price: 500,
    image:
      "https://t3.ftcdn.net/jpg/00/89/81/04/360_F_89810477_1JqolZYEy9iNallrhWu8cRwI8eIYS2zK.jpg",
  },
  {
    name: "ECG",
    description: "Electrocardiogram test for heart function.",
    price: 300,
    image:
      "https://www.shutterstock.com/image-illustration/human-heart-ecg-graph-3d-260nw-1855544260.jpg",
  },
  {
    name: "Bone Density Test",
    description: "Test to check bone density.",
    price: 1500,
    image:
      "https://img.freepik.com/premium-photo/bone-density-xray-test-measures-bone-strength-assesses-risk-osteoporosis-bone-density-test-evaluates-bone-strength-helps-assess-risk-osteoporosis_507704-10543.jpg",
  },
  {
    name: "Liver Function Test",
    description: "Test to evaluate liver function.",
    price: 600,
    image:
      "https://c8.alamy.com/comp/2GPWBCG/set-of-liver-function-test-for-education-2GPWBCG.jpg",
  },
  {
    name: "Kidney Function Test",
    description: "Test to evaluate kidney function.",
    price: 700,
    image:
      "https://img.freepik.com/free-vector/kidney-realistic-organs-anatomy-poster_603843-3901.jpg",
  },
  {
    name: "Pulmonary Function Test",
    description: "Test to check lung function.",
    price: 1000,
    image:
      "https://www.shutterstock.com/image-vector/pulmonary-lung-medical-function-test-260nw-1134015974.jpg",
  },
  {
    name: "Cancer Screening",
    description: "Screening for common cancers.",
    price: 2000,
    image:
      "https://media.istockphoto.com/id/1347546735/photo/cancer-screening.jpg?s=612x612&w=0&k=20&c=4D3o6CxXk7y0ctpqPRswyqXnip96nQh2kcvlJNbKrbw=",
  },
  {
    name: "Dental Filling",
    description: "Filling of cavities.",
    price: 800,
    image:
      "https://media.istockphoto.com/id/1496589808/photo/teeth-white-composite-filling.jpg?s=612x612&w=0&k=20&c=aOjM16NeDNd4u7U9PQGXWR8Da5YHKgDP4ni4BOhDb2c=",
  },
  {
    name: "Teeth Whitening",
    description: "Cosmetic teeth whitening.",
    price: 2000,
    image:
      "https://t4.ftcdn.net/jpg/00/23/84/21/360_F_23842166_vDYcCEpwueRffVOiCPYFy9cIP8rolttX.jpg",
  },
  {
    name: "Root Canal",
    description: "Root canal treatment.",
    price: 4000,
    image:
      "https://media.istockphoto.com/id/1543511026/photo/root-canal.jpg?s=612x612&w=0&k=20&c=g4TW6JcSzfk0DxKjNFKv5_Ut3hTe03tKCTvXACpD-lU=",
  },
  {
    name: "Hair Transplant",
    description: "Surgical hair transplant.",
    price: 30000,
    image:
      "https://img.freepik.com/free-photo/male-going-through-follicular-unit-extraction-process_23-2149106326.jpg",
  },
  {
    name: "LASIK Surgery",
    description: "Laser eye surgery for vision correction.",
    price: 25000,
    image:
      "https://t3.ftcdn.net/jpg/04/73/86/50/360_F_473865023_aogWU92fPCEDNSlpTmchkYJJNm392XAz.jpg",
  },
  {
    name: "Sleep Study",
    description: "Study to diagnose sleep disorders.",
    price: 3500,
    image:
      "https://media.gettyimages.com/id/1361394278/photo/patient-sleeping-in-a-medical-clinic-doing-polysomnography.jpg?s=612x612&w=gi&k=20&c=zqZm_okxx6bL5ISVPgD3Yb1Anm0zZs0Y06CfCqSZ0Bk=",
  },
  {
    name: "Gastroenterology Consultation",
    description: "Consultation for digestive health.",
    price: 1000,
    image:
      "https://thumbs.dreamstime.com/b/doctor-explores-human-stomach-concept-design-88579571.jpg",
  },
  {
    name: "Thyroid Test",
    description: "Test to check thyroid function.",
    price: 500,
    image:
      "https://media.istockphoto.com/id/1198780608/photo/human-thyroid-anatomy.jpg?s=612x612&w=0&k=20&c=A96BQGdc57yAqHZI3cS2xrHJTPcUBvXsXQqdNSWh8jA=",
  },
  {
    name: "Vaccination (COVID-19)",
    description: "COVID-19 vaccine.",
    price: 800,
    image:
      "https://www.shutterstock.com/image-vector/creative-design-coronavirus-vaccine-banner-260nw-1894336930.jpg",
  },
  {
    name: "Vaccination (Flu)",
    description: "Flu vaccine.",
    price: 600,
    image:
      "https://thumbs.dreamstime.com/b/influenza-vaccine-syringe-vials-37439473.jpg",
  },
  {
    name: "Vaccination (Hepatitis B)",
    description: "Hepatitis B vaccine.",
    price: 1000,
    image:
      "https://media.istockphoto.com/id/1158911104/photo/hepatitis-b-vaccine-vial.jpg?s=612x612&w=0&k=20&c=ypLpJBGUXisCYRNyE9za-XxqfPsMV67eEnR-c8bnaNs=",
  },
  {
    name: "Physical Therapy",
    description: "Therapy to recover from injuries.",
    price: 1500,
    image:
      "https://media.gettyimages.com/id/1356562169/photo/physical-therapist-showing-a-woman-an-exercise-for-her-recovery.jpg?s=612x612&w=gi&k=20&c=TojG8qwjXqR2wjUmloqZjYaXINAvN4azvslb23eOg3I=",
  },
  {
    name: "Mental Health Consultation",
    description: "Consultation with a mental health specialist.",
    price: 1200,
    image:
      "https://media.istockphoto.com/id/1389444855/photo/shot-of-an-attractive-young-woman-sitting-and-talking-to-her-psychologist-during-a.jpg?s=612x612&w=0&k=20&c=LpV9HmdD0_Udg4YlttvwoJyLZWJThxXq-IJKeiy3zbs=",
  },
  {
    name: "Home Visit Doctor",
    description: "Doctor consultation at home.",
    price: 2000,
    image:
      "https://media.istockphoto.com/id/1388906899/photo/shot-of-a-mature-doctor-doing-a-checkup-on-a-little-boy-at-home.jpg?s=612x612&w=0&k=20&c=GXhiWSn6YLgmeV3tVasxkyZSIYTTBLNpOYhpbRHMS0w=",
  },
  {
    name: "Telemedicine Consultation",
    description: "Consultation via video call.",
    price: 700,
    image:
      "https://img.freepik.com/free-photo/creative-collage-telehealth-consultation_23-2149488756.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717891200&semt=ais_user",
  },
  {
    name: "Senior Citizen Health Package",
    description: "Health checkup package for senior citizens.",
    price: 3000,
    image:
      "https://www.policybazaar.com/images/Health/health-insurance-for-senior-citizens.jpg",
  },
  {
    name: "Child Vaccination Package",
    description: "Complete vaccination package for children.",
    price: 5000,
    image:
      "https://thumbs.dreamstime.com/b/baby-receiving-vaccine-doctor-s-office-30123048.jpg",
  },
  {
    name: "Blood Pressure Check",
    description: "Check blood pressure.",
    price: 200,
    image:
      "https://media.istockphoto.com/id/175264754/photo/ensuring-her-vitals-are-nominal-before-the-procedure.jpg?s=612x612&w=0&k=20&c=_ocd8PO8DUD3mubYBC6pkPEBM84cJdbFSkGIRs3Lvo4=",
  },
  {
    name: "Heart Disease Screening",
    description: "Screening for heart disease.",
    price: 1500,
    image:
      "https://www.lifelinelaboratory.com/blog/wp-content/uploads/2022/08/650x350_did_you_know_this_could_lead_to_heart_disease_slideshow.jpg",
  },
  {
    name: "Chronic Disease Management",
    description: "Management of chronic diseases.",
    price: 2500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRva4EzEn7G2aiN8w9jyXlfscN5aVtxiM235A&s",
  },
];

const initData = async () => {
  try {
    // await Service.deleteMany();
    await Service.insertMany(data);
    console.log("Our initial data is saved");
  } catch (err) {
    console.log(err.message);
  }
};

initData();
