<template>
  <div>
    <Snakke />
    <SectionHeader />
    <SectionColumn />
    <SectionSlider />
    <SectionOffice />
    <SectionHardDay />
    <SectionCards />
    <SectionInsp />
    <SectionFooter />
  </div>
</template>
<script>
import Snakke from "@/components/UI/Snakke";
import SectionHeader from "@/components/SectionHeader";
import SectionColumn from "@/components/SectionColumn";
import SectionSlider from "@/components/SectionSlider";
import SectionOffice from "@/components/SectionOffice";
import SectionHardDay from "@/components/SectionHardDay";
import SectionCards from "@/components/SectionCards";
import SectionInsp from "@/components/SectionInsp";
import SectionFooter from "@/components/SectionFooter";
export default {
  name: "App",
  components: {
    Snakke,
    SectionHeader,
    SectionColumn,
    SectionSlider,
    SectionOffice,
    SectionHardDay,
    SectionCards,
    SectionInsp,
    SectionFooter,
  },
};
</script>
