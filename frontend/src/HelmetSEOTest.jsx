import { Helmet, HelmetProvider } from "react-helmet-async";

export default function HelmetSEOTest({ title, description, name, type }) {
  let helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          {/* Standard metadata tags */}
          <title>{title}</title>
          <link rel="canonical" href="https://www.ri-institute.com/" />

          <meta name="description" content={description} />

          <meta
            name="keywords"
            content="higher diploma,Software Engineer,𝟏𝟎𝟎% a𝐬𝐬𝐢𝐠𝐧𝐦𝐞𝐧𝐭 b𝐚𝐬𝐞, ri stitute,a unique learning,ed tech,edutech,it engineer,how long does it take to learn japanese	,instructional design courses,learning systems"
          />
          <meta
            name="keywords"
            content="diploma frames,diplomation,high school diploma online, RI,ri-institute.com, ri, Institute, RI Institute, ri institute, JLPT, IPTEC, Bachelor, Degree"
          />
          <meta
            name="keywords"
            content="web developer jobs,web developer near me,entry level web developer jobs,web design and development services,javascript vs java programming,php program,php programs near me, business english course,business english lessons "
          />
          <meta
            name="keywords"
            content="networking course,Hardware Course,certification for python programming,visual comfort,portfolio visualizer,web and mobile app development,bachelor of science,european international university,data structures and algorithms in python"
          />

          <meta
            name="google-site-verification"
            content="cOCqz2ZIOmlkFiHgchJ3VfYL6iYoQYr_m6E9gq9rr9s"
          />

          <meta name="geo.region" content="MM-06" />
          <meta name="geo.placename" content="Yangon" />
          <meta name="geo.position" content="16.79401;96.17869" />
          <meta name="ICBM" content="16.79401, 96.17869" />
          {/* End standard metadata tags */}
          {/* Starting robots tag */}
          {/* <meta name="robots" content="robots text" /> */}
          {/* Ending robots  tag */}

          {/* Facebook tags */}
          <meta property="og:url" content="https://www.ri-institute.com/" />
          <meta property="og:type" content={type} />
          <meta property="og:title" content={title} />
          <meta property="og:locale" content="Myanmar" />
          <meta property="og:image" content="favicon.ico" />
          <meta property="og:description" content={description} />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          {/* <meta name="twitter:creator" content={name} />
          <meta name="twitter:card" content={type} />

          
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} /> */}
          {/* End Twitter tags */}
        </Helmet>
      </HelmetProvider>
    </>
  );
}
