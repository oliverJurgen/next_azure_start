export async function getServerSideProps() {
  // Fetch data from external API
  //   const res = await fetch(`https://.../data`);
  //   const data = await res.json();

  // Pass data to the page via props
  return { props: { data: { foo: "bar" } } };
}

const SSR = (props) => {
  console.log(props);
  return <div>SSR TEST - check console</div>;
};

export default SSR;
