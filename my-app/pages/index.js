import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layout } from "@components/index";
import Hero from "@components/landing/hero";
import CalloutCarousel from "@components/landing/calloutCarousel";
import AboutSection from "@components/landing/about";
import ServicesComponent from "@components/landing/servicesComponent";
import GetQuoteSection from "@components/landing/getQuoteSection";
import OurProjectsSection from "@components/landing/ourProjectsSection";
import StatsSection from "@components/landing/statsSection";
import FaqSection from "@components/landing/faqSection";
import QuoteHeaderSection from "@components/landing/quoteHeaderSection";
import TestimonialsSection from "@components/landing/testimonialsSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <CalloutCarousel />
        <AboutSection />
        <ServicesComponent />
        <GetQuoteSection />
        <OurProjectsSection />
        <StatsSection />
        <FaqSection />
        <TestimonialsSection />
        <QuoteHeaderSection />
      </Layout>
    </>
  );
}
