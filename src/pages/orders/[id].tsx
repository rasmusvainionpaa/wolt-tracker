import prisma from "src/lib/prisma";
import { GetServerSidePropsContext, NextPage } from "next";
import { OrderType } from "src/types/order";
import Layout from "src/components/Layout";
import Link from "next/link";

type Props = {
    order: OrderType;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const orderRaw = await prisma.order.findUnique({
        where: {
            id: parseInt(context?.query.id as string, 10),
        },
    });

    if (!orderRaw) {
        return {
          redirect:{
          destination: "/",
          permanent: false,
          }
        };
    }

    const order = JSON.parse(JSON.stringify(orderRaw))

    return {
        props: {order}
    }
}

const Home: NextPage<Props> = ({order}) => {
    console.log(order)
    return (
        <Layout>

            <div className="mb-5 flex flex-row text-3xl">
                <h1 className="ml-2">
                    <Link href="/">Orders / </Link>{order.id}
                </h1>
            </div>

            <div className="flex flex-col">
                <div>
                    <h1>
                        Store: {order.store}
                    </h1>
                </div>
                <div>
                    <p>
                        Price: {order.price}
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Home;