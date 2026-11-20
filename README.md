# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/nerdwallet6/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/nerdwallet6/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Sums up the world's news of Thursday 19 November 2026 in one image: a front-page poster. The lead is the first-ever three-way summit of Donald Trump, Xi Jinping and Vladimir Putin in Shenzhen — about 90 minutes on the APEC sidelines, ending in a joint "peace declaration" on nuclear risks and stable energy flows. Below it, the ICJ ruling that Myanmar committed genocide against the Rohingya, and GTA VI launching worldwide as the biggest launch in gaming history (99 on Metacritic, about $1.84bn and 19m+ copies on day one). The lower rows cover Anthropic's record $81bn IPO, Cyclone Akvan bearing down on India's east coast, Israeli tanks pushing deeper into central Gaza, Ukraine hitting the Kerch Bridge a third time this week, the US strike on Qeshm Island and the Houthi missile that damaged Riyadh's PIF Tower, and the COP31 deadlock in Antalya. The footer adds the Bangladesh unrest, the record $190.4m Van Gogh sale, Denmark's Greenland security deal, Bitcoin dipping below $63,000, the Gas Husky tanker sinking, the IAEA on Yongbyon, the EU's proposed €45bn Ukraine loan, and the Jeffries Speaker nomination.

## The image

`entry.png` is a 1024×1024 front page drawn for this competition: the date is in the masthead, each story carries a clean illustration with a short headline and a one-line summary, and the sources (AP, Reuters, DPA) are credited in the footer. Every fact was checked against reporting first published on 19 November 2026.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` byte for byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). No network, deterministic — both runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=aleca&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
