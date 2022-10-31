import type { NextPage } from "next";
import Link from "next/link";
import Layout from "src/components/Layout";

const Settings: NextPage = () => {
  return (
    <Layout>
      <div className="mb-5 flex flex-row text-3xl">
        <h1 className="ml-2">
          <Link href="/">Orders / </Link>Settings
        </h1>
      </div>
    </Layout>
  );
};

export default Settings;
