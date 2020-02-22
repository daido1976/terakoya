import { sortAscByStartedAt, formatAsDate } from ".";

describe("sortAscByStartedAt", () => {
  const events = [
    {
      site: "connpass",
      title: "名古屋駅前 朝からがっちり！もくもく会 2020.3.19",
      address: "愛知県名古屋市西区名駅2-34-17(セントラル名古屋710)",
      startedAt: "2020-03-19T08:00:00+09:00",
      eventUrl: "https://redoit.connpass.com/event/167362/"
    },
    {
      site: "doorkeeper",
      title: "Pluto🚀休日読書会📗 vol.6 「ノンデザイナーズ・デザインブック」",
      address: "東京都渋谷区代々木1丁目36-4 全理連ビル 4階 イベントスペース",
      startedAt: "2020-03-08T00:50:00.000Z",
      eventUrl: "https://pluto.doorkeeper.jp/events/104294"
    },
    {
      site: "connpass",
      title: "IT osaka勉強会 #03",
      address: "大阪市西区 南堀江 1-15-9 (南堀江コレットビル 7階)",
      startedAt: "2020-03-15T13:00:00+09:00",
      eventUrl: "https://web-kansai-study.connpass.com/event/166465/"
    }
  ];

  const results = [
    {
      site: "doorkeeper",
      title: "Pluto🚀休日読書会📗 vol.6 「ノンデザイナーズ・デザインブック」",
      address: "東京都渋谷区代々木1丁目36-4 全理連ビル 4階 イベントスペース",
      startedAt: "2020-03-08T00:50:00.000Z",
      eventUrl: "https://pluto.doorkeeper.jp/events/104294"
    },
    {
      site: "connpass",
      title: "IT osaka勉強会 #03",
      address: "大阪市西区 南堀江 1-15-9 (南堀江コレットビル 7階)",
      startedAt: "2020-03-15T13:00:00+09:00",
      eventUrl: "https://web-kansai-study.connpass.com/event/166465/"
    },
    {
      site: "connpass",
      title: "名古屋駅前 朝からがっちり！もくもく会 2020.3.19",
      address: "愛知県名古屋市西区名駅2-34-17(セントラル名古屋710)",
      startedAt: "2020-03-19T08:00:00+09:00",
      eventUrl: "https://redoit.connpass.com/event/167362/"
    }
  ];

  it("sorts ASC by startedAt", () => {
    expect(sortAscByStartedAt(events)).toEqual(results);
  });
});

describe("formatDate", () => {
  it("formats as a date", () => {
    const rawValue = "2020-03-15T13:00:00+09:00";
    const result = "2020/03/15(日)";

    expect(formatAsDate(rawValue)).toBe(result);
  });
});
