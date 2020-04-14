import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>Movies Aman</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </Head>
    <div>
      <div className="container-fluid p-4">{props.children}</div>
    </div>

    <style jsx>{`
      div {
        background: #343a40;
      }
    `}</style>
  </div>
);

export default Layout;
