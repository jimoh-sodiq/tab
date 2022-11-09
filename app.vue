<template>
  <div class="p-5">
    <!-- <TabGroup :default-index="1" class="max-w-md">
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          :tabId="idx"
          v-slot="{ isSelected }"
          v-for="(category, idx) in Object.keys(categories)"
          :key="category"
          class="w-full"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              isSelected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel
          :panelId="idx"
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <TabGroup class="max-w-md" :default-index="0">
      <TabList class="w-full flex gap-x-3">
        <Tab :tabId="0" class="p-2 bg-green-200">Open Tab 1</Tab>
        <Tab :tabId="1" class="p-2 bg-green-200">Open Tab 2</Tab>
      </TabList>
      <TabPanels class="mt-2 bg-green-400">
        <TabPanel :panelId="0">Come back home panel</TabPanel>
        <TabPanel :panelId="1">Come back homme</TabPanel>
      </TabPanels>
    </TabGroup> -->

    <!-- <FlowBox as="main" horizontal :vertical="true" class="bg-yellow-500 w-full h-1/2">
      <p class="mt-16 w-20 whitespace-nowrap">This is it</p>
      <p class="mt-16 w-20 whitespace-nowrap">This is it</p>
      <p class="mt-16 w-20 whitespace-nowrap">This is it</p>
      <p class="mt-16 w-20 whitespace-nowrap">This is it</p>
      <p class="my-44">This is it</p>
      <p class="my-44">This is it</p>
      <p class="my-44">This is it</p>
      <p class="my-44">This is it</p>
      <p class="my-44">This is it</p>
      <p class="my-44">This is it</p>
      <Button />
    </FlowBox>
    <div class="h-screen bg-red-400 w-full">Content</div> -->
    <!-- <Combobox>jjjdfadf</Combobox> -->
    <!-- <Popover class="relative">
      <PopoverButton v-slot="{menuIsVisible}" class="bg-red-600 text-white w-fit p-2 rounded-sm">click me {{ menuIsVisible }}</PopoverButton>
      <PopoverPanel class="absolute left-0 z-10 mt-2 bg-gray-200 shadow rounded p-3 top-full max-w-sm lg:max-w-3xl">
      <div>Panel here</div>
      </PopoverPanel>
    </Popover> -->
    <!-- <Toggle /> -->
    <!-- <label
      @keydown.enter="switcher"
      tabindex="0"
      :class="check ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="check ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />

      <input type="checkbox" v-model="check" hidden />
    </label> -->
    <!-- {{ check }} -->
    <Toggle
      v-slot="{ handleClick }"
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
      <div @click="handleClick">Eat Food</div>
    </Toggle>

    {{ enabled }}

    <div
      class="flex items-center gap-x-5 border w-[80vw] mx-auto p-3 overflow-x-auto snap-x relative"
    >
      <div
        id="observerRoot"
        ref="observerRoot"
        class="w-48 h-48 shrink-0 border border-red-400 fixed left-1/2 translate-x-[-50%]"
      />
      <div
        ref="targetBoxes"
        class="grid place-items-center text-xl font-medium text-white bg-green-500 h-40 w-40 shrink-0 snap-center"
        v-for="(box, index) in 30"
        :key="index"
      >
        box {{ box }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Popover, PopoverButton, PopoverPanel } from "./components/popover.ts";
// import { Combobox } from "./components/Combobox";
// import { FlowBox } from "./components/FlowBox";
// import { Tab } from "./components/Tab.ts";
import { Toggle } from "./components/Toggle.ts";
// import { TabGroup } from "./components/TabGroup.ts";
// import { TabList } from "./components/TabList.ts";
// import { TabPanel } from "./components/TabPanel";
// import { TabPanels } from "./components/TabPanels.ts";

const observerRoot = ref();
const targetBoxes = ref([]);

onMounted(() => {
  let options = {
    root: document.getElementById("observerRoot"),
    rootMargin: "0px",
    threshold: 0.5,
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) console.log("intersetion");
    });
  };

  targetBoxes.value.forEach((box) => {
    let observer = new IntersectionObserver(callback, options);
    observer.observe(box);
  });
});

const check = ref(false);

const switcher = () => {
  check.value = !check.value;
};
const enabled = ref(false);
const categories = ref({
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>

<style>
/* we will explain what these classes do next! */
</style>
