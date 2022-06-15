import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Clock from "../components/Clock";

export default function Home() {
  return (
    <Layout>
      <Clock></Clock>
    </Layout>
  );
}
