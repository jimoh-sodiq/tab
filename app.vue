<template>
  <div class="w-full px-2 py-16 sm:px-0 bg-blue-500 space-y-20">
    <TabGroup :default-index="1" class="max-w-md">
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
    </TabGroup>
  </div>
  
</template>

<script setup>
import { Tab } from "./components/Tab.ts";
import { TabGroup } from "./components/TabGroup.ts";
import { TabList } from "./components/TabList.ts";
import { TabPanel } from "./components/TabPanel";
import { TabPanels } from "./components/TabPanels.ts";

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
