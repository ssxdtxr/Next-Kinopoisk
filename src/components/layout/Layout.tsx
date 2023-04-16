import React, {FC, PropsWithChildren} from 'react';
import {Header} from "@/components/layout/header/Header";
import {Footer} from "@/components/layout/footer/Footer";
import Head from "next/head";


interface ILayout {
    title: string
    keywords: string
    description: string
    image?: string
}
export const Layout: FC<PropsWithChildren & ILayout> = ({children, description, title, keywords, image}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="og:image" content={image ? image : "john.jpeg"} />
            </Head>
            <Header />
                {children}
            <Footer />
        </>
    );
};

