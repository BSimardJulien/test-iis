import react from "react";
import Link from 'next/link'

const Page = ({title,linkTo}) => {
  return (
    <div>
      <h2>Welcome to {title} page</h2>
      <Link  href={linkTo.path}>
        <a>Go to {linkTo.page}</a>
      </Link>
    </div>
  );
};

export default Page;
