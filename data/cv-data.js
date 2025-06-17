const CV_DATA = {
  profile: {
    name: {
      kor: "홍길동",
      eng: "Gildong Hong"
    },
    tagline: {
      kor: "끊임없이 배우고 성장하는 소프트웨어 엔지니어",
      eng: "A Software Engineer Who Never Stops Learning and Growing"
    },
    email: "gildong.hong@example.com",
    phone: "010-1234-5678",
    location: {
      kor: "대한민국 서울",
      eng: "Seoul, South Korea"
    },
    keywords: [
      { kor: "웹 개발", eng: "Web Development" },
      { kor: "백엔드 시스템", eng: "Backend Systems" },
      { kor: "소프트웨어 아키텍처", eng: "Software Architecture" },
      { kor: "데이터베이스 설계", eng: "Database Design" },
      { kor: "클라우드 인프라", eng: "Cloud Infrastructure" }
    ],
    qualificationSummary: {
      kor: "정보처리기사, AWS Certified Solutions Architect - Associate",
      eng: "Engineer Information Processing, AWS Certified Solutions Architect - Associate"
    },
    links: {
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      blog: "https://example.log"
    }
  },
  introduction: {
    title: { kor: "소개", eng: "Introduction" },
    selfIntroduction: {
      kor: "안녕하세요. 저는 5년차 소프트웨어 엔지니어 홍길동입니다. 비즈니스 문제를 기술로 해결하고, 사용자에게 더 나은 가치를 제공하는 것에 큰 보람을 느낍니다. 탄탄한 컴퓨터 공학 전공 지식을 바탕으로 확장 가능하고 유지보수성이 높은 시스템을 설계하고 개발하는 데 강점이 있습니다. 특히 대용량 트래픽 처리와 안정적인 서비스 운영 경험을 통해 얻은 노하우를 새로운 환경에서 기여하고 싶습니다. 동료와의 협업과 코드 리뷰를 통한 동반 성장을 중요하게 생각하며, 항상 새로운 기술을 배우고 적용하는 것을 즐깁니다.",
      eng: "Hello, I am Gildong Hong, a software engineer with 5 years of experience. I find great satisfaction in solving business problems with technology and delivering better value to users. With a solid foundation in computer science, I excel at designing and developing scalable and maintainable systems. I want to contribute my expertise, particularly in handling large-scale traffic and ensuring stable service operations, to a new environment. I value collaborative growth through teamwork and code reviews and always enjoy learning and applying new technologies."
    },
    goals: {
      kor: "저의 단기적인 목표는 현재의 기술 스택을 더욱 깊이 있게 이해하고 활용하여 팀의 기술적 과제를 해결하는 데 핵심적인 역할을 수행하는 것입니다. 중장기적으로는 복잡한 도메인 문제를 해결하는 소프트웨어 아키텍처를 설계하고, 기술 리더십을 발휘하여 프로젝트와 팀의 성공을 이끌고 싶습니다. 또한, 오픈소스 프로젝트에 기여하거나 기술 블로그를 운영하며 제가 가진 지식과 경험을 커뮤니티와 나누고 싶습니다. 궁극적으로는 기술을 통해 사회에 긍정적인 영향을 미치는 혁신적인 서비스를 만드는 것이 저의 꿈입니다.",
      eng: "My short-term goal is to play a key role in solving the team's technical challenges by deepening my understanding and application of the current tech stack. In the mid-to-long term, I aspire to design software architectures that solve complex domain problems and lead projects and teams to success through technical leadership. I also wish to share my knowledge and experience with the community by contributing to open-source projects or running a tech blog. Ultimately, my dream is to create innovative services that have a positive impact on society through technology."
    }
  },
  education: {
    title: { kor: "학력", eng: "Education" },
    items: [
      {
        degree: { kor: "소프트웨어공학 석사", eng: "Master of Science in Software Engineering" },
        institution: { kor: "한국대학교 대학원", eng: "Hanguk University, Graduate School" },
        period: { kor: "2018.03 - 2020.02", eng: "Mar 2018 - Feb 2020" },
        description: { kor: "논문: 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "Thesis: A Study on Efficient Data Processing Techniques in Distributed Systems" }
      },
      {
        degree: { kor: "컴퓨터공학 학사", eng: "Bachelor of Science in Computer Science" },
        institution: { kor: "한국대학교", eng: "Hanguk University" },
        period: { kor: "2014.03 - 2018.02", eng: "Mar 2014 - Feb 2018" },
        description: { kor: "GPA: 4.1 / 4.5 | 수석 졸업", eng: "GPA: 4.1 / 4.5 | Graduated Summa Cum Laude" }
      }
    ]
  },
  experience: {
    title: { kor: "경력", eng: "Experience" },
    items: [
      {
        position: { kor: "시니어 소프트웨어 엔지니어", eng: "Senior Software Engineer" },
        company: "넥스트 테크",
        period: { kor: "2022.03 - 현재", eng: "Mar 2022 - Present" },
        tasks: [
          { kor: "주문 처리 시스템 백엔드 API 개발 및 운영", eng: "Developed and operated backend APIs for the order processing system." },
          { kor: "MSA 기반 아키텍처 설계 및 전환 리드", eng: "Led the design and transition to a Microservices Architecture." },
          { kor: "CI/CD 파이프라인 구축 및 배포 자동화", eng: "Established CI/CD pipelines and automated deployment." }
        ]
      },
      {
        position: { kor: "소프트웨어 엔지니어", eng: "Software Engineer" },
        company: "알파 솔루션즈",
        period: { kor: "2020.03 - 2022.02", eng: "Mar 2020 - Feb 2022" },
        tasks: [
          { kor: "B2B SaaS 플랫폼 기능 개발", eng: "Developed features for a B2B SaaS platform." },
          { kor: "데이터베이스 스키마 설계 및 쿼리 최적화", eng: "Designed database schemas and optimized queries." },
          { kor: "레거시 시스템 유지보수 및 성능 개선", eng: "Maintained and improved the performance of legacy systems." }
        ]
      },
      {
        position: { kor: "소프트웨어 엔지니어 인턴", eng: "Software Engineer Intern" },
        company: "스타트업 인큐베이터",
        period: { kor: "2019.07 - 2019.08", eng: "Jul 2019 - Aug 2019" },
        tasks: [
          { kor: "사내 관리자 페이지 프론트엔드 개발 참여", eng: "Participated in developing the frontend for an internal admin page." },
          { kor: "단위 테스트 및 통합 테스트 코드 작성", eng: "Wrote unit and integration test codes." }
        ]
      }
    ]
  },
  projects: {
    title: { kor: "프로젝트", eng: "Projects" },
    items: Array.from({ length: 8 }).map((_, i) => ({
      title: { kor: `프로젝트 ${i + 1}`, eng: `Project ${i + 1}` },
      description: {
        kor: `이 프로젝트는 ${i + 1}번째 샘플 프로젝트입니다. 사용자 경험을 개선하고 비즈니스 목표를 달성하기 위해 다양한 기술을 활용했습니다.`,
        eng: `This is the ${i + 1}th sample project. It utilized various technologies to improve user experience and achieve business goals.`
      },
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      period: { kor: "2023.01 - 2023.03", eng: "Jan 2023 - Mar 2023" },
      link: "#",
      image: `./assets/images/project-thumbnail-${i + 1}.png`,
      details: {
        kor: `<h3>프로젝트 ${i + 1} 상세 설명</h3><p>이곳에 프로젝트의 목표, 내가 맡은 역할, 기술적 도전 과제, 해결 과정, 성과 등을 구체적으로 서술합니다. 마크다운 형식으로 자유롭게 작성할 수 있습니다.</p><ul><li>주요 기능 1</li><li>주요 기능 2</li><li>주요 기능 3</li></ul>`,
        eng: `<h3>Project ${i + 1} Detailed Description</h3><p>Here, you can describe the project's goals, your role, technical challenges, the problem-solving process, and outcomes in detail. You can write freely in Markdown format.</p><ul><li>Key Feature 1</li><li>Key Feature 2</li><li>Key Feature 3</li></ul>`
      }
    }))
  },
  skills: {
    title: { kor: "기술", eng: "Skills" },
    categories: [
      {
        name: { kor: "프로그래밍 언어", eng: "Programming Languages" },
        items: [
          { name: "JavaScript (ES6+)", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Java", level: 80 },
          { name: "Python", level: 75 }
        ]
      },
      {
        name: { kor: "프론트엔드", eng: "Frontend" },
        items: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 80 },
          { name: "HTML5 / CSS3", level: 85 }
        ]
      },
      {
        name: { kor: "백엔드", eng: "Backend" },
        items: [
          { name: "Node.js (Express)", level: 90 },
          { name: "Spring Boot", level: 75 },
          { name: "NestJS", level: 85 }
        ]
      },
      {
        name: { kor: "데이터베이스 & 클라우드", eng: "Database & Cloud" },
        items: [
          { name: "MySQL, PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "AWS (EC2, S3, RDS)", level: 80 },
          { name: "Docker", level: 75 }
        ]
      }
    ]
  },
  research: {
    title: { kor: "연구", eng: "Research" },
    items: [
      {
        title: { kor: "분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "A Study on Efficient Data Processing Techniques in Distributed Systems" },
        publication: { kor: "한국정보과학회 학술대회", eng: "KIISE Conference" },
        date: "2020.02",
        link: "http://sol-link.com/paper1"
      }
    ]
  },
  awards: {
    title: { kor: "수상 및 자격증", eng: "Awards & Certifications" },
    items: [
      {
        name: { kor: "AWS Certified Solutions Architect – Associate", eng: "AWS Certified Solutions Architect – Associate" },
        issuer: "Amazon Web Services",
        date: "2023.05"
      },
      {
        name: { kor: "정보처리기사", eng: "Engineer Information Processing" },
        issuer: { kor: "한국산업인력공단", eng: "HRD Korea" },
        date: "2019.11"
      },
      {
        name: { kor: "한국대학교 총장상 (수석 졸업)", eng: "President's Award, Hanguk University (Summa Cum Laude)" },
        issuer: { kor: "한국대학교", eng: "Hanguk University" },
        date: "2018.02"
      }
    ]
  },
  nav: {
    introduction: { kor: "소개", eng: "Intro" },
    education: { kor: "학력", eng: "Education" },
    experience: { kor: "경력", eng: "Experience" },
    projects: { kor: "프로젝트", eng: "Projects" },
    skills: { kor: "기술", eng: "Skills" },
    research: { kor: "연구", eng: "Research" },
    awards: { kor: "수상/자격증", eng: "Awards" }
  },
  contact: {
    ctaButton: { kor: "연락하기", eng: "Contact Me" },
    modalTitle: { kor: "연락 주셔서 감사합니다", eng: "Thank You for Reaching Out" },
    modalIntro: { kor: "아래 폼을 작성해주시면, 검토 후 빠르게 연락드리겠습니다.", eng: "Please fill out the form below, and I will get back to you promptly." },
    form: {
        name: { kor: "이름/회사명", eng: "Name / Company" },
        email: { kor: "이메일", eng: "Email" },
        message: { kor: "메시지", eng: "Message" },
        submit: { kor: "제출하기", eng: "Submit" }
    }
  },
  footer: {
      copyright: { kor: "ⓒ 2025 홍길동. All Rights Reserved.", eng: "© 2025 Gildong Hong. All Rights Reserved."}
  }
};
